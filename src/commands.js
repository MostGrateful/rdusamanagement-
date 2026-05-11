const { SlashCommandBuilder } = require('discord.js');

const commands = [
  {
    data: new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Check whether the bot is online.'),
    async execute(interaction) {
      const latency = Date.now() - interaction.createdTimestamp;
      await interaction.reply(`Pong! Latency: ${latency}ms`);
    },
  },
  {
    data: new SlashCommandBuilder()
      .setName('say')
      .setDescription('Make the bot repeat a message.')
      .addStringOption((option) =>
        option
          .setName('message')
          .setDescription('The message to repeat.')
          .setRequired(true),
      ),
    async execute(interaction) {
      const message = interaction.options.getString('message', true);
      await interaction.reply(message);
    },
  },
];

module.exports = { commands };
