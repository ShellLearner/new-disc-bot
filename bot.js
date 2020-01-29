const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('./auth.json');
var prefix = "!"


client.on('ready', () => {
	console.log("AYOOO ok we're logged in as ${client.user.tag}")
});

client.on('message', message => {
	if (message.author.bot)
		return;
	else if (message.content.startsWith(prefix))
		if (message.content.startsWith(prefix + 'ping')) { 
			message.channel.send("Pong! Hello!");
		} else if (message.content.startsWith(prefix + "prefix")
			message.content.replace(prefix, "");
			message.content.replace(" ", "");
			prefix = message.content
			message.channel.send("Your prefix is " + prefix)
});

client.login(auth.token);
