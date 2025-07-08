const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { namiweb, namidonate, namiedu, namithumb } =require("../../config.json");
const { ButtonKit } = require("commandkit");
    module.exports = {
    data: new SlashCommandBuilder()
    .setName("nami")
    .setDescription("Displays info on NAMI")
    .addBooleanOption(option =>
        option.setName("private")
        .setDescription("Can others see this message?")
        .setRequired(true)
    ),

    run: async ({interaction, client, handler}) => {
        const hide = interaction.options.getBoolean("private")
      const button = new ButtonBuilder()
      .setLabel("NAMI")
      .setStyle(ButtonStyle.Link)
      
      .setURL(namiweb)

      const button2 = new ButtonBuilder()
      .setLabel("NAMI educational resources")
      .setStyle(ButtonStyle.Link)
      .setURL(namiedu)

      const button3 = new ButtonBuilder()
      .setLabel("Donate")
      .setStyle(ButtonStyle.Link)
      .setURL(namidonate)
      
      const row = new ActionRowBuilder()
      .addComponents(button, button2, button3)

     

     const embed = new EmbedBuilder()
      .setTitle("NAMI")
      .setDescription("NAMI is a large collection of mental health resources on a variety of different topics including mens mental health resources")
      .setThumbnail(namithumb)
      
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
