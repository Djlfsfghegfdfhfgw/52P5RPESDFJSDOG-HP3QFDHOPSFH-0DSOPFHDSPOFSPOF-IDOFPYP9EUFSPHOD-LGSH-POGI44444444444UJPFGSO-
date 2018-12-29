const ms = require('ms')
const Discord = require("discord.js");

module.exports.run = (bot, message, args, discord) => {
  let time = args.join(' ')
  let embed = new discord.RichEmbed()
  .setTitle("Fangs Timer")
  .setDescription("Okay, I'll count down, and let you know when the time is up!")
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter("Timer")
  message.channel.send({embed: embed})
  
  setTimeout(() => {
    embed.setDescription(`BEEP! The time's up! <@${message.author.id}>`)
    message.channel.send({embed: embed})
  }, ms(time))
}

module.exports.help = {
  name: "timer"
}
