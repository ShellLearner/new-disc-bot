const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require('../auth.json');
var prefix = "!"


client.on('ready', () => {
	console.log(`AYOOO ok logged in as ${client.user.tag}`)
});



client.login(auth.token);
