const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send({  
        embed: {
          title: "LIL FANGS IS ON TOP!",
          description: "LIL FANGS Info",
          color: 4886754,
          fields: [
            {
              name: "Who is Lil Fangs??",
              value: "Lil Fangs is awesome",
              inline:false
            },
            {
              name: "Steam",
              value: "[Steam Profile](https://steamcommunity.com/id/Littlefangs/)",
              inline: true
            },
            {
              name: "Steam Group",
              value: "[Lil Fangs friends](https://steamcommunity.com/groups/Fluffz)",
              inline: true
            },
            {
              name: "Discord",
              value: "[Lil's rp server](https://discord.gg/nfMQfTA)",
              inline: true
            }
          ]
        }
    })

    message.delete();
}
  module.exports.help = {
    name: "fangs"
  }
