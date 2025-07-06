const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { discinv } =require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("support-server")
    .setDescription("Sends support server invite")
  .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
          ),

    run: async ({interaction}) => {
      const hide = interaction.options.getBoolean("private")
      const button = new ButtonBuilder()
      .setLabel("Click to join")
      .setStyle(ButtonStyle.Link)
      
      .setURL(discinv)
      
      const row = new ActionRowBuilder()
      .addComponents(button)

      

      const embed = new EmbedBuilder()
      .setTitle("Click to join")
      .setDescription("Click the button bellow to join the bot server to report bugs and suggest resources as well as get notified about bot updates and downtime (This is NOT a mental health support server)")
      

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

      console.log("command has been called")
}
   
          



      
        
      

    }
}
