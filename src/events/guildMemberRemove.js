const {MessageEmbed} = require('discord.js');

module.exports = (client, member) => {
    const embed = new MessageEmbed()
      .setTitle('Un usuario se retiro')
      .setDescription(`Hasta luego ${member.user}`);
  
      client.channels.cache.get('870836344560168981').send(embed)
  }
    
    