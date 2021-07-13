// SECRETS
require("dotenv").config();
// Packages
const Discord = require("discord.js");
const client = new Discord.Client();

// FS
const { readdirSync } = require("fs");

// Commands collection
client.commands = new Discord.Collection();

// Commands
for (const file of readdirSync("./src/commands/")) {
  if (file.endsWith(".js")) {
    const fileName = file.substring(0, file.length - 3);
    const fileContents = require(`./commands/${file}`);
    client.commands.set(fileName, fileContents);
  }
}
// Events
for (const file of readdirSync("./src/events/")) {
  if (file.endsWith(".js")) {
    const fileName = file.substring(0, file.length - 3);
    const fileContents = require(`./events/${file}`);
    client.on(fileName, fileContents.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  }
}

// Login
client
  .login(process.env.TOKEN)
  .then(() => {
    console.log(`Bot initiated. Logged as ${client.user.tag}`);
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
