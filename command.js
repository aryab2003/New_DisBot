import { REST } from 'discord.js';
import { Routes } from 'discord-api-types/v9';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const commands = [
  {
    name: 'server',
    description: 'Replies with server details',
  },
  {
    name: 'joke',
    description: 'Tells a random joke',
  },
];

const token = process.env.DISCORD_TOKEN;

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1128669842602467348'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
