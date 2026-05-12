    import { ApplicationCommandOptionType, ButtonStyle, ContainerBuilder, MessageFlags, ButtonBuilder } from 'discord.js';
    const { namiweb, namidonate,  namithumb, namiresources } =require("../../../config.json");
    /**
     * @type {import('commandkit').CommandData}
     */
    export const command = {
    name: 'nami',
    description: "Displays info on NAMI",
    options: [
        {
        name: "private",
        description: "Can others see this message?",
        type: ApplicationCommandOptionType.Boolean,
        required: true
        }
    ]
    };

    /**
     * @param {import('commandkit').ChatInputCommandContext} ctx
     */
    export const chatInput = async ({interaction}) => {
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
   
    }

