import { ApplicationCommandOptionType, ButtonStyle, ContainerBuilder, MessageFlags } from 'discord.js';
const { invite } = require("../../../config.json")

/**
 * @type {import('commandkit').CommandData}
 */
export const command = {
  name: 'invite',
  description: "Sends bot invite",
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
          .setContent("# __Bot invite__"),
          textDisplay => textDisplay
          .setContent("## Click here to invite the bot")
        )

        .setButtonAccessory(
          button => button
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(invite)
        )

      )
      
     
      
    if (hide == false) {
           const reply = interaction.reply({
        withResponse: true,
        components: [embed],
        flags:MessageFlags.IsComponentsV2
        
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
   

      
};
