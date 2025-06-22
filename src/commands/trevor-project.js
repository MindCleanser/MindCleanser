const { EmbedBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { trevorprojweb, trevorprojnum, trevorprojthumb } =require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("trevor-project")
    .setDescription("Displays resources for The Trevor Project")
  .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
          ),

    run: async ({interaction}) => {
      const hide = interaction.options.getBoolean("private")
      const button = new ButtonKit()
      .setLabel("The Trevor project")
      .setStyle(ButtonStyle.Link)
      
      .setURL(trevorprojweb)
      
      const row = new ActionRowBuilder()
      .addComponents(button)

      const embed = new EmbedBuilder()
        .setTitle("What is The Trevor Project?")
        .setDescription(`The Trevor Project is a non-profit orginisation focused on supporting members of LGBTQIA+ youth. Their main goal is to prevent suicide amongst young members of the queer community`)
        .setThumbnail(trevorprojthumb)
        .addFields(
        {name: "Contact information", value:`The Trevor Project offers 24/7 volunteers on call to provide free mental health and suicide prevention. Just call ${trevorprojnum} or visit their website by clicking the button`}
        )


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



