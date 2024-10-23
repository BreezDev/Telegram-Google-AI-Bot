require('dotenv').config();  // To load environment variables from .env

const TelegramBot = require('node-telegram-bot-api');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Create a bot instance with the Telegram Token
const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Create an instance of Google Generative AI using the Gemini model
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Function to get response from Gemini AI
async function getGeminiResponse(prompt) {
    try {
        // Call the Gemini API to generate text content based on the prompt
        const result = await model.generateContent(prompt);

        // Extract and return the generated text
        return result.response.text();
    } catch (error) {
        console.error('Error fetching from Google Gemini:', error);
        return "Sorry, I couldn't process your request.";
    }
}


// Telegram bot event listener for incoming messages
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userInput = msg.text;
    console.log({userInput})
    // Check if the message is the /start command
    if (userInput === '/start') {
        // Send a welcome message when /start is received
        bot.sendMessage(chatId, '🤖 Welcome to the *Google Gemini AI Bot!* You can send me any text, and I will respond to the best of my ability. How can I assist you today?\n\n*🏹 Things I Can Do:\n' +
            '\n❔ Answer Questions\n📰 Generate Text\n🌐 Translate Languages' +
            '\n📕 Summarize Information\n🖥️ Provide Code Examples\nAnd much more*!', { parse_mode: 'Markdown' });
        return;  // Return early to avoid processing /start as a prompt
    }

    // Indicate that the bot is "typing" while processing
    bot.sendChatAction(chatId, 'typing');

    // Get the AI-generated response from Google Gemini
    const aiResponse = await getGeminiResponse(userInput);

    // Send the AI response back to the user on Telegram, with Markdown formatting enabled
    bot.sendMessage(chatId, (aiResponse), { parse_mode: 'Markdown' });
});

console.log('Bot is running...');

