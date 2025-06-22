const { ActivityType } = require("discord.js")
const { url } = require("inspector")

module.exports = (c, client, handeler) => {
console.log(`Logged in as ${c.user.tag}`)

c.user.setActivity(   {
    name:(`Helping ${c.guilds.cache.size} servers!`),
    type: ActivityType.Streaming,
    url:("https://www.twitch.tv/mindcleanser/about") 
},)
}