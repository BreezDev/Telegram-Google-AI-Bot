# Telegram AI Bot with Google Gemini

This is a simple Telegram bot that uses Google Gemini's AI to generate responses. Users can ask the bot questions, and the bot will reply with answers powered by Google's Gemini API.

## Prerequisites

- Node.js installed on your machine.
- A Telegram bot token (get one from [BotFather](https://core.telegram.org/bots#botfather)).
- A Google Gemini API key (get one from [Google AI Studio](https://studio.google.com)).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/breezdev/telegram-gemini-bot.git
   cd telegram-gemini-bot

2. Install Dependencies
    ```bash
    npm install

3. Create a ``.env`` file based on the ``.env.example`` file:
    ```bash
    cp .env.example .env

4. Open the ``.env`` file and replace the placeholders with your actual credentials:
   ```bash
    TELEGRAM_TOKEN=your_telegram_bot_token_here
    API_KEY=your_google_gemini_api_key_here

## Running The Bot
    node bot.js
