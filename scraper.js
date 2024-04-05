import https from 'https';
import cheerio from 'cheerio';

async function scrapeMovieDescription(movieName) {
  try {
    const searchQuery = encodeURIComponent(`${movieName} movie`);
    const searchUrl = `https://www.google.com/search?q=${searchQuery}`;

    const response = await new Promise((resolve, reject) => {
      https.get(searchUrl, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
      }).on('error', (error) => {
        reject(error);
      });
    });

    const $ = cheerio.load(response);

    const descriptionElement = $('div.kno-rdesc span').first();
    const description = descriptionElement.text();

    return description;
  } catch (error) {
    console.error('Error scraping movie description:', error);
    return null;
  }
}

// Usage example
const movieName = 'Interstellar';
scrapeMovieDescription(movieName)
  .then((description) => {
    if (description) {
      console.log(`Movie: ${movieName}`);
      console.log(`Description: ${description}`);
      // Use the description as input for your OpenAI prompt here
    } else {
      console.log(`No description found for ${movieName}`);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });