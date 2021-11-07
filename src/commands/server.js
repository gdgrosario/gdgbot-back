const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../utils/embed');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Devuelve la informacion del servidor'),
	async execute(interaction) {
		return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
};
