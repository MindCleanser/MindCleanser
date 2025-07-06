const { EmbedBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { ButtonKit } = require("commandkit");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { trevorprojweb, trevorprojnum, trevorprojthumb, trevorprojdonate, trevorprojresources } =require("../../config.json");
const { ButtonBuilder } = require("discord.js");
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
      const button = new ButtonBuilder()
      .setLabel("The Trevor project")
      .setStyle(ButtonStyle.Link)
      
      .setURL(trevorprojweb)

      const button2 = new ButtonBuilder()
      .setLabel("Donate")
      .setStyle(ButtonStyle.Link)
      .setURL(trevorprojdonate)

      const button3 = new ButtonBuilder()
      .setLabel("Resources")
      .setStyle(ButtonStyle.Link)
      .setURL(trevorprojresources)
      
      const row = new ActionRowBuilder()
      .addComponents(button, button2, button3)

      const embed = new EmbedBuilder()
        .setTitle("What is The Trevor Project?")
        .setDescription(`The Trevor Project is a non-profit orginisation focused on supporting members of LGBTQIA+ youth. Their main goal is to prevent suicide amongst young members of the queer community. They also provide resources for LGBTQIA+ youth and their guardians`)
        .setThumbnail(trevorprojthumb)
        .addFields(
        {name: "Contact information", value:`The Trevor Project offers 24/7 volunteers on call to provide free mental health and suicide prevention. Just call ${trevorprojnum} or visit their website by clicking The Trevor Project button or donate by clicking Donate`}
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
console.log("command has been called")
    }

}


