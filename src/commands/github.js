const { EmbedBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { invite } =require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("Sends Github repo")
  .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
          ),

    run: async ({interaction}) => {
      const hide = interaction.options.getBoolean("private")
      const button = new ButtonKit()
      .setLabel("Github")
      .setStyle(ButtonStyle.Link)
      
      .setURL("https://github.com/MindCleanser/MindCleanser")
      
      const row = new ActionRowBuilder()
      .addComponents(button)

      const embed = new EmbedBuilder()
      .setTitle("Github")
      .setDescription("Click the button to view my source code")

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
   
          



      
        
      

    }
}