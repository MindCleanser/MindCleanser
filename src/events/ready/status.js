const { ActivityType } = require("discord.js")
const { createDjsClient, postBotStats } = require("discordbotlist")
const { url } = require("inspector")
const { dbltoken, botid }= require("../../../config.json")
module.exports = (c, client, handeler) => {
console.log(`Logged in as ${c.user.tag}`)
const dbl = createDjsClient(dbltoken, c)
c.user.setActivity(   {
    name:(`Helping ${c.guilds.cache.size} servers!`),
    type: ActivityType.Streaming,
    url:("https://www.twitch.tv/mindcleanser/about") 
},)
dbl.startPosting()

dbl.postBotCommands([

      {
        name: "bot-invite",
        description: "Sends bot invite"
    },
   
    {
        name: "contributors",
        description: "Shows all the people who worked on the bot"
    },
   
    {
        name: "github",
        description: "Sends Github Repo"
    },

    {
        name: "help",
        description: "Sends info about the bot"
    },

  

     {
        name: "ping",
        description: "Sends bot ping"
    },

    {
        name: "support-server",
        description: "Sends support server invite"
    },

    {
        name: "trans-lifeline",
        description: "Displays info on Trans Lifeline"
    },

    {
        name: "trevor-project",
        description: "Displays resources for The Trevor Project"
    },

    {
        name: "vote",
        description: "Vote for us on top.gg and discord bot list"
    }
])

}