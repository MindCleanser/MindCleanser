import { ApplicationCommandOptionType, ButtonBuilder, ButtonStyle, ContainerBuilder, MessageFlags } from 'discord.js';
const { vote, vote2 } =require("../../../config.json")

/**
 * @type {import('commandkit').CommandData}
 */
export const command = {
  name: 'vote',
  description: "Vote for us on top.gg and discord bot list",
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
      .setContent("# __Vote for the bot__"),
      textDisplay => textDisplay
      .setContent("## Click the buttons below to vote for the bot")
      )
            .addActionRowComponents(
                actionrow => actionrow
                .setComponents(
                    new ButtonBuilder()
                    .setLabel("Top.gg")
                    .setStyle(ButtonStyle.Link)
                    .setURL(vote),
                    new ButtonBuilder()
                    .setLabel("DiscordBotList")
                    .setStyle(ButtonStyle.Link)
                    .setURL(vote2)
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