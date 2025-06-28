const { EmbedBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { vote, vote2 } =require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("vote")
    .setDescription("Vote for us on top.gg")
  .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
          ),

    run: async ({interaction}) => {
      const hide = interaction.options.getBoolean("private")
      const button = new ButtonKit()
      .setLabel("Vote 1")
      .setStyle(ButtonStyle.Link)
      
      .setURL(vote)

      const button2 = new ButtonKit()
      .setLabel("Vote 2")
      .setStyle(ButtonStyle.Link)
      .setURL(vote2)
      
      const row = new ActionRowBuilder()
      .addComponents(button, button2)

     

     const embed = new EmbedBuilder()
      .setTitle("Vote")
      .setDescription("Click the button bellow to vote for us on top.gg")
      
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


