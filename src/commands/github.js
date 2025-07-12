const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags, ContainerBuilder } = require("discord.js");
const { github } =require("../../config.json")
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
   
      
    
      
     

     

      const embed = new ContainerBuilder()
      .addSectionComponents(
        section => section
        .addTextDisplayComponents(
          textDisplay => textDisplay
          .setContent("# __Github__"),
          textDisplay => textDisplay
          .setContent("## Click here to view the Github repo")
        )

        .setButtonAccessory(
          button => button
          .setLabel("Github")
          .setStyle(ButtonStyle.Link)
          .setURL(github)
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
}
   
          

console.log("command has been called")

      
        
      

    }
}