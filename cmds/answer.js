const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "356091124563050498" && Owner.id !== "356091124563050498") return message.reply("Only the bot owner can use this command!")
   
    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Usage `+catanswer ID  your message`")
    

   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username)
   .setColor("#0afffa")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle("Response  from your contact!")
   .addField("Response:", sayMessage)
   .addField("Support Server", "[Lil Fangs server](https://discord.gg/bd6wUWH)")
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setDescription(`Message sent to <@${id}>`);

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});


        message.delete();

      }
      module.exports.help = {
        name: "answer",
        description: 'Owner Only',
        usage: 'answer <ID> <message>'
      }
