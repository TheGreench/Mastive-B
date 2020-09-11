/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');
const colors = require('../../json/colours.json');
const nsfwVal = require('../../utils/validations/nsfw.js');

module.exports = {
	name: 'anal',
	category: 'nsfw',
	// aliases: [''],
	// Descriptions
	image: 'https://i.imgur.com/2K8ITpi.png',
	/* description: english.cmdDescriptions,
	descriptionS: spanish.cmdDescriptions,
	descriptionG: german.cmdDescriptions,
	descriptionF: french.cmdDescriptions,
	descriptionN: nor.cmdDescriptions, */
	// Usage
	usage: 'anal',
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
	permissions: 'NSFW',
	run: async (client, message, args)=> {
		const guild = await gS.findOne({ id: message.channel.guild.id });
		const prefix = guild.prefix;
		const lang = guild.lang;
		const modeR = guild.modRole;
		const adminR = guild.adminRole;
		const logsC = guild.logsChannel;

		if (message.channel.nsfw !== true) {
			try {
				return nsfwVal.NSFW(message);
			}
			catch(error) {
				console.log(error);
			}
		}
		else {
			superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal' }).end((err, response) => {
				const embed_nsfw = new MessageEmbed()
					.setDescription(`[Anal - NSFW](${response.body.message})`)
					.setTimestamp()
					.setColor(colors.noColor)
					.setImage(response.body.message);
				message.channel.send(embed_nsfw);
			});
		}
	},
};
