const { SlashCommandBuilder, MessageFlags } = require("discord.js");
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

        

        const embed = new EmbedBuilder()
        .setTitle("Contributors")
        .setDescription(contrib)
       

        if(hide == true) {
            interaction.reply({
                embeds: [embed],
                flags: MessageFlags.Ephemeral
            }) 
        } else {
            interaction.reply({
                embeds: [embed],
            })
        }

    }
}