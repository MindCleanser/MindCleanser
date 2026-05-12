import { ApplicationCommandOptionType, ButtonStyle, ContainerBuilder, MessageFlags, ButtonBuilder } from 'discord.js';
const { github, invite, discinv, vote, vote2 } = require("../../../config.json");
/**
 * @type {import('commandkit').CommandData}
 */
export const command = {
  name: 'help',
  description: "Sends info about the bot",
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
            .setContent("# __MindCleanser__"),
            textDisplay => textDisplay
            .setContent("## MindCleanser is a Discord bot that includes many resources pertaining to mental health. This bot has a private feature that also lets users send any resource specifically to themselves in a mnessage that only they can see because I know asking for mental help can be needlessly embarresing. This bot was coded in Discord.js by hand with absolutly no ai in any way")
        )

        .addSeparatorComponents(
            separator => separator
        )

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

        .addSeparatorComponents(
            separator => separator
        )

        .addSectionComponents(
            section => section
            .addTextDisplayComponents(
                textDisplay => textDisplay
                .setContent("# __Bot Invite__"),
                textDisplay => textDisplay
                .setContent("Click here to invite the bot to your server or add it as a user app")
            )

            .setButtonAccessory(
                button => button
                .setLabel("Bot Invite")
                .setStyle(ButtonStyle.Link)
                .setURL(invite)
            )
        )

        .addSeparatorComponents(
            separator => separator

        )

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
                .setLabel("Support server")
                .setStyle(ButtonStyle.Link)
                .setURL(discinv)
                
            ),
        )

        .addSeparatorComponents(
            separator => separator
    )

             .addTextDisplayComponents(
                textDisplay => textDisplay
                .setContent("# __Vote__"),
                textDisplay => textDisplay
                .setContent("## Click one of these buttons to vote for MindCleanser")
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
};
