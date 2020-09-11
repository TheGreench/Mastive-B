/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');
const { connect } = require('mongoose');

// Schemas
// Guilds
const guildS = require('./models/Guild');
// Users - To Economy Soon
const userS = require('./models/DiscordUser');

const client = new Client({
	disableEveryone: true,
	messageCacheLifetime: 1200,
	messageSweepInterval: 1200,
});

client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.categories = fs.readdirSync('./commands/');
client.queue = new Map();

config({
	path: __dirname + '/.env',
});
['command', 'event'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

client.on('message', async message => {
	try {
		// Guild Schema
		let guild = await guildS.findOne({ id: message.guild.id });
		if (!guild) {
			guild = new guildS({
				id: message.guild.id,
				serverName: message.guild.name,
				prefix: '*',
				lang: 'English',
				djRole: false,
				roleDj: 'DJ',
				modRole: 'Mod',
				adminRole: 'Admin',
				logsChannel: 'logs',
				memberLogs: false,
				memberLogsChannel: 'joins',
				blacklisted: false,
			});
			await guild.save().catch((e) => console.log('[E] ' + e));
		}
		else {
			await guild.updateOne({
				id: guild.id,
				serverName: guild.serverName,
				prefix: guild.prefix,
				lang: guild.lang,
				memberLogs: guild.memberLogs,
				memberLogsChannel: guild.memberLogsChannel,
				logsChannel: guild.logsChannel,
				modRole: guild.modRole,
				adminRole: guild.adminRole,
				djRole: guild.djRole,
				roleDj: guild.roleDj,
				blacklisted: guild.blacklisted,
			});
		}

		// Prefix
		const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
		const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : guild.prefix;

		if (message.author.bot) return;
		if (!message.guild) return;
		if (!message.content.startsWith(prefix)) return;
		if (!message.member) message.member = await message.guild.fetchMember(message);

		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const cmd = args.shift().toLowerCase();

		if (cmd.length === 0) return;
		let command = client.commands.get(cmd);
		if (!command) command = client.commands.get(client.aliases.get(cmd));
		if (command) {command.run(client, message, args);}
		if (!client.cooldowns.has(command.name)) {
			client.cooldowns.set(command.name, new Collection());
		}
	}
	catch (error) {
		console.log('[E] ' + error);
	}
});

// Connecting to MongoDB
connect(process.env.MONGODBLINK, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}, (err) => {
	if (err) {
		console.log('[E] ' + err);
	}
	else {
		console.log('[#] Mastive connected to db!');
	}
});

// Client connecting to the api and running
client.login(process.env.TOKEN);