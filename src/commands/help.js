const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { github, invite, discinv, vote, vote2 } = require("../../config.json");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Sends info about the bot")
    .addBooleanOption(option => 
        option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
        ),
    

    run: async ({interaction, client, handler}) => {

        const hide = interaction.options.getBoolean("private")
        const button = new ButtonBuilder()
        .setLabel("Github")
        .setStyle(ButtonStyle.Link)
        .setURL(github)

        const button2 = new ButtonBuilder()
        .setLabel("Bot invite")
        .setStyle(ButtonStyle.Link)
        .setURL(invite)

        const button3 = new ButtonBuilder()
        .setLabel("Support server")
        .setStyle(ButtonStyle.Link)
        .setURL(discinv)

        const button4 = new ButtonBuilder()
        .setLabel("Vote 1")
        .setStyle(ButtonStyle.Link)
        .setURL(vote)

        const button5 = new ButtonBuilder()
        .setLabel("Vote 2")
        .setStyle(ButtonStyle.Link)
        .setURL(vote2)

        const row = new ActionRowBuilder()
        .addComponents(button, button2, button3, button4, button5)

        const embed = new EmbedBuilder()
        .setTitle("Info")
        .setDescription("MindCleanser is a Discord bot that includes many resources pertaining to mental health. This bot has a private feature that also lets users send any resource specifically to themselves in a mnessage that only they can see because I know asking for mental help can be needlessly embarresing. This bot was coded in Discord.js by hand with absolutly no ai in any way") 
 
    if (hide == false) {
           const reply = interaction.reply({
        withResponse: true,
        embeds: [embed],
        components: [row],
        
      }) 
       const message = (await reply).resource.message 
      } else {
           const reply = interaction.reply({

        withResponse: true,
        embeds: [embed],
        components: [row],
        flags:  MessageFlags.Ephemeral
      })
 const message = (await reply).resource.message 
      { message }    
}
   console.log("command has been called")
    
}
}

