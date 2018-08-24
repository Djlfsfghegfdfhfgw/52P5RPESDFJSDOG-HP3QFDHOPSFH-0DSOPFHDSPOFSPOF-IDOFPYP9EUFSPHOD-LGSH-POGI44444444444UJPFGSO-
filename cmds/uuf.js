const Discord = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return;
        const rule = fs.readFileSync("./rule.txt", "utf8");

    message.channel.send({  
     embed : {
    title: "Welcome",
    description:(rule),
    color: 4886754
}
})
message.delete();
}
module.exports.help = {
name: "uuf"
}
