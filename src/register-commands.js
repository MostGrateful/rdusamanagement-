require('dotenv').config();

const { REST, Routes } = require('discord.js');
const { commands } = require('./commands');

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_GUILD_ID) {
  console.error('Missing DISCORD_TOKEN, DISCORD_CLIENT_ID, or DISCORD_GUILD_ID in .env');
  process.exit(1);
}

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);
const commandData = commands.map((command) => command.data.toJSON());

async function registerCommands() {
  try {
    console.log(`Registering ${commandData.length} slash command(s)...`);

    await rest.put(
      Routes.applicationGuildCommands(DISCORD_CLIENT_ID, DISCORD_GUILD_ID),
      { body: commandData },
    );

    console.log('Slash commands registered.');
  } catch (error) {
    console.error('Failed to register slash commands:');
    console.error(error);
    process.exit(1);
  }
}

registerCommands();
