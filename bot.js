const Discord = require('discord.js');
var fs = require('fs');
var util = require('util');

const bot = new Discord.Client();
const token = new string(JSON.parse(fs.readFileSync('token.json','utf-8')));
