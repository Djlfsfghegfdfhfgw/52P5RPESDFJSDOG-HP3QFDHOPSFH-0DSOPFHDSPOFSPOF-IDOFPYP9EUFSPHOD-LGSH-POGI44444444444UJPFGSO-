const Discord = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return;
        const info = fs.readFileSync("./rules.txt", "utf8");

message.channel.send({files: ["\sanuta.gif"]})

    message.channel.send({  
     embed : {
    title: "Welcome",
    footer: {
      text: "↓ please scroll down if you want to roleplay you should read everything from below ↓"
    },
    description: "This is a roleplay/community server,fan-made roleplay,if you have any questions ask a staff member or ask in <#409334966627991577>,if you don't want to roleplay and you've read the rules please type ?accept in the <#409339530831724548>",
    color: 4886754,
    fields: [
      {
        name: "Important rules",
        value:(info),
        inline: true
      },
      {
        "name": "If you want to become a staff member click the link :",
        value: "[Link](https://goo.gl/forms/2i17Br4RvLSxcNJO2)",
        inline: true
      }
    ]
}
})

message.delete();
}
module.exports.help = {
name: "uuf"
}
