 /* import { ApplicationCommandOptionType, ButtonStyle, ContainerBuilder, MessageFlags, ButtonBuilder } from 'discord.js';
    const { github } =require("../../../config.json");
    /**
     * @type {import('commandkit').CommandData}
     */
    export const command = {
    name: 'github',
    description: "Sends Github repo",
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
          .setContent("# __Github__"),
          textDisplay => textDisplay
          .setContent("## Click here to view the Github repo")
        )

        .setButtonAccessory(
          button => button
          .setLabel("Github")
          .setStyle(ButtonStyle.Link)
          .setURL(github)
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

