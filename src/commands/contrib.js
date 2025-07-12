const { SlashCommandBuilder, MessageFlags, ContainerBuilder } = require("discord.js");
const { contrib } = require("../../contrib.json");
const { EmbedBuilder } = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("contributors")
    .setDescription("Shows all the people who worked on the bot")
    .addBooleanOption(option =>
        option.setName("private")
        .setDescription("Can others see this message?")
        .setRequired(true)
    ),

    run: async ({interaction, client, handler}) => {

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

        console.log("command has been called")

    }
}