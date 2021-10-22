const fs = require('fs');
const { Client, Collection, Intents, DiscordAPIError, MessageEmbed } = require('discord.js');
const { token, bienvenida, despedida } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log(`Ready with ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);

	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


/*  client.on('guildMemberAdd', (member)=>{
	const embed = new Discord.MessageEmbed()
	.setTitle(`Bienvenido ${member.user.username}`)
	.setDescription(`Bienvenido ${member.user.username}`);
	console.log('nuevo usuario')
	client.
}); */ 

client
.login(token)
  .then(() => {
    console.log(`Bot initiated. Logged as ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

