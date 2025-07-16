  import { ApplicationCommandOptionType, ButtonStyle, ContainerBuilder, MessageFlags, ButtonBuilder } from 'discord.js';
const { transLLWeb, transLLnum, transLLresources, transLLdonate, transLLthumb, transLLtime } =require("../../../config.json");
    /**
     * @type {import('commandkit').CommandData}
     */
    export const command = {
    name: 'trans-lifeline',
    description: "Displays info on Trans Lifeline",
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
			.setContent('# **__Trans Lifeline__**'),
        textDisplay => textDisplay
    .setContent("### The Trans Lifeline is an organization that provides information solely for the trans community. These include a helpline and a bunch of trans-related resources")
  )

  .setThumbnailAccessory(
    thumbnail => thumbnail
    .setURL(transLLthumb)
  )

)



  

  .addSeparatorComponents(
    separator=>separator
  )

	.addSectionComponents(
		section => section
			.addTextDisplayComponents(
				textDisplay => textDisplay
					.setContent('# **__Donate__**'),
				textDisplay => textDisplay
					.setContent('### You can donate to Trans Lifeline by pressing this button'),
			)
    
			.setButtonAccessory(
        button => button
        .setLabel("Donate")
      .setStyle(ButtonStyle.Link)
      
      .setURL(transLLdonate)

      )
	)

  .addSeparatorComponents(
    separator => separator
  )

  .addSectionComponents(
    section => section

    .addTextDisplayComponents(
      textDisplay => textDisplay
      .setContent("# **__Website__**"),
      textDisplay => textDisplay
      .setContent(`### Click here to visit the Trans Lifeline website to reach a counsler or call ${transLLnum}`)
    )

    .setButtonAccessory(
      button => button
      .setLabel("Trans Lifeline")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLWeb)
    )

  ) 
  .addSeparatorComponents(
    separator => separator
  )

    .addSectionComponents(
      section => section
    
      .addTextDisplayComponents(
        textDisplay => textDisplay
        .setContent("# **__Resources__**"),
        textDisplay => textDisplay
        .setContent("### Click here to view resources from Trans Lifeline")
      )

       .setButtonAccessory(
      button => button
      .setLabel("Resources")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLresources)
    )

  )
    
    
    .addSeparatorComponents(
    separator => separator
    )

    .addSectionComponents(
      section => section

      .addTextDisplayComponents(
        textDisplay => textDisplay
        .setContent("# **__Operating hours__**"),
        textDisplay => textDisplay
        .setContent("## Click here to view Trans Lifeline operating hours")
      )

    .setButtonAccessory(
      button => button
      .setLabel("Operating Hours")
      .setStyle(ButtonStyle.Link)
      .setURL(transLLtime)
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

    }

