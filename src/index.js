const { Client } = require("discord.js");

const { CommandKit } = require("commandkit");

const path = require("path");

const { AutoPoster } = require("topgg-autoposter")

const { token, topggtoken } = require("../config.json");

const client = new Client({intents: []});

new CommandKit({
    client,
    eventsPath: path.join(__dirname, "events"),
    commandsPath: path.join(__dirname, "commands"),
    bulkRegister: true
})

const ap = AutoPoster(topggtoken, client)

ap.on("posted", () => {
    console.log('stats posted')
})

client.login(token)