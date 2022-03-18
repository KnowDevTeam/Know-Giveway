const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor(" JSA Bot ")
      .setTitle("Lista de comandos y guía para el bot")
      .setDescription("")
     .addField("🎉**Giveaway**"," **start** [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\n end [prize name]")    
     .addField("⚠️**Examples**", ",start #giveaway 5m 1 Testing\n,end Testing**\n**,reroll Testing**")
   .addField("💡**Utility**", "ping, invite", true)
   .addField("📚 **Information**", "stats", true)
   .addField("📌**invite**", "[**Invite**](https://discord.com/api/oauth2/authorize?client_id=938842889650311239&permissions=8&scope=bot)")
      .setTimestamp()
      .setFooter(`Comando ejecutado por ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Help Menu sent! 💌, Check the Commands!**");

    return message.channel.send(help);
}

module.exports.help = {
  name: "help"
}
