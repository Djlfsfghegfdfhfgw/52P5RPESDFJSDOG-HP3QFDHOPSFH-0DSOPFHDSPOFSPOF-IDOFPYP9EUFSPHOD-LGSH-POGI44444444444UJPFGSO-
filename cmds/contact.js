const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#0afffa")
    .addField("Contact Command", "Usage: +contact <reason>")

    message.channel.send(helpembxd);
    return;
  } 

    let Invite = await message.guild.channels.first().createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.reply("Please give us reason for contacting").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("#0afffa")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Contact message from [${message.guild.name}](${Invite.url})`)
   .setTitle("Message from contact command!")
   .addField("User", Sender, true)
   .addField("User ID: ", Sender.id, true)
   .addField("Message: ", sayMessage)
   .setTimestamp()

    bot.users.get("356091124563050498").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setTitle("Message Sent!")
    .setDescription("Your contact message has been sent!")
    .addField("Reqested by ", Sender)
    .addField("Message: ", sayMessage)
    .setFooter("Thanks you for contacting with the Lil Fangs :3 support!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();

      }
      module.exports.help = {
        name: "contact"
      }
