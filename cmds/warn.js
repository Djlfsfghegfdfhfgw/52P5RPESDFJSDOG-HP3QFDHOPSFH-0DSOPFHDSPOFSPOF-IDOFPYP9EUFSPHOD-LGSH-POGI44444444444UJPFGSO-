const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');
  if (reason.length < 1) return message.reply('You must have a reason for the warning.');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#0afffa")
  .setDescription(`You have been warned on \`${message.guild.name}\``)
  .setFooter("If you're going to get 3-4 warnings you're going to get kicked nor banned",message.author.displayAvatarURL)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason)
  .addField("If you think that you've been warned for an unfair reason you can tell the owner by using the command +contact in the <#409339530831724548>");
  user.send(dmsEmbed);

  message.delete();

 let reportEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#0afffa")
  .setDescription(`Warning`)
  .addField("Warned by", message.author.tag)
  .addField("Reason", reason);


  let reportschannel = message.guild.channels.find(`name`, "logs");
  if(!reportschannel) return message.channel.send("Couldn't find the reports channel.");


  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);
}

exports.help = {
  name: 'warn'
};
