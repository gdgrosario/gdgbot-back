const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Devuelve la informacion del usuario'),
	async execute(interaction) {
		return interaction.reply(`Nombre de usuario: ${interaction.user.username}\nID: ${interaction.user.id}`);
	},
};
