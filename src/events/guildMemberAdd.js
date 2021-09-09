const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setTitle("Tenemos un nuevo usuario")
    .setDescription(`Bienvendio al servidor ${member.user}`);

  client.channels.cache.get(process.env.CHANNEL_ID).send(embed);
};
