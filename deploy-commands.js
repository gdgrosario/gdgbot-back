const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./config.json');
const guildId = require('./config.json').guildId;

const commands = [];
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./src/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);


for (i=0;i<guildId.length;i++){
rest.put(Routes.applicationGuildCommands(clientId, guildId[i]), { body: commands })
	.then(() => console.log(`Slash commands cargados en ${guildId}`))
	.catch(console.error);
}