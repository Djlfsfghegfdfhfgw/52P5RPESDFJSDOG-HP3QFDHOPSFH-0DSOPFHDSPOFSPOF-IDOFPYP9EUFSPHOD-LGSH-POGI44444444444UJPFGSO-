const Discord = require("discord.js");
const TOKEN = "NDQwNDQzODQ4NDU2NDA0OTky.Dchy2w.AHu9K7euvrBddd_GgC-DjsZcKWY";
const PREFIX = "+cat";
var bot = new Discord.Client();
const fs = require("fs")
bot.commands = new Discord.Collection();


fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.length <= 0) {
        console.log("No commands found to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", function() {
    bot.user.setActivity("for prey || +cathelp",{type:"WATCHING"});
    console.log;
});

//bot.user.setGame("for prey || +cathelp");


bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome-place").send("<:1_:432441699403300865> "+ member.toString() +
          " **Welcome to " + `${member.guild.name}` + "**\n" +
          "1⃣ Read the <#409335164364128257>  and the channel named <#409335767421419520>  📄\n"+
          "2⃣ Read the recent <#409353083043184681>\n"+
          "3⃣ If you still have questions, ask in the <#409334966627991577>\n",{files: ["\maxresdefault.jpg"]});
});

bot.on("message", function(message) {
    if (message.author.bot) return; 
    if (message.channel.type === "dm") return; 
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(PREFIX)) return;

    let cmd = bot.commands.get(command.slice(PREFIX.length));
    if(cmd) cmd.run(bot, message, args);
});

    bot.login(TOKEN);