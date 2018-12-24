const Discord = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    const commands = fs.readFileSync("./commands.txt", "utf8");

    message.channel.send({  
     embed : {
    title: "Informations",
    description:"Howdy partner,welcome to the cult,gorgeous follower,I recommend you reading the <#381349368151932939> if you didn't,if you're not new then howdy :>,hope you have fun",
    color: 4886754,
    fields: [
        {
            name:"✪ 🇬 🇪 🇳 🇪 🇷 🇦 🇱 ✪",
            value:"In general,this cult is random,it got: music,many F.U.N bots,nice memes,other features like getting your own colour",
            inline:true
        },
        {
        name: "❃ ᴏ ᴛ ʜ ᴇ ʀ s ᴛ ᴜ ғ ғ s ❃",
        value:"you can get your own colour and have access to other features if you're going to check <#505657455347367947>",
       inline:true
        },
        {
        name:"✩ s ᴛ ɪ ʟ ʟ ɴ ᴇ ᴇ ᴅ ʜ ᴇ ʟ ᴘ ? ✩",
        value: "Well then,if you still need help you should ask someone,just ping the tsar,the tsar know e v e r y t h i n g",
        inline:true
        }
    ]
}
})
message.delete();
}
module.exports.help = {
name: "halp"
}
