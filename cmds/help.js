const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    let emoji = message.guild.emojis.find(`name`,"ok_kitty")
    message.react(emoji);

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    
    let descriptionEmbed = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setTitle("**Description**")
    .setDescription("Hi there,I'm designed to take care of the cats and look after sickness as a model primarily used to take care of elders, especially kits I'm designed to act kind, patient and obedient.")

    message.channel.send(descriptionEmbed);

    let funEmbed = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setTitle("**Fun commands (12)**")
    .setDescription(funcommands)

    message.channel.send(funEmbed);

    let infoEmbed = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setTitle("**Info commands (7)**")
    .setDescription(infoList)

    message.channel.send(infoEmbed);

    let modembed = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setTitle("**Admin commands (2)**")
    .setDescription(adminCommands)
    
    message.channel.send(modembed);

    let supEmbed = new Discord.RichEmbed()
    .setDescription(" ")
    .setColor("#0afffa")
    .setTitle("Support")
    .setDescription("If you need help with something feel free to join the [Support Server](https://discord.gg/xdVdWd2)")
    .setFooter("<> means required, [] means optional",message.author.displayAvatarURL)
    .setTimestamp()
    .addField("Contact", "To contact the owner use `+contact`")
    .addField("Report", "To report some bugs use `+report`")
    .addField("my owner will add more commands,sir","so please be pacient I have autism")
    message.channel.send(supEmbed)
}

 module.exports.help = {
     name: "help" 
 }
