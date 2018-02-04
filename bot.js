const prod = false; //WHEN USING IN PROD, CHANGE THIS TO TRUE TO SET ALL VARIABLES TO THE NEW ENVIRONMENT
const Discord = require('discord.js');
var fs = require('fs');
var util = require('util');

const bot = new Discord.Client();
const token = new string(JSON.parse(fs.readFileSync('token.json','utf-8')));
const guildname = 'EmojiBot support';
const channelname = 'winners';
const adress = 'address.txt';
const balance = 'balance.txt';
const txid = 'txid.txt';

if (prod) {
  guildname = 'Garlic, Inc.';
  address = '/root/unomp/website/pages/' + address;
  balance = '/root/unomp/website/pages/' + balance;
  txid = '/root/unomp/website/pages/' + txid;
}


fs.watch(address, settimeout(function() { //wait 1 sec for all files to be updated.
  static const channel = bot.guilds.find('name', guildname).channels.find('name', channelname);
  if (!channel) {
    console.error("Cannot find the #" + channelname + " channel in the " + guildname + " guild!");
    return;
  }
  channel.send("New winner: " + fs.readFileSync(adress));
}, 1000)
);

bot.login(token);
