import { ApplicationCommandOptionType, ContainerBuilder, MessageFlags } from 'discord.js';
const { contrib } = require("../../../contrib.json");
/**
 * @type {import('commandkit').CommandData}
 */
export const command = {
  name: 'contributors',
  description: "Shows all the people who worked on the bot",
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
        .addTextDisplayComponents(
            textDisplay => textDisplay
            .setContent("# __Contributors__"),
            textDisplay => textDisplay
            .setContent(`${contrib}`)

        )
       

        if(hide == false) {
            interaction.reply({
                components: [embed],
                flags: MessageFlags.IsComponentsV2
            }) 
        } else {
            interaction.reply({
                components: [embed],
                flags: [MessageFlags.Ephemeral, MessageFlags.IsComponentsV2]
            })
        }
      
};
