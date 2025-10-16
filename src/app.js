import { Client } from 'discord.js';

import { AutoPoster } from 'topgg-autoposter'
import { Logger } from 'commandkit';

process.loadEnvFile('./.env');

const client = new Client({
  intents: ["Guilds"],
});

const ap = AutoPoster(process.env.TOPGGTOKEN, client)

ap.on('posted', () => {
  Logger.info('Posted stats to Top.gg!')
})

export default client;
