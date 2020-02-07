const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('../auth.json');
var prefix = "!"


client.on('ready', () => {
	console.log(`AYOOO ok logged in as ${client.user.tag}`)
});

client.on("message", message => {
	if (message.content.startsWith(prefix)) {
		message.content.replace(prefix + " ", "");
		if (message.content.startsWith(ping)) {
			message.channel.send("Pong!");
		}
	}
});

client.login(auth.token);
