module.exports = (client, message) => { 
  if(!message.content.startsWith(client.config.prefix)) return; 
  if(message.author.bot) return;

  // Args and commands
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()

  // Collections
  let cmd = client.comandos.get(command);
  if(!cmd) return;
  
  // Executing the command
  cmd(client, message, args);
}