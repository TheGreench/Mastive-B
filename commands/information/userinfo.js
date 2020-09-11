/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');
const userS = require('../../models/DiscordUser.js');
const botAdminID = ['227033616989814784', '498562823434272778', '328354437552668672', '236303666011832321'];
const testerID = ['648451669671149588', '508309047808622592', '211179199774457856', '749008832683966595'];
const ownerID = '328354437552668672';

module.exports = {
	name: 'userinfo',
	category: 'information',
	aliases: ['uinfo', 'user', 'whois'],
	description: english.cmdDescriptions.infomation.userinfo,
	descriptionS: spanish.cmdDescriptions.infomation.userinfo,
	descriptionG: german.cmdDescriptions.infomation.userinfo,
	descriptionF: french.cmdDescriptions.infomation.userinfo,
	descriptionN: nor.cmdDescriptions.infomation.userinfo,
	usage: 'userinfo || userinfo @user',
	image: 'https://i.imgur.com/iGvcRQw.png',
	// Status
	status: english.cmdStatus.working,
	statusS: spanish.cmdStatus.working,
	statusG: german.cmdStatus.working,
	statusF: french.cmdStatus.working,
	statusN: nor.cmdStatus.working,
	// Translated
	translated: english.cmdTranslated.yes,
	translatedS: spanish.cmdTranslated.yes,
	translatedG: german.cmdTranslated.yes,
	translatedF: french.cmdTranslated.yes,
	translatedN: nor.cmdTranslated.yes,
	// Permissions
	// permissions: "",
	run: async (client, message, args)=> {
		try {
			const guild = await gS.findOne({ id: message.channel.guild.id });
			const lang = guild.lang;

			const member = message.guild.members.cache.find((user) => user.id === args[0]) ||
						message.guild.members.cache.find((user) => user.user.username === args[0]) ||
						message.guild.members.cache.find((user) => user.nickname === args[0]) ||
						message.mentions.members.first() ||
						message.member || 'undefined';

			// Getting User Perms
			const aArray = [];
			if (message.guild.ownerID === member.id) {aArray.push('Owner');}
			if (member.hasPermission('ADMINISTRATOR')) {aArray.push('Administrator');}
			if (member.hasPermission('MANAGE_GUILD')) {aArray.push('Manage Server');}
			if (member.hasPermission('MANAGE_ROLES')) {aArray.push('Manage Roles');}
			if (member.hasPermission('MANAGE_CHANNELS')) {aArray.push('Manage Channels');}
			if (member.hasPermission('VIEW_AUDIT_LOG')) {aArray.push('View Audit Logs');}
			if (member.hasPermission('KICK_MEMBERS')) {aArray.push('Kick Members');}
			if (member.hasPermission('BAN_MEMBERS')) {aArray.push('Ban Members');}
			if (member.hasPermission('MUTE_MEMBERS')) {aArray.push('Mute Members VC');}
			if (member.hasPermission('MANAGE_MESSAGES')) {aArray.push('Manage Messages');}

			// English
			if (lang === 'English' || lang === 'english') {
				return English1(message, member, aArray);
			}
			// Spanish
			if (lang === 'Spanish' || lang === 'spanish') {
				return Spanish1(message, member, aArray);
			}
			//  German
			if (lang === 'German' || lang === 'german') {
				return German1(message, member, aArray);
			}
			// French
			if (lang === 'French' || lang === 'french') {
				return French1(message, member, aArray);
			}
			// Norwegian
			if (lang === 'Norwegian' || lang === 'norwegian') {
				return Nor1(message, member, aArray);
			}
		}
		catch (error) {
			console.log(error);
		}
	},
};

