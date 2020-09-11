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
	name: 'prefix',
	category: 'administration',
	aliases: ['setp', 'sufix'],
	// Descriptions
	image: 'https://i.imgur.com/yN6ffoV.png',
	description: english.cmdDescriptions.administration.prefix,
	descriptionS: spanish.cmdDescriptions.administration.prefix,
	descriptionG: german.cmdDescriptions.administration.prefix,
	descriptionF: french.cmdDescriptions.administration.prefix,
	descriptionN: nor.cmdDescriptions.administration.prefix,
	// Usage
	usage: 'prefix || prefix New_Prefix',
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
	permissions: ['`ADMINISTRATOR`, `MANAGE_GUILD`'],
	run: async (client, message, args)=> {
		const guild = await gS.findOne({ id: message.channel.guild.id });
		const prefix = guild.prefix;
		const lang = guild.lang;

		// English
		if (lang === 'English' || lang === 'english') {
			if (!message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('ADMINISTRATOR')) {
				const embed = new MessageEmbed()
					.setColor(colors.red_dark)
					.setDescription(english.langCmd.noPerms + prefix + 'help prefix` .');
				message.channel.send(embed);
			}
			else {
				try {
					return English1(message, args, guild);
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
					.setDescription(spanish.langCmd.noPerms + prefix + 'help prefix` .');
				message.channel.send(embed);
			}
			else {
				try {
					return Spanish1(message, args, guild);
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
					.setDescription(german.langCmd.noPerms + prefix + 'help prefix` .');
				message.channel.send(embed);
			}
			else {
				try {
					return German1(message, args, guild);
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
					.setDescription(french.langCmd.noPerms + prefix + 'help prefix` .');
				message.channel.send(embed);
			}
			else {
				try {
					return French1(message, args, guild);
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
					.setDescription(nor.langCmd.noPerms + prefix + 'help prefix` .');
				message.channel.send(embed);
			}
			else {
				try {
					return Nor1(message, args, guild);
				}
				catch (e) {
					console.log('[E] ' + e);

				}
			}
		}
	},
};

// English
async function English1(message, args, guild) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${english.prefixCmd.reponse1} **${message.channel.guild.name}** ${english.prefixCmd.reponse2} **\`${guild.prefix}\`.**
			`);
		return message.channel.send(embed1);
	}
	else {
		await guild.updateOne({ prefix: args.join(' ') });
		const embed2 = new MessageEmbed()
			.setColor(colors.green_dark)
			.setDescription(`${english.prefixCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed2);
	}
}

// Spanish
async function Spanish1(message, args, guild) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${spanish.prefixCmd.reponse1} **${message.channel.guild.name}** ${spanish.prefixCmd.reponse2} **\`${guild.prefix}\`.**
			`);
		return message.channel.send(embed1);
	}
	else {
		await guild.updateOne({ prefix: args.join(' ') });
		const embed2 = new MessageEmbed()
			.setColor(colors.green_dark)
			.setDescription(`${spanish.prefixCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed2);
	}
}

// German
async function German1(message, args, guild) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${german.prefixCmd.reponse1} **${message.channel.guild.name}** ${german.prefixCmd.reponse2} **\`${guild.prefix}\`.**
			`);
		return message.channel.send(embed1);
	}
	else {
		await guild.updateOne({ prefix: args.join(' ') });
		const embed2 = new MessageEmbed()
			.setColor(colors.green_dark)
			.setDescription(`${german.prefixCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed2);
	}
}

// French
async function French1(message, args, guild) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${french.prefixCmd.reponse1} **${message.channel.guild.name}** ${french.prefixCmd.reponse2} **\`${guild.prefix}\`.**
			`);
		return message.channel.send(embed1);
	}
	else {
		await guild.updateOne({ prefix: args.join(' ') });
		const embed2 = new MessageEmbed()
			.setColor(colors.green_dark)
			.setDescription(`${french.prefixCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed2);
	}
}

// Norwegian
async function Nor1(message, args, guild) {
	if (!args.length) {
		const embed1 = new MessageEmbed()
			.setColor(colors.noColor)
			.setDescription(
				`${nor.prefixCmd.reponse1} **${message.channel.guild.name}** ${nor.prefixCmd.reponse2} **\`${guild.prefix}\`.**
			`);
		return message.channel.send(embed1);
	}
	else {
		await guild.updateOne({ prefix: args.join(' ') });
		const embed2 = new MessageEmbed()
			.setColor(colors.green_dark)
			.setDescription(`${nor.prefixCmd.changed} **\`${args.join(' ')}\`!**`);
		await message.channel.send(embed2);
	}
}