/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
const { WebhookClient, MessageEmbed } = require('discord.js');
const gS = require('../models/Guild');
const colors = require('../json/colours.json');
const channel = new WebhookClient(process.env.GUILD_WEBHOOK1, process.env.GUILD_WEBHOOK2);

module.exports = async (client, message, args) => {
	let date_ob = new Date();
	let date = ('0' + date_ob.getDate()).slice(-2);
	let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	let output = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
	const embed = new MessageEmbed()
		.setColor(colors.cGreen)
		.setDescription('<:yes:730256388495769612> **Im back Online!** | `Date/Time`: `' + output + '` | Im: ' + client.user.username);
	channel.send(embed);
	console.log(`[#] ${client.user.username} Has logged in!`);
	let activities = [`${client.guilds.cache.size} servers!`, `${client.channels.cache.size} channels!`, `${client.users.cache.size} users!`], i = 0;
	setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]} | *help`, { type: 'WATCHING' }), 15000);
};