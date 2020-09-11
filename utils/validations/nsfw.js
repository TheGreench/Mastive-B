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
	async NSFW(message) {
		const guild = await gS.findOne({ id: message.channel.guild.id });
		const lang = guild.lang;
		// English
		if (lang === 'English' || lang === 'english') {
			const embed1 = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(english.cmdNsfw.notNsfw);
			return message.channel.send(embed1);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			const embed1 = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(spanish.cmdNsfw.notNsfw);
			return message.channel.send(embed1);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			const embed1 = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(german.cmdNsfw.notNsfw);
			return message.channel.send(embed1);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			const embed1 = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(french.cmdNsfw.notNsfw);
			return message.channel.send(embed1);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			const embed1 = new MessageEmbed()
				.setColor(colors.red_dark)
				.setDescription(nor.cmdNsfw.notNsfw);
			return message.channel.send(embed1);
		}
	},
};