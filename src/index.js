const { Client } = require("discord.js");

const { CommandKit } = require("commandkit");

const path = require("path");

const { token } = require("../config.json");

const client = new Client({intents: []});

new CommandKit({
    client,
    eventsPath: path.join(__dirname, "events"),
    commandsPath: path.join(__dirname, "commands"),
    bulkRegister: true
})
client.login(token)