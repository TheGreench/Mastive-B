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
	const coinsAdd = Math.ceil(((Math.random() * 50) + (Math.random() * 20)) * 4);
	const xpAdd = Math.ceil(Math.random() * 30);

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
		.setTitle('<:neutral1:738524466102927429> ' + english.gAdd.noChannelTitle)
		.setDescription(`
		${english.gAdd.noChannelDesc1}
		${english.gAdd.noChannelDesc1} \`${prefix}help ml\`
		${english.gAdd.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gAdd.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gAdd.channelDesc1} **${member.guild.name}**
				${english.gAdd.channelDesc2} **${member.user.username}**
				${english.gAdd.channelDesc3} ${member.user.discriminator}**
				${english.gAdd.channelDesc4} **${member.user.id}**
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
		.setTitle('<:neutral1:738524466102927429> ' + english.gAdd.noChannelTitle)
		.setDescription(`
		${english.gAdd.noChannelDesc1}
		${english.gAdd.noChannelDesc1} \`${prefix}help ml\`
		${english.gAdd.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gAdd.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gAdd.channelDesc1} **${member.guild.name}**
				${english.gAdd.channelDesc2} **${member.user.username}**
				${english.gAdd.channelDesc3} ${member.user.discriminator}**
				${english.gAdd.channelDesc4} **${member.user.id}**
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
		.setTitle('<:neutral1:738524466102927429> ' + english.gAdd.noChannelTitle)
		.setDescription(`
		${english.gAdd.noChannelDesc1}
		${english.gAdd.noChannelDesc1} \`${prefix}help ml\`
		${english.gAdd.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gAdd.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gAdd.channelDesc1} **${member.guild.name}**
				${english.gAdd.channelDesc2} **${member.user.username}**
				${english.gAdd.channelDesc3} ${member.user.discriminator}**
				${english.gAdd.channelDesc4} **${member.user.id}**
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
		.setTitle('<:neutral1:738524466102927429> ' + english.gAdd.noChannelTitle)
		.setDescription(`
		${english.gAdd.noChannelDesc1}
		${english.gAdd.noChannelDesc1} \`${prefix}help ml\`
		${english.gAdd.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gAdd.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gAdd.channelDesc1} **${member.guild.name}**
				${english.gAdd.channelDesc2} **${member.user.username}**
				${english.gAdd.channelDesc3} ${member.user.discriminator}**
				${english.gAdd.channelDesc4} **${member.user.id}**
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
		.setTitle('<:neutral1:738524466102927429> ' + english.gAdd.noChannelTitle)
		.setDescription(`
		${english.gAdd.noChannelDesc1}
		${english.gAdd.noChannelDesc1} \`${prefix}help ml\`
		${english.gAdd.noChannelDesc1} \`${prefix}ml\`
		`);
	if (!channel) {
		member.guild.owner.createDM().then(dm => dm.send(embed1));
	}
	else {
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setThumbnail(member.user.displayAvatarURL())
			.setTimestamp()
			.setFooter(english.gAdd.channelFooter + member.guild.memberCount + ']')
			.setDescription(`
				${english.gAdd.channelDesc1} **${member.guild.name}**
				${english.gAdd.channelDesc2} **${member.user.username}**
				${english.gAdd.channelDesc3} ${member.user.discriminator}**
				${english.gAdd.channelDesc4} **${member.user.id}**
			`);
		channel.send(embed);
	}
}