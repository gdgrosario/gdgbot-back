const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Expulsa del servidor al usuario mencionado')
		.addUserOption((option) => option.setName('user').setDescription('Usuario para banear').setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription('Razon de baneo del usuario').setRequired(true)),
	async execute(interaction) {
		if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({content:'No tienes permiso de ejecutar esta accion', ephemereal:true})
		const user = interaction.options.getUser('user')
		const member = interaction.guild.members.cache.get(user.id)|| await interaction.guild.members.fetch(user.id).catch(err=>{console.log(err)})
		
		if(!member) return interaction.reply({content: `No se pudieron obtener los detalles del usuario ${member}`, ephemereal:true})
		const razon = interaction.options.getString('reason')


	 	if(!member.bannable) return interaction.reply({content: `No es posible banear a ${member}`, ephemereal: true})			
			
		if(interaction.member.roles.highest.position <= member.roles.highest.position) return interaction.reply('El usuario seleccionado tiene mayor o igual rango que tu')
		 
        const embed = new MessageEmbed()
        .setDescription(`**${member.user.tag}** fue baneado del servidor por \`${razon}\``)
        .setColor("GREEN")
        .setFooter("Banear usuario")	
        .setTimestamp()

        await member.user.send(`Fuiste baneado de **\`${interaction.guild.name}\`** por \`${razon}\``).catch(err => {console.error})
		member.ban({ razon })

        return interaction.reply({ embeds: [ embed ]})
	},
};