const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let cookie = message.mentions.members.first();

let gifs = ["https://cdn.discordapp.com/attachments/381412772241735680/449588609515782156/c62d95afb159537426bc13648ba7ffd6.gif","https://cdn.discordapp.com/attachments/381412772241735680/449588432780656651/tenor.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083507168149514/f92e5c3c417765b3e3de261a98a8bd3e.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083511295213578/giphy.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083512566087681/giphy_1.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083518878646282/tenor.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083523286728707/460ed502bb6072de0863a9a905018ce9c7bbdf26478513d319c7a2c76d0b1c15.gif","https://cdn.discordapp.com/attachments/421772706875441162/440076929551433728/kill-la-kill-eating-cookies.gif","https://cdn.discordapp.com/attachments/409339530831724548/439877945432211459/giphy.gif", "https://cdn.discordapp.com/attachments/409339530831724548/439877934212186123/giphy_1.gif", "https://cdn.discordapp.com/attachments/421772706875441162/439884407738990592/k_on__yui_eating_a_cookie___gif_animation_by_kyoflameashhylden-da1dya1.gif", "https://cdn.discordapp.com/attachments/421772706875441162/439884619505205249/Cookies.gif"]

let redy = Math.floor((Math.random() * gifs.length));

let emb = new Discord.RichEmbed()
.setColor("#0afffa")
.setImage(gifs[redy])
.setDescription(`It seems like ${message.author} wants a cookie`);


if(!cookie) return message.channel.send(emb)

else{

    let cookie = message.mentions.members.first();

let gifs =["https://cdn.discordapp.com/attachments/381412772241735680/449588609515782156/c62d95afb159537426bc13648ba7ffd6.gif","https://cdn.discordapp.com/attachments/381412772241735680/449588432780656651/tenor.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083507168149514/f92e5c3c417765b3e3de261a98a8bd3e.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083511295213578/giphy.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083512566087681/giphy_1.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083518878646282/tenor.gif","https://cdn.discordapp.com/attachments/381412772241735680/440083523286728707/460ed502bb6072de0863a9a905018ce9c7bbdf26478513d319c7a2c76d0b1c15.gif","https://cdn.discordapp.com/attachments/421772706875441162/440076929551433728/kill-la-kill-eating-cookies.gif","https://cdn.discordapp.com/attachments/409339530831724548/439877945432211459/giphy.gif", "https://cdn.discordapp.com/attachments/409339530831724548/439877934212186123/giphy_1.gif", "https://cdn.discordapp.com/attachments/421772706875441162/439884407738990592/k_on__yui_eating_a_cookie___gif_animation_by_kyoflameashhylden-da1dya1.gif", "https://cdn.discordapp.com/attachments/421772706875441162/439884619505205249/Cookies.gif"]

let redy = Math.floor((Math.random() * gifs.length));

let emb2 = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setImage(gifs[redy])
    .setDescription(`Hello there ${cookie}, ${message.author} wanted to know if you want a cookie`);

    message.channel.send(emb2)
}


}
module.exports.help = {
  name: "cookie"
}