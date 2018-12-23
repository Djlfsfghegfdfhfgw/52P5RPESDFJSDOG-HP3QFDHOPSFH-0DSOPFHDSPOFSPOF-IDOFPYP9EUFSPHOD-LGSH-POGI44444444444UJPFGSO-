const Discord = require("discord.js");
const PREFIX = "+";
const TOKEN = process.env.TOKEN; 
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
let index = 0;
client.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `<help | ${bot.guilds.size} guilds`,
      `<help | ${bot.channels.size} channels`,
      `<help | ${bot.users.size} users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await bot.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "PLAYING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
    console.log;
});

//bot.user.setGame("Froststar || +help");


bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome-room").send("<:1_:494901340426862592> "+ member.toString() +
          " **Welcome™ to " + `${member.guild.name}` + "**\n" +
          "1⃣ Read the <#381349368151932939>\n"+
          "2⃣ Read the recent <#381349547701436429> 📄\n"+
          "3⃣ If you still have questions, use the command +halp\n");
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
