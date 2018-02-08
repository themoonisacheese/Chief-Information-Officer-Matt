const prod = false; //WHEN USING IN PROD, CHANGE THIS TO TRUE TO SET ALL VARIABLES TO THE NEW ENVIRONMENT
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
  address = '/root/unomp/website/pages/' + address;
  balance = '/root/unomp/website/pages/' + balance;
  txid = '/root/unomp/website/pages/' + txid;
}


fs.watchFile(address, function() { //wait 1 sec for all files to be updated.
  const channel = bot.guilds.find('name', guildname).channels.find('name', channelname);
  if (!channel) {
    console.error("Cannot find the #" + channelname + " channel in the " + guildname + " guild!");
    return;
  }
  channel.send("**New winner:** " + fs.readFileSync(address) + "\n\
Balance: " + fs.readFileSync(balance) + "\n\
Transaction ID: " + fs.readFileSync(txid));
});

bot.login(token);
