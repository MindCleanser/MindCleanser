import { Client } from 'discord.js';
import { spawn } from 'child_process';
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


spawn('npx', ['commandkit', 'start'], { stdio: 'inherit', shell: true })

//spawn('npx', ['commandkit', 'start'], { stdio: 'inherit', shell: true })



export default client;
