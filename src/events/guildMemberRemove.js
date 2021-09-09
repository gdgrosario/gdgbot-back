const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setTitle("Un usuario se retiro")
    .setDescription(`Hasta luego ${member.user}`);

  client.channels.cache.get(process.env.CHANNEL_ID).send(embed);
};
