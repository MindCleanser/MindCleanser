import { ShardingManager } from 'discord.js';
import { join } from 'node:path';
import { Logger } from 'commandkit';
process.loadEnvFile('./.env');

const manager = new ShardingManager(join(import.meta.dirname, 'index.js'), {
  token: process.env.DISCORD_TOKEN,
  totalShards: 'auto',
  mode: 'worker',
});

manager.on('shardCreate', (shard) => Logger.info(`Launched shard ${shard.id}`));

await manager.spawn();
