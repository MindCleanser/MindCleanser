import { Logger } from 'commandkit/logger';
import { ActivityType } from 'discord.js';
import { createDjsClient } from 'discordbotlist'
process.loadEnvFile('./.env');
/**
 * @param {import('discord.js').Client<true>} client
 */
export default function log(client) {
  Logger.info(`Logged in as ${client.user.tag}!`);

  client.user.setActivity({
    name: (`in ${client.guilds.cache.size} servers`),
    type: ActivityType.Streaming,
    url:("https://www.twitch.tv/mindcleanser")
  })

  const dbl = new createDjsClient(process.env.DBLTOKEN, client)

  dbl.startPosting()

  dbl.postBotCommands([
    {
        name: "help",
        description: "View a list of the bot's commands.",
    },
]);

}
