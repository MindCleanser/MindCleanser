const { SlashCommandBuilder, EmbedBuilder, MessageFlags } = require("discord.js")

const { trevorprojnum, trevorprojweb } = require("../../config.json")


module.exports = {
    data: new SlashCommandBuilder()
        .setName("trevor-project")
        .setDescription("Displays resources for The Trevor Project")
        .addBooleanOption(option =>
            option.setName("private")
            .setDescription("Can others see this message?")
            .setRequired(true)
        ),
    

    run: ({ interaction, client, handeler }) => {
        const hide = interaction.options.getBoolean("private")

        const embed = new EmbedBuilder()
        .setTitle("What is The Trevor Project?")
        .setDescription(`The Trevor Project is a non-profit orginisation focused on supporting members of LGBTQIA+ youth. Their main goal is to prevent suicide amongst young members of the queer community`)
        .setThumbnail("https://imgs.search.brave.com/x3he7nTOEIjhOvV4cKxlE7C0M8Xsh_-P33Vy3IBoZgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xn/YnRxaWEtc2FuZGJv/eC9pbWFnZXMvZC9k/ZC9UaGVUcmV2b3JQ/cm9qZWN0LnBuZy9y/ZXZpc2lvbi9sYXRl/c3Qvc2NhbGUtdG8t/d2lkdGgtZG93bi8y/Njg_Y2I9MjAyMjAx/MTgyMTQxMzM")

        .addFields(
        {name: "Contact information", value:`The Trevor Project offers 24/7 volunteers on call to provide free mental health and suicide prevention. Just call ${trevorprojnum} or visit [their website](${trevorprojweb})`}
        )

        if(hide == true) {
            interaction.reply({
                embeds:[embed],
                flags: MessageFlags.Ephemeral
            })
        }else if(hide == false) {
            interaction.reply({embeds:[embed]})
        }
    }
}