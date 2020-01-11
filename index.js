const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NjY1NDY2MjgxODU5NzQzNzU3.XhmB9Q.OkiY5ouPcAx3sSp0A6fkyG1_2pE");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes  -*help");
    }

    if (message.content === "*Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});
