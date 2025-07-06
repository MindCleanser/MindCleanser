const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { invite } =require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("bot-invite")
    .setDescription("Sends bot invite")
  .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
          ),

    run: async ({interaction}) => {
      const hide = interaction.options.getBoolean("private")
      const button = new ButtonBuilder()
      .setLabel("Invite me")
      .setStyle(ButtonStyle.Link)
      
      .setURL(invite)
      
      const row = new ActionRowBuilder()
      .addComponents(button)

     

     const embed = new EmbedBuilder()
      .setTitle("Bot invite")
      .setDescription("Click the button bellow to invite me to your server!")
      
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


