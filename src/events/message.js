module.exports = (client, message) => {
  if (!message.content.startsWith(process.env.PREFIX)) return;
  if (message.author.bot) return;

  // Args and commands
  const args = message.content
    .slice(process.env.PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Collections
  const cmd = client.commands.get(command);
  if (!cmd) return;

  // Executing the command
  cmd(client, message, args);
};
