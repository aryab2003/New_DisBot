import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; 
  try {
    await message.reply({ content: 'Hi from DisBot' });
  } catch (error) {
    console.error('Error sending reply:', error);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand() || interaction.commandName !== 'serverinfo') return;

  const guild = interaction.guild;
  const memberCount = guild.memberCount;
  const serverInfo = `Server Name: ${guild.name}\nServer ID: ${guild.id}\nMember Count: ${memberCount}`;

  interaction.reply(serverInfo);
});

client.login(token);
