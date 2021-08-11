const {MessageEmbed } = require('discord.js');

module.exports = (client, member) => {
  console.log()   
  const embed = new MessageEmbed()
      .setTitle('Tenemos un nuevo usuario')
      .setDescription(`Bienvendio al servidor ${member.user}`)
  
      client.channels.cache.get('870744706823381003').send(embed)
  }
    
    