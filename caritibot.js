const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDczNzA4MTg0NzcxNDkzODg5.DkF5cg.Xny4BmQl1rTXOg-lmWzh10BXWOM';

client.login(token);

client.on('message', message => {

    if(message.content.toLocaleLowerCase() === 'hello')
        message.channel.send(message.channel.name.name());

        

});

