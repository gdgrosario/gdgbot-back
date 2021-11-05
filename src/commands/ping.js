const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../utils/embed');

module.exports={
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde con Pong!'),
	async execute(client ,interaction){
		return interaction.reply(`${client.ws.ping}ms\nPong! ${interaction.user}`);
	}
};
