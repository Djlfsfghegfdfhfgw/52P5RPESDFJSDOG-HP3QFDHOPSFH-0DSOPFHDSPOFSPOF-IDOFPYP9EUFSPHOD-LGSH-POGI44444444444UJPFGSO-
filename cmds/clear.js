const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#0afffa")
    .addField("clear Command", "Usage: +catclear <amount>")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to do that!");
  if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: +catclear <amount>`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__I deleted ${args[0]} messages.__**`).then(msg => msg.delete(2000));
});


}

module.exports.help = {
  name: "clear"
}
