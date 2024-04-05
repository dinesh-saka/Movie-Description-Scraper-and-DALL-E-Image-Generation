import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';

const configuration = new Configuration({
    apiKey: "YOUR_API_KEY",
});

const openai = new OpenAIApi(configuration);

const prompt = "Aditya, a heartbroken business tycoon, aimlessly boards a train to escape his depressing life. He meets Geet, a bubbly Punjabi girl, and gets pulled into her crazy life."

const result = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
    user: "jeffreybezoz"
});

const url = result.data.data[0].url;
console.log(url);


const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer() )
writeFileSync(`./img/${Date.now()}.png`, buffer);
