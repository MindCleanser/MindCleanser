import { ApplicationCommandOptionType, ButtonStyle, ContainerBuilder, MessageFlags } from 'discord.js';
const { discinv } =require("../../../config.json")

/**
 * @type {import('commandkit').CommandData}
 */
export const command = {
  name: 'support-server',
  description: "Sends support server invite",
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
          .setContent("# __Support server__"),
          textDisplay => textDisplay
          .setContent("## Click here to join the support server (NOT a mental health support server)")
        )

        .setButtonAccessory(
          button => button
          .setLabel("Support Server")
          .setStyle(ButtonStyle.Link)
          .setURL(discinv)
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
      
};
}