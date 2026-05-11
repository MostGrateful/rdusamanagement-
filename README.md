# RUSA Discord Bot

A simple Discord bot using `discord.js` with slash commands.

## Setup

1. Install Node.js 20 or newer.
2. Install dependencies:

   ```powershell
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in:

   ```env
   DISCORD_TOKEN=your_bot_token_here
   DISCORD_CLIENT_ID=your_application_client_id_here
   DISCORD_GUILD_ID=your_test_server_id_here
   ```

4. In the Discord Developer Portal:
   - Create an application.
   - Add a bot.
   - Copy the bot token into `DISCORD_TOKEN`.
   - Copy the application ID into `DISCORD_CLIENT_ID`.
   - Enable the `Message Content Intent` if you want to add normal message commands later.

5. Invite the bot to your server with the `bot` and `applications.commands` scopes.

## Run

Register slash commands for your test server:

```powershell
npm run register
```

Start the bot:

```powershell
npm start
```

## Commands

- `/ping` replies with the bot latency.
- `/say message:<text>` makes the bot repeat a message.
