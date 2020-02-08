const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('../auth.json');
const fs = require("fs");
var prefix = "!"

client.on('ready', () => {
	console.log(`AYOOO ok logged in as ${client.user.tag}`)
});

client.on("message", message => {
	if (message.content.startsWith(prefix)) {
		message.content.replace(prefix + " ", "");
		if (message.content.startsWith(ping)) {
			message.channel.send("Pong!");
		} else if (message.content.startsWith("comment ")){
			message.content.replace("comment ", "");
			console.log(message.content);
			message.channel.send("Comment logged. Thank you for your feedback!");
			fs.writeFile(comments.txt, message.content, err => {
				if (err) throw err
			});
		}
	}
});

client.login(auth.token);
