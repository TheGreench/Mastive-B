/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');
const colors = require('../../json/colours.json');

module.exports = {
	name: 'support',
	category: 'utility',
	// aliases: [''],
	// Descriptions
	image: 'https://i.imgur.com/F0uwWqX.png',
	description: english.cmdDescriptions.utility.support,
	descriptionS: spanish.cmdDescriptions.utility.support,
	descriptionG: german.cmdDescriptions.utility.support,
	descriptionF: french.cmdDescriptions.utility.support,
	descriptionN: nor.cmdDescriptions.utility.support,
	// Usage
	usage: 'support',
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
		const guild = await gS.findOne({ id: message.channel.guild.id });
		const lang = guild.lang;

		// English
		if (lang === 'English' || lang === 'english') {
			return English1(client, message, args, lang);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			return Spanish1(client, message, args, lang);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			return German1(client, message, args, lang);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			return French1(client, message, args, lang);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			return Nor1(client, message, args, lang);
		}
	},
};

// English
async function English1(client, message, args, lang) {
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setDescription(english.supportCmd, true);
	message.channel.send(embed);
}

// Spanish
async function Spanish1(client, message, args, lang) {
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setDescription(spanish.supportCmd, true);
	message.channel.send(embed);
}

// German
async function German1(client, message, args, lang) {
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setDescription(german.supportCmd, true);
	message.channel.send(embed);
}

// French
async function French1(client, message, args, lang) {
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setDescription(french.supportCmd, true);
	message.channel.send(embed);
}

// Norwegian
async function Nor1(client, message, args, lang) {
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setDescription(nor.supportCmd, true);
	message.channel.send(embed);
}