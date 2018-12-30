const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    let communist = Math.round(Math.random() * 100);

    let communistembed = new Discord.RichEmbed()
        .setColor(random)
        .setTitle(`<:communistdoge:526621943340990464>  **I think ${message.author.username} is ${communist}% communist!** <:communistdoge:526621943340990464>`);
    message.delete(10);
    return message.channel.send(communistembed);
};

module.exports.help = {
    name: "communist"
};
