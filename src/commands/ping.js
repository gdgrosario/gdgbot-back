const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports={
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde con Pong!'),
	async execute(client ,interaction){
		return interaction.reply(`${client.ws.ping}ms\nPong! ${interaction.user}`);
	}
};
