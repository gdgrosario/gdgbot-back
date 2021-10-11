const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clean')
		.setDescription('Elimina hasta 100 mensajes del canal en el que se envie')
		.addIntegerOption(option => option.setName('cantidad').setDescription('Cantidad de mensajes')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('cantidad');

		if (amount <= 1 || amount > 100) {
			return interaction.reply({ content: 'La cantidad debe de estar entre 1 y 99', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Hubo un error para eliminar los mensajes de este canal', ephemeral: true });
		});

		return interaction.reply({ content: `Mensajes eliminados \`${amount}\` Mensajes.`, ephemeral: true });
	},
};