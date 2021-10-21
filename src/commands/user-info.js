const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Devuelve la informacion del usuario')
		.addUserOption(option => option.setName('target').setDescription('Avatar del usuario')),
	async execute(interaction) {
		return interaction.reply(`Nombre de usuario: ${interaction.user.username}\nID: ${interaction.user.id} ${interaction.member._roles[1]}`);
	},
};
