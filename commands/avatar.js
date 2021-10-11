const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Devuelve tu avatar o el de otro usuario')
		.addUserOption(option => option.setName('target').setDescription('Avatar del usuario')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`${user.username} avatar: ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Tu avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};
