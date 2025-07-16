import { ApplicationCommandOptionType, ContainerBuilder, MessageFlags } from 'discord.js';

/**
 * @type {import('commandkit').CommandData}
 */
export const command = {
  name: 'ping',
  description: "Sends bot ping",
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

        const latency = Math.round(interaction.client.ws.ping);
       
       const embed = new ContainerBuilder()

       .addTextDisplayComponents(
        textDisplay => textDisplay
        .setContent("# __Latency__"),
        textDisplay => textDisplay
        .setContent(`## ${latency}`)
       )
       
        /* const embed = new EmbedBuilder()
            .setTitle('Latency')
            .setDescription(`${latency}`)
            .setColor(0x3498db); // Blue color*/
            
        

       if (hide == false) {
        await interaction.reply({
            components: [embed],
            flags: MessageFlags.IsComponentsV2
        })
       } else  {
        await interaction.reply({
            components: [embed],
            flags:[MessageFlags.Ephemeral, MessageFlags.IsComponentsV2]
        })
       }

      
};
