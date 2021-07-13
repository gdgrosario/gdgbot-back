// Packages
const Discord = require('discord.js');
const client = new Discord.Client();
	// SECRETS
require('dotenv').config();

// FS
let { readdirSync } = require('fs'); 

// Config
client.config = require('./config.js'); 

// Commands collection
client.commands = new Discord.Collection();  

// Commands
for(const file of readdirSync('./src/commands/')) { 
  if(file.endsWith(".js")) { 
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./commands/${file}`); 
  client.commands.set(fileName, fileContents);
  };
};
// Events
for(const file of readdirSync('./src/events/')) { 
  if(file.endsWith(".js")){
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./events/${file}`); 
  client.on(fileName, fileContents.bind(null, client)); 
  delete require.cache[require.resolve(`./events/${file}`)]; 
  };
};

// Login
client.login(client.config.token)
  .then(() => { 
    console.log(`Logged as ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error: ", err);
});