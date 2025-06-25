const { EmbedBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { transLLWeb, transLLnum, transLLresources, transLLdonate } =require("../../config.json");
const { ButtonKit } = require("commandkit");
    module.exports = {
    data: new SlashCommandBuilder()
    .setName("trans-lifeline")
    .setDescription("Displays info on Trans Lifeline")
    .addBooleanOption(option =>
        option.setName("private")
        .setDescription("Can others see this message?")
        .setRequired(true)
    ),

    run: async ({interaction, client, handler}) => {
        const hide = interaction.options.getBoolean("private")
      const button = new ButtonKit()
      .setLabel("Trans Lifeline")
      .setStyle(ButtonStyle.Link)
      
      .setURL(transLLWeb)

      const button2 = new ButtonKit()
      .setLabel("Trans Lifeline")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLresources)

      const button3 = new ButtonKit()
      .setLabel("Donate")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLdonate)
      
      const row = new ActionRowBuilder()
      .addComponents(button, button2, button3)

     

     const embed = new EmbedBuilder()
      .setTitle("Trans Lifeline")
      .setDescription("The Trans Lifeline is an organization that provides information solely for the trans community. These include a helpline and a bunch of trans-related resources")
      .addFields(
        {name:"Contact information", value:`You can connect to a counsler by calling ${transLLnum}`},
        {name: "Operating hours", value:"PST: 10AM-6PM MON-FRI\n EST: 1PM-9PM MON-FRI", inline:true}
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
