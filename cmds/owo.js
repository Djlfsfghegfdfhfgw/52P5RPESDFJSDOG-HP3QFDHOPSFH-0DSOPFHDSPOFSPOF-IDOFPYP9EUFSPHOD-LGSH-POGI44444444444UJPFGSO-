const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return;  
    const owo = fs.readFileSync("./owo.txt", "utf8");
    message.channel.send({  
      embed : {         
        title: " ",
        color: 4886754,
        description:(owo)
}
})

message.delete();
}  
  module.exports.help = {
    name: "owo"
  }
