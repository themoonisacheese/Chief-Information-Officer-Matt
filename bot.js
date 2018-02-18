const prod = true; //WHEN USING IN PROD, CHANGE THIS TO TRUE TO SET ALL VARIABLES TO THE NEW ENVIRONMENT
const Discord = require('discord.js');
var fs = require('fs');
var util = require('util');

const bot = new Discord.Client();
const token = JSON.parse(fs.readFileSync('token.json','utf-8')).token;
var guildname = 'EmojiBot support';
var channelname = 'winners';
var address = 'address.txt';
var balance = 'balance.txt';
var txid = 'txid.txt';

if (prod) {
  guildname = 'Garlic, Inc.';
  address = '/root/pool/33.5-x86_64-unknown-linux-gnu/bin/giveaway/' + address;
  balance = '/root/pool/33.5-x86_64-unknown-linux-gnu/bin/giveaway/' + balance;
  txid = '/root/pool/33.5-x86_64-unknown-linux-gnu/bin/giveaway/' + txid;
}

bot.once('ready', ()=> {
  fs.watchFile(txid, function() {

    if (fs.readFileSync(txid) == "")
      return;

    const channel = bot.guilds.find('name', guildname).channels.find('name', channelname);
    if (!channel) {
      console.error("Cannot find the #" + channelname + " channel in the " + guildname + " guild!");
      return;
    }
    channel.send("**New winner:** " + fs.readFileSync(address) + "\n\
  Balance: " + fs.readFileSync(balance) + "\n\
  Transaction ID: " + fs.readFileSync(txid));
  });
  bot.user.setPresence({game: {name: 'with the employees kids', type: 0}})

});

bot.on('guildMemberAdd', member =>{
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Welcome to Garlic, Inc., ${member}!`);
});


bot.login(token);
