const { EmbedBuilder, ButtonBuilder, ContainerBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ButtonStyle, MessageFlags } = require("discord.js");
const { namiweb, namidonate, namiedu, namithumb, namiresources } =require("../../config.json");
const { ButtonKit } = require("commandkit");
    module.exports = {
    data: new SlashCommandBuilder()
    .setName("nami")
    .setDescription("Displays info on NAMI")
    .addBooleanOption(option =>
        option.setName("private")
        .setDescription("Can others see this message?")
        .setRequired(true)
    ),

    run: async ({interaction, client, handler}) => {
        const hide = interaction.options.getBoolean("private")
    

     const embed = new ContainerBuilder()
     .addSectionComponents(
      section => section
      .addTextDisplayComponents(
        textDisplay => textDisplay
        .setContent("# __NAMI__"),
        textDisplay => textDisplay
        .setContent("## NAMI is a large collection of mental health resources on a variety of different topics including mens mental health resources")
      )
      .setThumbnailAccessory(
        thumbnail => thumbnail
        .setURL(namithumb)
      )
     )

     .addSeparatorComponents(
      separator => separator
     )
     .addSectionComponents(
      section => section
     .addTextDisplayComponents(
      textDisplay => textDisplay
      .setContent("# __Donate__"),
      textDisplay => textDisplay
      .setContent("## Click here to donate")
     )

     .setButtonAccessory(
      button => button
      .setLabel("Donate")
      .setStyle(ButtonStyle.Link)
      .setURL(namidonate)
     )

     )

     .addSeparatorComponents(
      separator => separator
     )

     .addSeparatorComponents(
      separator => separator
     )

     .addSectionComponents(
      section => section
      .addTextDisplayComponents(
        textDisplay => textDisplay
        .setContent("# __Resources__"),
        textDisplay => textDisplay
        .setContent("## Click here to view mental health resources")
      )

      .setButtonAccessory(
        button => button
        .setLabel("Resources")
        .setStyle(ButtonStyle.Link)
        .setURL(namiresources)
      )

     )

     .addSeparatorComponents(
      separator => separator
     )

     .addSectionComponents(
      section => section

      .addTextDisplayComponents(
        textDisplay => textDisplay
        .setContent("# __Website__"),
        textDisplay => textDisplay
        .setContent("## Click here to view NAMI's website")
      )

      .setButtonAccessory(
        button => button
        .setLabel("NAMI")
        .setStyle(ButtonStyle.Link)
        .setURL(namiweb)
      )

     )


   /*  const embed = new EmbedBuilder()
      .setTitle("NAMI")
      .setDescription("NAMI is a large collection of mental health resources on a variety of different topics including mens mental health resources")
      .setThumbnail(namithumb)*/
      
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
