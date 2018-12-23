const Discord = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
  const rules = fs.readFileSync("./rules.txt", "utf8");
  if(!message.member.hasPermission("ADMINISTRATOR")) return; 

    message.channel.send({  
     embed : {
    title: "»»————- no rules owo ————-««",
    description:(rules),
    color: 4886754
}
})

message.delete();
}
module.exports.help = {
name: "oof"
}
