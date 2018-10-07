const Discord = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

  message.channel.send({files: ["\crap.gif"]})  
  message.delete();
}
module.exports.help = {
name: "uwu"
}
