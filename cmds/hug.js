const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let hug = message.mentions.members.first();

let gifs = ["https://cdn.discordapp.com/attachments/381412772241735680/449589238372237332/giphy.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085625786466315/e0d7dfbbb66c93b29f4b93d4bf9aa4f8.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085628269494282/RemoteQuaintAdmiralbutterfly-size_restricted.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085638528892948/Yellowfang-does-NOT-get-payed-enough-warrior-cats-40211740-500-333.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085639946567680/WellgroomedVapidKitten-max-1mb.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085642748362762/tumblr_oc3ssktYe71r76h9to1_500.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085643876368395/tenor.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085653468872714/bXDgV.gif","https://cdn.discordapp.com/attachments/409339530831724548/439874674814615554/tenor.gif","https://cdn.discordapp.com/attachments/409339530831724548/439875712950992897/tenor_1.gif"]

let redy = Math.floor((Math.random() * gifs.length));

let emb = new Discord.RichEmbed()
.setColor("#0afffa")
.setImage(gifs[redy])
.setDescription(`It seems like ${message.author} wants a hug`);


if(!hug) return message.channel.send(emb)

else{

    let hug = message.mentions.members.first();

let gifs =["https://cdn.discordapp.com/attachments/381412772241735680/449589238372237332/giphy.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085625786466315/e0d7dfbbb66c93b29f4b93d4bf9aa4f8.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085628269494282/RemoteQuaintAdmiralbutterfly-size_restricted.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085638528892948/Yellowfang-does-NOT-get-payed-enough-warrior-cats-40211740-500-333.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085639946567680/WellgroomedVapidKitten-max-1mb.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085642748362762/tumblr_oc3ssktYe71r76h9to1_500.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085643876368395/tenor.gif","https://cdn.discordapp.com/attachments/381412772241735680/440085653468872714/bXDgV.gif","https://cdn.discordapp.com/attachments/409339530831724548/439874674814615554/tenor.gif","https://cdn.discordapp.com/attachments/409339530831724548/439875712950992897/tenor_1.gif"]

let redy = Math.floor((Math.random() * gifs.length));

let emb2 = new Discord.RichEmbed()
    .setColor("#0afffa")
    .setImage(gifs[redy])
    .setDescription(`Hello there ${hug}, ${message.author} wanted to know if you want a hug`);

    message.channel.send(emb2)
}


}
module.exports.help = {
  name: "hug"
}