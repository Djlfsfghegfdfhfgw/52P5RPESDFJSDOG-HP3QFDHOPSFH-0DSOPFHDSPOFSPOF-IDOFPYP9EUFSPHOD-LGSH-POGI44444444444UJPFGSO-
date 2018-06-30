const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return;  
    const xxx = fs.readFileSync("./xxx.txt", "utf8");
    const extra = fs.readFileSync("./extra.txt", "utf8");
    message.channel.send({  
      embed : {         
        title: " ",
        footer: {
          icon_url:"https://cdn.discordapp.com/attachments/446712012320276492/452048433612849152/image3.png",
          text: "© Warrior cats the unnamed server"
        },
        description:(xxx),
        color: 4886754,
        fields: [
            {
            name: "If you want to make a character that is not a cat:",
            value: "[Click here](https://docs.google.com/document/d/1U4qkUfdnXNzw69wE5ZwwpUBiJwLGa9rHO4vd9I5Z1UI/)",
            inline: true
            }, 
            {
          name:"If you want to read the books click here:",
          value:"[Drive](https://drive.google.com/drive/folders/0BwSIgRsWbcBGU2NNaW1icXZpNzQ)",
          inline:true

            },
        {
         name:"Extra",
         value:(extra),
         inline:false
                }
]
}
})

message.delete();
}  
  module.exports.help = {
    name: "rape"
  }
