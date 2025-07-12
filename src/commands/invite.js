const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags, ContainerBuilder } = require("discord.js");
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
    

      const embed = new ContainerBuilder()
      .addSectionComponents(
        section => section
        .addTextDisplayComponents(
          textDisplay => textDisplay
          .setContent("# __Bot invite__"),
          textDisplay => textDisplay
          .setContent("## Click here to invite the bot")
        )

        .setButtonAccessory(
          button => button
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(invite)
        )

      )
      
     
      
    if (hide == false) {
           const reply = interaction.reply({
        withResponse: true,
        components: [embed],
        flags:MessageFlags.IsComponentsV2
        
      }) 
       const message = (await reply).resource.message 
      } else {
           const reply = interaction.reply({

        withResponse: true,
        components: [embed],
        flags:  [MessageFlags.Ephemeral, MessageFlags.IsComponentsV2]
      })
 const message = (await reply).resource.message 
      { message }    
}
   
          
console.log("command has been called")


      
        
      

    }
}


