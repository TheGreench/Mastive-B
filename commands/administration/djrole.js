/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const colors = require('../../json/colours.json');
const gS = require('../../models/Guild.js');

module.exports = {
	name: 'djrole',
	category: 'administration',
	aliases: ['dj', 'setdj'],
	// Descriptions
	image: 'https://i.imgur.com/yN6ffoV.png',
	description: english.cmdDescriptions.administration.djrole,
	descriptionS: spanish.cmdDescriptions.administration.djrole,
	descriptionG: german.cmdDescriptions.administration.djrole,
	descriptionF: french.cmdDescriptions.administration.djrole,
	descriptionN: nor.cmdDescriptions.administration.djrole,
	// Usage
	usage: 'dj || dj [true - false]',
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
	permissions: ['`ADMINISTRATOR`', '`MANAGE_GUILD`'],
	run: async (client, message, args)=> {
		const guild = await gS.findOne({ id: message.channel.guild.id });
		const prefix = guild.prefix;
		const lang = guild.lang;
		const validation = ['true', 'false'];

		// English
		if (lang === 'English' || lang === 'english') {
			if (!message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('ADMINISTRATOR')) {
				const embed = new MessageEmbed()
					.setColor(colors.red_dark)
					.setDescription(english.djroleCmd.noPerms + prefix + 'help djrole` .');
				message.channel.send(embed);
			}
			else {
				try {
					return English1(message, args, prefix, guild, validation);
				}
				catch (e) {
					console.log('[E] ' + e);

				}
			}
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			if (!message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('ADMINISTRATOR')) {
				const embed = new MessageEmbed()
					.setColor(colors.red_dark)
					.setDescription(spanish.djroleCmd.noPerms + prefix + 'help djrole` .');
				message.channel.send(embed);
			}
			else {
				try {
					return Spanish1(message, args, prefix, guild, validation);
				}
				catch (e) {
					console.log('[E] ' + e);

				}
			}
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			if (!message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('ADMINISTRATOR')) {
				const embed = new MessageEmbed()
					.setColor(colors.red_dark)
					.setDescription(german.djroleCmd.noPerms + prefix + 'help djrole` .');
				message.channel.send(embed);
			}
			else {
				try {
					return German1(message, args, prefix, guild, validation);
				}
				catch (e) {
					console.log('[E] ' + e);

				}
			}
		}
		// French
		if (lang === 'French' || lang === 'french') {
			if (!message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('ADMINISTRATOR')) {
				const embed = new MessageEmbed()
					.setColor(colors.red_dark)
					.setDescription(french.djroleCmd.noPerms + prefix + 'help djrole` .');
				message.channel.send(embed);
			}
			else {
				try {
					return French1(message, args, prefix, guild, validation);
				}
				catch (e) {
					console.log('[E] ' + e);

				}
			}
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			if (!message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('ADMINISTRATOR')) {
				const embed = new MessageEmbed()
					.setColor(colors.red_dark)
					.setDescription(nor.djroleCmd.noPerms + prefix + 'help djrole` .');
				message.channel.send(embed);
			}
			else {
				try {
					return Nor1(message, args, prefix, guild, validation);
				}
				catch (e) {
					console.log('[E] ' + e);

				}
			}
		}
	},
};

// English
async function English1(message, args, prefix, guild, validation) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${english.djroleCmd.response1} **${message.channel.guild.name}** ${english.djroleCmd.response2} \`${guild.djRole}\` ${english.djroleCmd.response3} \`${guild.roleDj}\`${english.djroleCmd.response4}.
			`);
		return message.channel.send(embed1);
	}
	else if (!validation.includes(args[0])) {
		const errEmbed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setDescription(`${english.djroleCmd.notValid} \`${prefix}djrole\``);
		message.channel.send(errEmbed);
	}
	else {
		await guild.updateOne({ djRole: args.join(' ') });
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setDescription(`${english.djroleCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed);
	}
}

// Spanish
async function Spanish1(message, args, prefix, guild, validation) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${spanish.djroleCmd.response1} **${message.channel.guild.name}** ${spanish.djroleCmd.response2} \`${guild.djRole}\` ${spanish.djroleCmd.response3} \`${guild.roleDj}\`${spanish.djroleCmd.response4}.
			`);
		return message.channel.send(embed1);
	}
	else if (!validation.includes(args[0])) {
		const errEmbed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setDescription(`${spanish.djroleCmd.notValid} \`${prefix}djrole\``);
		message.channel.send(errEmbed);
	}
	else {
		await guild.updateOne({ djRole: args.join(' ') });
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setDescription(`${spanish.djroleCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed);
	}
}

// German
async function German1(message, args, prefix, guild, validation) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${german.djroleCmd.response1} **${message.channel.guild.name}** ${german.djroleCmd.response2} \`${guild.djRole}\` ${german.djroleCmd.response3} \`${guild.roleDj}\`${german.djroleCmd.response4}.
			`);
		return message.channel.send(embed1);
	}
	else if (!validation.includes(args[0])) {
		const errEmbed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setDescription(`${german.djroleCmd.notValid} \`${prefix}djrole\``);
		message.channel.send(errEmbed);
	}
	else {
		await guild.updateOne({ djRole: args.join(' ') });
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setDescription(`${spanish.djroleCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed);
	}
}

// French
async function French1(message, args, prefix, guild, validation) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${french.djroleCmd.response1} **${message.channel.guild.name}** ${french.djroleCmd.response2} \`${guild.djRole}\` ${french.djroleCmd.response3} \`${guild.roleDj}\`${french.djroleCmd.response4}.
			`);
		return message.channel.send(embed1);
	}
	else if (!validation.includes(args[0])) {
		const errEmbed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setDescription(`${french.djroleCmd.notValid} \`${prefix}djrole\``);
		message.channel.send(errEmbed);
	}
	else {
		await guild.updateOne({ djRole: args.join(' ') });
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setDescription(`${spanish.djroleCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed);
	}
}

// Norwegian
async function Nor1(message, args, prefix, guild, validation) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${nor.djroleCmd.response1} **${message.channel.guild.name}** ${nor.djroleCmd.response2} \`${guild.djRole}\` ${nor.djroleCmd.response3} \`${guild.roleDj}\`${nor.djroleCmd.response4}.
			`);
		return message.channel.send(embed1);
	}
	else if (!validation.includes(args[0])) {
		const errEmbed = new MessageEmbed()
			.setColor(colors.red_dark)
			.setDescription(`${nor.djroleCmd.notValid} \`${prefix}djrole\``);
		message.channel.send(errEmbed);
	}
	else {
		await guild.updateOne({ djRole: args.join(' ') });
		const embed = new MessageEmbed()
			.setColor(colors.cGreen)
			.setDescription(`${spanish.djroleCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed);
	}
}