// English
async function English1(message, member, aArray) {
	try {
		const status = {
			online: english.userinfoCmd.statuses.online,
			idle: english.userinfoCmd.statuses.idle,
			dnd: english.userinfoCmd.statuses.dnd,
			offline: english.userinfoCmd.statuses.offline,
		};
		const embed = new MessageEmbed()
			.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.displayAvatarURL({ dynamic: true }))
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
			.setColor(`${member.displayHexColor ? `${member.displayHexColor}` : '#5553ee'}`)
			.addField(english.userinfoCmd.embedField1, `${member.user.tag} | ${member.user.id} | <@${member.user.id}>`, false)
			.addField(english.userinfoCmd.embedField4, `${member.user.bot !== true ? 'No' : 'Yes'}`, true)
			.addField(english.userinfoCmd.embedField5, `${status[member.user.presence.status]}`, true)
			.addField(english.userinfoCmd.embedField6, `${member.user.presence.game ? `:video_game: ${member.user.presence.game.name}` : 'Not playing'}`, true)
			.addField(english.userinfoCmd.embedField7 + ` [${member.roles.cache.size - 1}]`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' **,** ') || 'No Roles'}`, true)
			.addField(english.userinfoCmd.embedField8, member.user.createdAt);
		if (botAdminID.includes(member.user.id)) {
			embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Admin');
		}
		if (ownerID.includes(member.user.id)) {
			embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Owner | Developer | Translator');
		}
		if (aArray.length) {
			embed.addField('Permissions', `${aArray.join(', ')}`);
		}
		embed.setFooter(english.userinfoCmd.embedField9 + ` ${member.user.username} • © Mastive - TheGreench#5074`);
		embed.setTimestamp();
		message.channel.send(embed);
	}
	catch(error) {
		console.log(error);
		message.channel.send('```' + error + '```');
	}
}

// Spanish
async function Spanish1(message, member, aArray) {
	const status = {
		online: spanish.userinfoCmd.statuses.online,
		idle: spanish.userinfoCmd.statuses.idle,
		dnd: spanish.userinfoCmd.statuses.dnd,
		offline: spanish.userinfoCmd.statuses.offline,
	};
	const embed = new MessageEmbed()
		.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.displayAvatarURL({ dynamic: true }))
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setColor(`${member.displayHexColor ? `${member.displayHexColor}` : '#5553ee'}`)
		.addField(spanish.userinfoCmd.embedField1, `${member.user.tag} | ${member.user.id} | <@${member.user.id}>`, false)
		.addField(spanish.userinfoCmd.embedField4, `${member.user.bot !== true ? 'No' : 'Yes'}`, true)
		.addField(spanish.userinfoCmd.embedField5, `${status[member.user.presence.status]}`, true)
		.addField(spanish.userinfoCmd.embedField6, `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : 'Not playing'}`, true)
		.addField(spanish.userinfoCmd.embedField7 + ` [${member.roles.cache.size - 1}]`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' **,** ') || 'No Roles'}`, true)
		.addField(spanish.userinfoCmd.embedField8, member.user.createdAt);
	if (botAdminID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Admin');
	}
	if (ownerID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Owner | Developer | Translator');
	}
	if (aArray.length) {
		embed.addField('Permissions', `${aArray.join(', ')}`);
	}
	embed.setFooter(spanish.userinfoCmd.embedField9 + ` ${member.user.username} • © Mastive - TheGreench#5074`);
	embed.setTimestamp();
	message.channel.send(embed);
}

// German
async function German1(message, member, aArray) {
	const status = {
		online: german.userinfoCmd.statuses.online,
		idle: german.userinfoCmd.statuses.idle,
		dnd: german.userinfoCmd.statuses.dnd,
		offline: german.userinfoCmd.statuses.offline,
	};
	const embed = new MessageEmbed()
		.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.displayAvatarURL({ dynamic: true }))
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setColor(`${member.displayHexColor ? `${member.displayHexColor}` : '#5553ee'}`)
		.addField(german.userinfoCmd.embedField1, `${member.user.tag} | ${member.user.id} | <@${member.user.id}>`, false)
		.addField(german.userinfoCmd.embedField4, `${member.user.bot !== true ? 'No' : 'Yes'}`, true)
		.addField(german.userinfoCmd.embedField5, `${status[member.user.presence.status]}`, true)
		.addField(german.userinfoCmd.embedField6, `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : 'Not playing'}`, true)
		.addField(german.userinfoCmd.embedField7 + ` [${member.roles.cache.size - 1}]`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' **,** ') || 'No Roles'}`, true)
		.addField(german.userinfoCmd.embedField8, member.user.createdAt);
	if (botAdminID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Admin');
	}
	if (ownerID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Owner | Developer | Translator');
	}
	if (aArray.length) {
		embed.addField('Permissions', `${aArray.join(', ')}`);
	}
	embed.setFooter(german.userinfoCmd.embedField9 + ` ${member.user.username} • © Mastive - TheGreench#5074`);
	embed.setTimestamp();
	message.channel.send(embed);
}

