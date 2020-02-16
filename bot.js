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
		var command = message.content.replace(prefix, "")

		if (command.startsWith("ping")) {
			message.channel.send("Pong!");
			console.log("Ping recieved");
		} else if (command.startsWith("comment ")) {
			var comment = command.replace("comment ", "")
				
			fs.appendFile("comments.txt","\n" + comment, err => {
				if (err) {throw err}
			});
			console.log("Comment logged");
			message.channel.send("Comment logged. Thank you for your feedback!");

		} else if (command.startsWith("help")) { 
			console.log("help page called");
			message.channel.send(`This is still a work in progress.
Please be patient while I work out the bugs!\n
ping: tests if the bot is online
comment: sends a comment to the devs
help: opens this help page
				`)

		} else if (command.startsWith("say ")) {
			var botmsg = command.replace("say ", "");
			message.channel.send(botmsg);
		} else if (command.startsWith("store ")) {
			var usrmsg = command.replace("store ", "");
			fs.writeFile("usr-data/" + message.author.id, "\n" + usrmsg , err => {
				if (err) {throw err}
			});
		}
	} 
});


client.login(auth.token);
