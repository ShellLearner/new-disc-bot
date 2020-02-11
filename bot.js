const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('../auth.json');
const fs = require("fs");
var prefix = "??"

client.on('ready', () => {
	console.log(`AYOOO ok logged in as ${client.user.tag}`)
});

client.on('message', message => {

	if (message.author.bot){
		return;

	} else if (message.content.startsWith(prefix)) {
		console.log("A command");
		var command = message.content.replace(prefix, "")

		if (command.startsWith("ping")) {
			message.channel.send("Pong!");
			console.log("Ping recieved");
		} else if (command.startsWith("comment")) {
			var comment = command.replace("comment ", "")
				
			fs.writeFile(comments.txt, comment, err => {
				if (err) {throw err}
			});
			
		}
	}
});


client.login(auth.token);