// French
async function French1(message, member, aArray) {
	const status = {
		online: french.userinfoCmd.statuses.online,
		idle: french.userinfoCmd.statuses.idle,
		dnd: french.userinfoCmd.statuses.dnd,
		offline: french.userinfoCmd.statuses.offline,
	};
	const embed = new MessageEmbed()
		.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.displayAvatarURL({ dynamic: true }))
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setColor(`${member.displayHexColor ? `${member.displayHexColor}` : '#5553ee'}`)
		.addField(french.userinfoCmd.embedField1, `${member.user.tag} | ${member.user.id} | <@${member.user.id}>`, false)
		// .addField(french.userinfoCmd.embedField2, member.user.id, true)
		// .addField(french.userinfoCmd.embedField3, `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField(french.userinfoCmd.embedField4, `${member.user.bot !== true ? 'No' : 'Yes'}`, true)
		.addField(french.userinfoCmd.embedField5, `${status[member.user.presence.status]}`, true)
		.addField(french.userinfoCmd.embedField6, `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : 'Not playing'}`, true)
		.addField(french.userinfoCmd.embedField7 + ` [${member.roles.cache.size - 1}]`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' **,** ') || 'No Roles'}`, true)
		.addField(french.userinfoCmd.embedField8, member.user.createdAt);
	if (botAdminID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Admin');
	}
	if (ownerID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Owner | Developer | Translator');
	}
	if (aArray.length) {
		embed.addField('Permissions', `${aArray.join(', ')}`);
	}
	embed.setFooter(french.userinfoCmd.embedField9 + ` ${member.user.username} • © Mastive - TheGreench#5074`);
	embed.setTimestamp();
	message.channel.send(embed);
}

// Norwegian
async function Nor1(message, member, aArray) {
	const status = {
		online: nor.userinfoCmd.statuses.online,
		idle: nor.userinfoCmd.statuses.idle,
		dnd: nor.userinfoCmd.statuses.dnd,
		offline: nor.userinfoCmd.statuses.offline,
	};
	const embed = new MessageEmbed()
		.setAuthor(member.user.username + '#' + member.user.discriminator, member.user.displayAvatarURL({ dynamic: true }))
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
		.setColor(`${member.displayHexColor ? `${member.displayHexColor}` : '#5553ee'}`)
		.addField(nor.userinfoCmd.embedField1, `${member.user.tag} | ${member.user.id} | <@${member.user.id}>`, false)
		.addField(nor.userinfoCmd.embedField4, `${member.user.bot !== true ? 'No' : 'Yes'}`, true)
		.addField(nor.userinfoCmd.embedField5, `${status[member.user.presence.status]}`, true)
		.addField(nor.userinfoCmd.embedField6, `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : 'Not playing'}`, true)
		.addField(nor.userinfoCmd.embedField7 + ` [${member.roles.cache.size - 1}]`, `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(' **,** ') || 'No Roles'}`, true)
		.addField(nor.userinfoCmd.embedField8, member.user.createdAt);
	if (botAdminID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Admin');
	}
	if (ownerID.includes(member.user.id)) {
		embed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**MASTIVE STAFF** | Bot Owner | Developer | Translator');
	}
	if (aArray.length) {
		embed.addField('Permissions', `${aArray.join(', ')}`);
	}
	embed.setFooter(nor.userinfoCmd.embedField9 + ` ${member.user.username} • © Mastive - TheGreench#5074`);
	embed.setTimestamp();
	message.channel.send(embed);
}