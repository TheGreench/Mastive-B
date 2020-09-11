/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const colors = require('../../json/colours.json');

module.exports = {
	name: 'avatar',
	category: 'utility',
	aliases: ['user-icon', 'uicon', 'uavatar', 'get-icon-user'],
	// Descriptions
	image: 'https://i.imgur.com/IGbhAzc.png',
	description: english.cmdDescriptions.utility.avatar,
	descriptionS: spanish.cmdDescriptions.utility.avatar,
	descriptionG: german.cmdDescriptions.utility.avatar,
	descriptionF: french.cmdDescriptions.utility.avatar,
	descriptionN: nor.cmdDescriptions.utility.avatar,
	// Usage
	usage: 'avatar [@user] || avatar',
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
		const user = message.mentions.users.first() || message.author;
		const embed = new MessageEmbed()
			.setTitle(`${user.tag}'s Avatar`)
			.setColor(colors.noColor)
			.setImage(user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setTimestamp()
			.setFooter(message.author.username);
		message.channel.send(embed);
	},
};