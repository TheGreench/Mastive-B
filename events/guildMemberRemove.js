/* eslint-disable no-empty-function */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
const { MessageEmbed } = require('discord.js');
const gS = require('../models/Guild');
const colors = require('../json/colours.json');
const english = require('../languages/en.json');
const spanish = require('../languages/es.json');
const german = require('../languages/de.json');
const french = require('../languages/fr.json');
const nor = require('../languages/nor.json');

module.exports = async (member, message) => {
	console.log(member);

	let guildss = await gS.findOne({ id: member.guild.id });
	const lang = guildss.lang;

	switch(guildss.memberLogs) {
	case true:
		switch (lang) {
		// English
		case 'English': case 'english': {
			return English1(member, guildss, message);
		}
		// Spanish
		case 'Spanish': case 'spanish': {
			return Spanish1(member, guildss, message);
		}
		// German
		case 'German' :case 'german': {
			return German1(member, guildss, message);
		}
		// French
		case 'French': case 'french': {
			return French1(member, guildss, message);
		}
		// Norwegian
		case 'Norwegian': case 'norwegian': {
			return Nor1(member, guildss, message);
		}
		default: {
			return English1(member, guildss, message);
		}
		}
	case false:
		return;
	default:
		switch (lang) {
		// English
		case 'English': case 'english': {
			return English1(member, guildss, message);
		}
		// Spanish
		case 'Spanish': case 'spanish': {
			return Spanish1(member, guildss, message);
		}
		// German
		case 'German' :case 'german': {
			return German1(member, guildss, message);
		}
		// French
		case 'French': case 'french': {
			return French1(member, guildss, message);
		}
		// Norwegian
		case 'Norwegian': case 'norwegian': {
			return Nor1(member, guildss, message);
		}
		default: {
			return English1(member, guildss, message);
		}
		}
	}
};

// English
async function English1(member, guildss, message) {
	const prefix = guildss.prefix;
	const channel = member.guild.channels.cache.find(ch => ch.name === guildss.memberLogsChannel);
	const embed1 = new MessageEmbed()
		.setColor(colors.orange)
		.setTitle('<:neutral1:738524466102927429> ' + english.gRemove.noChannelTitle)
		.setDescription(`
		${english.gRemove.noChannelDesc1}
		${english.gRemove.noChannelDesc1} \`${prefix}help ml\`
		${english.gRemove.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gRemove.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gRemove.channelDesc1} **${member.guild.name}**
				${english.gRemove.channelDesc2} **${member.user.username}**
				${english.gRemove.channelDesc3} ${member.user.discriminator}**
				${english.gRemove.channelDesc4} **${member.user.id}**
			`);
		channel.send(embed);
	}
}

// Spanish
async function Spanish1(member, guildss, message) {
	const prefix = guildss.prefix;
	const channel = member.guild.channels.cache.find(ch => ch.name === guildss.memberLogsChannel);
	const embed1 = new MessageEmbed()
		.setColor(colors.orange)
		.setTitle('<:neutral1:738524466102927429> ' + english.gRemove.noChannelTitle)
		.setDescription(`
		${english.gRemove.noChannelDesc1}
		${english.gRemove.noChannelDesc1} \`${prefix}help ml\`
		${english.gRemove.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gRemove.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gRemove.channelDesc1} **${member.guild.name}**
				${english.gRemove.channelDesc2} **${member.user.username}**
				${english.gRemove.channelDesc3} ${member.user.discriminator}**
				${english.gRemove.channelDesc4} **${member.user.id}**
			`);
		channel.send(embed);
	}
}

// German
async function German1(member, guildss, message) {
	const prefix = guildss.prefix;
	const channel = member.guild.channels.cache.find(ch => ch.name === guildss.memberLogsChannel);
	const embed1 = new MessageEmbed()
		.setColor(colors.orange)
		.setTitle('<:neutral1:738524466102927429> ' + english.gRemove.noChannelTitle)
		.setDescription(`
		${english.gRemove.noChannelDesc1}
		${english.gRemove.noChannelDesc1} \`${prefix}help ml\`
		${english.gRemove.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gRemove.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gRemove.channelDesc1} **${member.guild.name}**
				${english.gRemove.channelDesc2} **${member.user.username}**
				${english.gRemove.channelDesc3} ${member.user.discriminator}**
				${english.gRemove.channelDesc4} **${member.user.id}**
			`);
		channel.send(embed);
	}
}

// French
async function French1(member, guildss, message) {
	const prefix = guildss.prefix;
	const channel = member.guild.channels.cache.find(ch => ch.name === guildss.memberLogsChannel);
	const embed1 = new MessageEmbed()
		.setColor(colors.orange)
		.setTitle('<:neutral1:738524466102927429> ' + english.gRemove.noChannelTitle)
		.setDescription(`
		${english.gRemove.noChannelDesc1}
		${english.gRemove.noChannelDesc1} \`${prefix}help ml\`
		${english.gRemove.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gRemove.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gRemove.channelDesc1} **${member.guild.name}**
				${english.gRemove.channelDesc2} **${member.user.username}**
				${english.gRemove.channelDesc3} ${member.user.discriminator}**
				${english.gRemove.channelDesc4} **${member.user.id}**
			`);
		channel.send(embed);
	}
}

// Norwegian
async function Nor1(member, guildss, message) {
	const prefix = guildss.prefix;
	const channel = member.guild.channels.cache.find(ch => ch.name === guildss.memberLogsChannel);
	const embed1 = new MessageEmbed()
		.setColor(colors.orange)
		.setTitle('<:neutral1:738524466102927429> ' + english.gRemove.noChannelTitle)
		.setDescription(`
		${english.gRemove.noChannelDesc1}
		${english.gRemove.noChannelDesc1} \`${prefix}help ml\`
		${english.gRemove.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gRemove.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gRemove.channelDesc1} **${member.guild.name}**
				${english.gRemove.channelDesc2} **${member.user.username}**
				${english.gRemove.channelDesc3} ${member.user.discriminator}**
				${english.gRemove.channelDesc4} **${member.user.id}**
			`);
		channel.send(embed);
	}
}