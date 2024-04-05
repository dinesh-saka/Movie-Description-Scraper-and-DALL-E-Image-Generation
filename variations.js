import { Configuration, OpenAIApi } from 'openai';
import { writeFileSync } from 'fs';

const configuration = new Configuration({
    apiKey: "YOUR_API_KEY",
});

const openai = new OpenAIApi(configuration);



const src = "./mona.jpg"
const result = await openai.createImageVariation(
    createReadStream(`./img/${src}`),
    1,
    "1024x1024"
);

const url = result.data.data[0].url;
console.log(url);


const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer() )
writeFileSync(`./img/${Date.now()}.png`, buffer);
