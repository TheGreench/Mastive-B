/* eslint-disable no-shadow */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');
const colors = require('../../json/colours.json');

module.exports = {
	name: 'panda',
	category: 'images',
	// aliases: [''],
	// Descriptions
	image: 'https://i.imgur.com/NNOBeqR.png',
	description: english.cmdDescriptions.imgs.panda,
	descriptionS: spanish.cmdDescriptions.imgs.panda,
	descriptionG: german.cmdDescriptions.imgs.panda,
	descriptionF: french.cmdDescriptions.imgs.panda,
	descriptionN: nor.cmdDescriptions.imgs.panda,
	// Usage
	usage: 'panda || panda fact',
	// Status
	status: english.cmdStatus.working,
	statusS: spanish.cmdStatus.working,
	statusG: german.cmdStatus.working,
	statusF: french.cmdStatus.working,
	statusN: nor.cmdStatus.working,
	// Translated
	translated: english.cmdTranslated.no,
	translatedS: spanish.cmdTranslated.no,
	translatedG: german.cmdTranslated.no,
	translatedF: french.cmdTranslated.no,
	translatedN: nor.cmdTranslated.no,
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
			return English1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			return English1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			return English1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			return English1(client, message, args, lang, prefix, modeR, adminR, logsC);
		}
	},
};

// English
async function English1(client, message, args, lang, prefix, modeR, adminR, logsC) {
	async function getPanda() {
		const r = await fetch('https://some-random-api.ml/img/panda');
		r.json().then((e) => {
			message.channel.send({
				embed: {
					title: ':panda_face:  Found one!',
					image: { url: e.link },
					color: colors.noColor,
				},
			});
		});
	}
	async function getfact() {
		const e = await fetch('https://some-random-api.ml/facts/panda');
		e.json().then((e) => {
			message.channel.send(`*${e.fact}*`);
		});
	}
	if (!args.length) getPanda();
	else if (args[0] === 'fact') getfact();
	else getPanda();

}