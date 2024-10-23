const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.OPENAI_KEY; 
const model = process.env.OPENAI_MODEL || "gpt-3.5-turbo"; 

async function prompt(content, prompt) {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
        
    try {
        const response = await axios.post(apiUrl, {
            model: model,
            messages: [
                { "role": "system", "content": content },
                { "role": "user", "content": prompt }
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const result = response.data;
        const message = result.choices[0].message.content;
        
        console.log('Response from OpenAI:', message);
        return message;

    } catch (error) {
        console.error('Error querying OpenAI:', error.response ? error.response.data : error.message);
    }
}

module.exports = { prompt };
