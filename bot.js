const prod = false; //WHEN USING IN PROD, CHANGE THIS TO TRUE TO SET ALL VARIABLES TO THE NEW ENVIRONMENT
const Discord = require('discord.js');
var fs = require('fs');
var util = require('util');

const bot = new Discord.Client();
const token = JSON.parse(fs.readFileSync('token.json','utf-8')).token;
const guildname = 'EmojiBot support';
const channelname = 'winners';
const address = 'address.txt';
const balance = 'balance.txt';
const txid = 'txid.txt';

if (prod) {
  guildname = 'Garlic, Inc.';
  address = '/root/unomp/website/pages/' + address;
  balance = '/root/unomp/website/pages/' + balance;
  txid = '/root/unomp/website/pages/' + txid;
}


fs.watch(address, setTimeout(function() { //wait 1 sec for all files to be updated.
  const channel = bot.guilds.find('name', guildname).channels.find('name', channelname);
  if (!channel) {
    console.error("Cannot find the #" + channelname + " channel in the " + guildname + " guild!");
    return;
  }
  channel.send("New winner: " + fs.readFileSync(address));
}, 1000)
);

bot.login(token);
