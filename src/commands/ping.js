const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, MessageFlags, ContainerBuilder } = require("discord.js");

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

       console.log("command has been called")
    },


};
       
