const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Expulsa del servidor al usuario mencionado')
		.addUserOption(option => option.setName('target').setDescription('Usuario para expulsar')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		return interaction.reply({ content: `You wanted to kick: ${user.username}`, ephemeral: true });
	},
};
