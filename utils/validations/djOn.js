/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild');
const colors = require('../../json/colours.json');

module.exports = {
	async DJ(message) {
		const guild = await gS.findOne({ id: message.channel.guild.id });
		const lang = guild.lang;

		// English
		if (lang === 'English' || lang === 'english') {
			const embed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(english.cmdMusic.djOn);
			message.channel.send(embed);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			const embed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(spanish.cmdMusic.djOn);
			message.channel.send(embed);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			const embed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(german.cmdMusic.djOn);
			message.channel.send(embed);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			const embed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(french.cmdMusic.djOn);
			message.channel.send(embed);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			const embed = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(nor.cmdMusic.djOn);
			message.channel.send(embed);
		}
	},
};