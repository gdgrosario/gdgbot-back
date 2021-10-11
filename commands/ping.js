const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports={
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde con Pong!'),
	async execute(interaction){
		return interaction.reply(`Pong! ${interaction.user}`);

	}
};
