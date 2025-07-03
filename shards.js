const { ShardingManager,  } = require('discord.js');
const { join } = require ('node:path');

const { token } = require ('./config.json');


const manager = new ShardingManager('./src/index.js', { token: token });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();