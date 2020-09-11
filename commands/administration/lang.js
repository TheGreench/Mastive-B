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
	name: 'lang',
	category: 'administration',
	aliases: ['language', 'setl'],
	// Descriptions
	image: 'https://i.imgur.com/yN6ffoV.png',
	description: english.cmdDescriptions.administration.lang,
	descriptionS: spanish.cmdDescriptions.administration.lang,
	descriptionG: german.cmdDescriptions.administration.lang,
	descriptionF: french.cmdDescriptions.administration.lang,
	descriptionN: nor.cmdDescriptions.administration.lang,
	// Usage
	usage: 'lang || lang [English - Spanish - German - French - Norwegian]',
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
		const validation = ['English', 'english', 'Spanish', 'spanish', 'German', 'german', 'French', 'french', 'Norwegian', 'norwegian'];

		// English
		if (lang === 'English' || lang === 'english') {
			if (!message.member.hasPermission('MANAGE_GUILD') || !message.member.hasPermission('ADMINISTRATOR')) {
				const embed = new MessageEmbed()
					.setColor(colors.red_dark)
					.setDescription(english.langCmd.noPerms + prefix + 'help lang` .');
				message.channel.send(embed);
			}
			else {
				try {
					return English1(message, args, lang, prefix, validation, guild);
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
					.setDescription(spanish.langCmd.noPerms + prefix + 'help lang` .');
				message.channel.send(embed);
			}
			else {
				try {
					return Spanish1(message, args, lang, prefix, validation, guild);
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
					.setDescription(german.langCmd.noPerms + prefix + 'help lang` .');
				message.channel.send(embed);
			}
			else {
				try {
					return German1(message, args, lang, prefix, validation, guild);
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
					.setDescription(french.langCmd.noPerms + prefix + 'help lang` .');
				message.channel.send(embed);
			}
			else {
				try {
					return French1(message, args, lang, prefix, validation, guild);
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
					.setDescription(nor.langCmd.noPerms + prefix + 'help lang` .');
				message.channel.send(embed);
			}
			else {
				try {
					return Nor1(message, args, lang, prefix, validation, guild);
				}
				catch (e) {
					console.log('[E] ' + e);

				}
			}

		}
	},
};

// English
async function English1(message, args, lang, prefix, validation, guild) {
	try {
		if (!args.length) {
			const embed = new MessageEmbed()
				.setTitle(english.langCmd.reponse1)
				.setColor(colors.noColor)
				.setDescription(`
                ${english.langCmd.response2} **${message.channel.guild.name}** ${english.langCmd.response3} **\`${lang}\`.
                ${english.langCmd.response4}
                `);
			return message.channel.send(embed);
		}
		else if (!validation.includes(args[0])) {
			const errEmbed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(`${english.langCmd.notValid} \`${prefix}lang\``);
			message.channel.send(errEmbed);
		}
		else {
			await guild.updateOne({ lang: args.join(' ') });
			const embed2 = new MessageEmbed()
				.setColor(colors.green_dark)
				.setDescription(`${english.langCmd.changed} **\`${args.join(' ')}\`!**`);
			await message.channel.send(embed2);
		}
	}
	catch (e) {
		console.log('[E] ' + e);

	}
}

// Spanish
async function Spanish1(message, args, lang, prefix, validation, guild) {
	try {
		if (!args.length) {
			const embed = new MessageEmbed()
				.setTitle(spanish.langCmd.response1)
				.setColor(colors.noColor)
				.setDescription(`
                ${spanish.langCmd.response2} **${message.channel.guild.name}** ${spanish.langCmd.response3} **\`${lang}\`.
                ${spanish.langCmd.response4}
                `);
			return message.channel.send(embed);
		}
		else if (!validation.includes(args[0])) {
			const errEmbed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(`${spanish.langCmd.notValid} \`${prefix}lang\``);
			message.channel.send(errEmbed);
		}
		else {
			await guild.updateOne({ lang: args.join(' ') });
			const embed2 = new MessageEmbed()
				.setColor(colors.green_dark)
				.setDescription(`${spanish.langCmd.changed} **\`${args.join(' ')}\`!**`);
			await message.channel.send(embed2);
		}
	}
	catch (e) {
		console.log('[E] ' + e);

	}
}

// German
async function German1(message, args, lang, prefix, validation, guild) {
	try {
		if (!args.length) {
			const embed = new MessageEmbed()
				.setTitle(german.langCmd.response1)
				.setColor(colors.noColor)
				.setDescription(`
                ${german.langCmd.response2} **${message.channel.guild.name}** ${german.langCmd.response3} **\`${lang}\`.
                ${german.langCmd.response4}
                `);
			return message.channel.send(embed);
		}
		else if (!validation.includes(args[0])) {
			const errEmbed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(`${german.langCmd.notValid} \`${prefix}lang\``);
			message.channel.send(errEmbed);
		}
		else {
			await guild.updateOne({ lang: args.join(' ') });
			const embed2 = new MessageEmbed()
				.setColor(colors.green_dark)
				.setDescription(`${german.langCmd.changed} **\`${args.join(' ')}\`!**`);
			await message.channel.send(embed2);
		}
	}
	catch (e) {
		console.log('[E] ' + e);

	}
}

// French
async function French1(message, args, lang, prefix, validation, guild) {
	try {
		if (!args.length) {
			const embed = new MessageEmbed()
				.setTitle(french.langCmd.reponse1)
				.setColor(colors.noColor)
				.setDescription(`
                ${french.langCmd.response2} **${message.channel.guild.name}** ${french.langCmd.response3} **\`${lang}\`.
                ${french.langCmd.response4}
                `);
			return message.channel.send(embed);
		}
		else if (!validation.includes(args[0])) {
			const errEmbed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(`${french.langCmd.notValid} \`${prefix}lang\``);
			message.channel.send(errEmbed);
		}
		else {
			await guild.updateOne({ lang: args.join(' ') });
			const embed2 = new MessageEmbed()
				.setColor(colors.green_dark)
				.setDescription(`${french.langCmd.changed} **\`${args.join(' ')}\`!**`);
			await message.channel.send(embed2);
		}
	}
	catch (e) {
		console.log('[E] ' + e);

	}
}

// Norwegian
async function Nor1(message, args, lang, prefix, validation, guild) {
	try {
		if (!args.length) {
			const embed = new MessageEmbed()
				.setTitle(nor.langCmd.response1)
				.setColor(colors.noColor)
				.setDescription(`
                ${nor.langCmd.response2} **${message.channel.guild.name}** ${nor.langCmd.response3} **\`${lang}\`.
                ${nor.langCmd.response4}
                `);
			return message.channel.send(embed);
		}
		else if (!validation.includes(args[0])) {
			const errEmbed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(`${nor.langCmd.notValid} \`${prefix}lang\``);
			message.channel.send(errEmbed);
		}
		else {
			await guild.updateOne({ lang: args.join(' ') });
			const embed2 = new MessageEmbed()
				.setColor(colors.green_dark)
				.setDescription(`${nor.langCmd.changed} **\`${args.join(' ')}\`!**`);
			await message.channel.send(embed2);
		}
	}
	catch (e) {
		console.log('[E] ' + e);

	}
}