const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags, ContainerBuilder } = require("discord.js");
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
    

      
      const embed = new ContainerBuilder()

      .addSectionComponents(
        section => section
        .addTextDisplayComponents(
          textDisplay => textDisplay
          .setContent("# __Support server__"),
          textDisplay => textDisplay
          .setContent("## Click here to join the support server (NOT a mental health support server)")
        )

        .setButtonAccessory(
          button => button
          .setLabel("Support Server")
          .setStyle(ButtonStyle.Link)
          .setURL(discinv)
        )

      )

      
    
      

    if (hide == false) {
           const reply = interaction.reply({
        withResponse: true,
        components: [embed],
        flags: MessageFlags.IsComponentsV2
        
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

      console.log("command has been called")
}
   
          



      
        
      

    }
}
