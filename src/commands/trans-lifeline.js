const { EmbedBuilder, ButtonBuilder, ContainerBuilder } = require("@discordjs/builders");
const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ButtonStyle, MessageFlags, TextDisplayBuilder, TextDisplayComponent, ActionRow } = require("discord.js");
const { transLLWeb, transLLnum, transLLresources, transLLdonate, transLLthumb } =require("../../config.json");
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
    
    

     const embed = new ContainerBuilder()
	.setAccentColor(0x0099FF)
	.addTextDisplayComponents(
		textDisplay => textDisplay
			.setContent('**__Trans Lifeline__**'),
	)

  .addTextDisplayComponents(
    textDisplay => textDisplay
    .setContent("The Trans Lifeline is an organization that provides information solely for the trans community. These include a helpline and a bunch of trans-related resources")
  )

  .addSeparatorComponents(
    seporator=>seporator
  )

	.addSectionComponents(
		section => section
			.addTextDisplayComponents(
				textDisplay => textDisplay
					.setContent('**__Donate__**'),
				textDisplay => textDisplay
					.setContent('You can donate to Trans Lifeline by pressing this button'),
			)
    
			.setButtonAccessory(
        button => button
        .setLabel("Donate")
      .setStyle(ButtonStyle.Link)
      
      .setURL(transLLdonate)

      )
	)

  .addSeparatorComponents(
    seporator => seporator
  )

  .addSectionComponents(
    section => section

    .addTextDisplayComponents(
      textDisplay => textDisplay
      .setContent("**__Website__**"),
      textDisplay => textDisplay
      .setContent("Click here to visit the Trans Lifeline website")
    )

    .setButtonAccessory(
      button => button
      .setLabel("Trans Lifeline")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLWeb)
    )

  ) 
  .addSeparatorComponents(
    seporator => seporator
  )

    .addSectionComponents(
      section => section
    
      .addTextDisplayComponents(
        textDisplay => textDisplay
        .setContent("**__Resources__**"),
        textDisplay => textDisplay
        .setContent("Click here to view resources from Trans Lifeline")
      )

       .setButtonAccessory(
      button => button
      .setLabel("Resources")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLresources)
    )
    

      

    )

  

  /*	.addActionRowComponents(
      actionRow => actionRow

      .setComponents(
    new ButtonBuilder()
      .setLabel("Trans Lifeline")
      .setStyle(ButtonStyle.Link)
      
      .setURL(transLLWeb),

    new ButtonBuilder()
      .setLabel("Trans Lifeline")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLresources),

      new ButtonBuilder()
      .setLabel("Donate")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLdonate)
      
      
      ),*/
 
    


     /*const embed = new TextDisplayBuilder()
      .setTitle("Trans Lifeline")
      .setDescription("The Trans Lifeline is an organization that provides information solely for the trans community. These include a helpline and a bunch of trans-related resources")
      .setThumbnail(transLLthumb)
      .addFields(
        {name:"Contact information", value:`You can connect to a counsler by calling ${transLLnum}`},
        {name: "Operating hours", value:"PST: 10AM-6PM MON-FRI\n EST: 1PM-9PM MON-FRI", inline:true}
      ) */
      
    if (hide == false) {
           const reply = interaction.reply({
        withResponse: true,
        components: [embed],
        flags: [MessageFlags.IsComponentsV2, MessageFlags.Ephemeral]
        
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
