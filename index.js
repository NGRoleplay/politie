const botConfig = require("./botConfig.json");
const Discord = require('discord.js');
const fs = require("fs");

const bot = new Discord.Client();

bot.on('ready', async () => {
    console.log('Ready.');

})

bot.login(process.env.token);