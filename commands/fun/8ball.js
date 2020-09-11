/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');

module.exports = {
	name: '8ball',
	category: 'fun',
	// aliases: [''],
	// Descriptions
	image: 'https://i.imgur.com/QInQMNO.png',
	description: english.cmdDescriptions,
	descriptionS: spanish.cmdDescriptions,
	descriptionG: german.cmdDescriptions,
	descriptionF: french.cmdDescriptions,
	descriptionN: nor.cmdDescriptions,
	// Usage
	usage: '8ball [QUESTION]',
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
		const prefix = guild.prefix;
		const lang = guild.lang;
		const modeR = guild.modRole;
		const adminR = guild.adminRole;
		const logsC = guild.logsChannel;

		// English
		if (lang === 'English' || lang === 'english') {
			return English1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			return Spanish1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			return German1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			return French1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			return Nor1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
	},
};

// English
async function English1(client, message, args, lang, prefix, modeR, adminR, logsC) {
	if(!args[0]) {
		message.reply(english.ballRandomCmd.ask);
	}
	else {
		const eightball = english.ballRandomCmd.eightball;
		const index = (Math.floor(Math.random() * Math.floor(eightball.length)));
		message.channel.send(`**${eightball[index]}**`);
	}
}

// Spanish
async function Spanish1(client, message, args, lang, prefix, modeR, adminR, logsC) {
	if(!args[0]) {
		message.reply(spanish.ballRandomCmd.ask);
	}
	else {
		const eightball = spanish.ballRandomCmd.eightball;
		const index = (Math.floor(Math.random() * Math.floor(eightball.length)));
		message.channel.send(`**${eightball[index]}**`);
	}
}

// German
async function German1(client, message, args, lang, prefix, modeR, adminR, logsC) {
	if(!args[0]) {
		message.reply(german.ballRandomCmd.ask);
	}
	else {
		const eightball = german.ballRandomCmd.eightball;
		const index = (Math.floor(Math.random() * Math.floor(eightball.length)));
		message.channel.send(`**${eightball[index]}**`);
	}
}

// French
async function French1(client, message, args, lang, prefix, modeR, adminR, logsC) {
	if(!args[0]) {
		message.reply(german.ballRandomCmd.ask);
	}
	else {
		const eightball = german.ballRandomCmd.eightball;
		const index = (Math.floor(Math.random() * Math.floor(eightball.length)));
		message.channel.send(`**${eightball[index]}**`);
	}
}

// Norwegian
async function Nor1(client, message, args, lang, prefix, modeR, adminR, logsC) {
	if(!args[0]) {
		message.reply(german.ballRandomCmd.ask);
	}
	else {
		const eightball = german.ballRandomCmd.eightball;
		const index = (Math.floor(Math.random() * Math.floor(eightball.length)));
		message.channel.send(`**${eightball[index]}**`);
	}
}