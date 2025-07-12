const { EmbedBuilder, ButtonBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags, ContainerBuilder } = require("discord.js");
const { vote, vote2 } =require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("vote")
    .setDescription("Vote for us on top.gg and discord bot list")
  .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
          ),

    run: async ({interaction}) => {
      const hide = interaction.options.getBoolean("private")
  

     

     const embed = new ContainerBuilder()
     .addTextDisplayComponents(
      textDisplay => textDisplay
      .setContent("# __Vote for the bot__"),
      textDisplay => textDisplay
      .setContent("## Click the buttons below to vote for the bot")
      )
            .addActionRowComponents(
                actionrow => actionrow
                .setComponents(
                    new ButtonBuilder()
                    .setLabel("Top.gg")
                    .setStyle(ButtonStyle.Link)
                    .setURL(vote),
                    new ButtonBuilder()
                    .setLabel("DiscordBotList")
                    .setStyle(ButtonStyle.Link)
                    .setURL(vote2)
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


