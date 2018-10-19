const Discord = require("discord.js")
const Client = new Discord.Client

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "356091124563050498") return;

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
    module.exports.help = {
        name: "eval"
      }
