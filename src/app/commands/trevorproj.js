    import { ApplicationCommandOptionType, ButtonStyle, ContainerBuilder, MessageFlags, ButtonBuilder } from 'discord.js';
    const { trevorprojweb, trevorprojnum, trevorprojthumb, trevorprojdonate, trevorprojresources } =require("../../../config.json");
    /**
     * @type {import('commandkit').CommandData}
     */
    export const command = {
    name: 'trevor-project',
    description: "Displays resources for The Trevor Project",
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
            .setContent("# **__The Trevor Project__**"),
            textDisplay => textDisplay
            .setContent("### The Trevor Project is a non-profit orginisation focused on supporting members of LGBTQIA+ youth. Their main goal is to prevent suicide amongst young members of the queer community. They also provide resources for LGBTQIA+ youth and their guardians")
        )

        .setThumbnailAccessory(
            thumbnail => thumbnail
            .setDescription("The Trevor Project")
            .setURL(trevorprojthumb)
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
            .setContent("### Click here to donate to The Trevor Project")
            )

            .setButtonAccessory(
            button => button
            .setLabel("Donate")
            .setStyle(ButtonStyle.Link)
            .setURL(trevorprojdonate)
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
            .setContent("Click here to visit The Trevor Project website")
            )

            .setButtonAccessory(
            button => button
            .setLabel("The Trevor Project")
            .setStyle(ButtonStyle.Link)
            .setURL(trevorprojweb)
            )

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
            .setContent("Click here to view LGBTQIA+ resources")
            )

            .setButtonAccessory(
            button => button
            .setLabel("Resources")
            .setStyle(ButtonStyle.Link)
            .setURL(trevorprojresources)
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

