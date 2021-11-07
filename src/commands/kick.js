const { SlashCommandBuilder } = require('@discordjs/builders');
const embed = require('../utils/embed');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Expulsa del servidor al usuario mencionado')
		.addUserOption((option) => option.setName('user').setDescription('Usuario para expulsar').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Razon de expulsion del usuario').setRequired(true)),
	async execute(interaction) {
		if(!interaction.member.permissions.has("KICK_MEMBERS")) return interaction.reply({content:'No tienes permiso de ejecutar esta accion', ephemereal:true})
		const user = interaction.options.getUser('user')
		const member = interaction.guild.members.cache.get(user.id)|| await interaction.guild.members.fetch(user.id).catch(err=>{console.log(err)})
		
		if(!member) return interaction.reply({content: `No se pudieron obtener los detalles del usuario ${member}`, ephemereal:true})
		const razon = interaction.options.getString('reason')


	 	if(!member.kickable) return interaction.reply({content: `No es posible expulsar a ${member}`, ephemereal: true})			
			
		if(interaction.member.roles.highest.position <= member.roles.highest.position) return interaction.reply('El usuario seleccionado tiene mayor o igual rango que tu')
		 
        const embed = new MessageEmbed()
        .setDescription(`**${member.user.tag}** fue expulsado del servidor por \`${razon}\``)
        .setColor("GREEN")
        .setFooter("Expulsar usuario")	
        .setTimestamp()

        await member.user.send(`Fuiste expulsado de **\`${interaction.guild.name}\`** por \`${razon}\``).catch(err => {console.error})
		member.kick({ razon })

        return interaction.reply({ embeds: [ embed ]})
	},
};
