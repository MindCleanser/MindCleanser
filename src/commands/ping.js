const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Sends bot ping")
    .addBooleanOption(option =>
        option.setName("private")
        .setDescription("Can others see this message?")
        .setRequired(true)
    ),

    run: async({interaction, client, handler}) => {
        const hide = interaction.options.getBoolean("private")

        const latency = Math.round(interaction.client.ws.ping);
        const embed = new EmbedBuilder()
            .setTitle('Latency')
            .setDescription(`${latency}ms`)
            .setColor(0x3498db); // Blue color

       if (hide == true) {
        await interaction.reply({
            embeds: [embed],
            flags: MessageFlags.Ephemeral
        })
       } else  {
        await interaction.reply({
            embeds: [embed]
        })
       }
    },
};
       
