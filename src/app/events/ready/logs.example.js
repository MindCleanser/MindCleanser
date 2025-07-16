import { stopEvents } from 'commandkit';
import { Logger } from 'commandkit/logger';
import { ActivityType } from 'discord.js';

/**
 * @param {import('discord.js').Client<true>} client
 */
export default function log(client) {
    stopEvents()
  Logger.info(`Logged in as ${client.user.tag}!`);

  client.user.setActivity({
    name: (`in ${client.guilds.cache.size} servers`),
    type: ActivityType.Streaming,
    url:("https://www.twitch.tv/mindcleanser")
  })



}
 
