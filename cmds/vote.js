const Discord  = module.require('discord.js');

const agree    = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {
  if(!args[0]){
    return message.channel.send(":x: " + "| Please type something")
}
    message.channel.send(`:ballot_box:  ${message.author.username} started a vote!`);
    const pollTopic = await message.channel.send(`${args.join(" ")}`) 
  await pollTopic.react(agree);
  await pollTopic.react(disagree);

  const reactions = await pollTopic.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 100000});
  pollTopic.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Voting Finished:", "----------------------------------------\n" +
                                          "Total votes (Yes): " + `${YES_Count-1}\n` +
                                          "Total votes (No): " + `${NO_Count-1}\n` +
                                          "----------------------------------------", true)

            .setColor("0x#FF0000")

  await message.channel.send({embed: sumsum});

}

module.exports.help = {
    name: "vote"
}
