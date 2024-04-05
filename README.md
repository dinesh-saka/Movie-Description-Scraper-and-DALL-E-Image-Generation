# Movie Description Scraper and DALL-E Image Generation

This project utilizes web scraping to gather movie descriptions from Google search results and generates images using the DALL-E API by OpenAI. 

## Getting Started

### Prerequisites
- Node.js installed on your machine
- OpenAI API key

### Installation
1. Clone this repository to your local machine.
2. Install dependencies by running `npm install` in the project directory.

### Configuration
1. Replace `"YOUR_OPENAI_API_KEY"` with your actual OpenAI API key in the `apiKey` field of the `Configuration` object in both `index.js` files.
2. Ensure your Google search is not blocked by CAPTCHA or any other restrictions.

## Usage
1. Run `npm start` in your terminal to execute the project.
2. Enter the movie name when prompted.
3. The program will scrape the movie description from Google search results and generate an image using the DALL-E API.

## Directory Structure
- `index.js`: Contains the main functionality for scraping movie descriptions and generating images.
- `package.json`: Specifies project dependencies and scripts.
- `README.md`: Documentation for the project.

## Libraries Used
- `openai`: OpenAI's official API wrapper for interacting with their services.
- `fs`: Node.js file system module for file operations.
- `https`: Node.js HTTP module for making HTTP requests.
- `cheerio`: A fast, flexible, and lean implementation of jQuery for the server.
