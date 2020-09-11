/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');

module.exports = {
	name: 'config',
	category: 'administration',
	aliases: ['seeconfig', 'settings'],
	// Descriptions
	image: 'https://i.imgur.com/yN6ffoV.png',
	description: english.cmdDescriptions.administration.config,
	descriptionS: spanish.cmdDescriptions.administration.config,
	descriptionG: german.cmdDescriptions.administration.config,
	descriptionF: french.cmdDescriptions.administration.config,
	descriptionN: nor.cmdDescriptions.administration.config,
	// Usage
	usage: 'config',
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
	// eslint-disable-next-line no-unused-vars
	run: async (client, message, args)=> {
		const guild = await gS.findOne({ id: message.channel.guild.id });
		const prefix = guild.prefix;
		const lang = guild.lang;
		const modeR = guild.modRole;
		const adminR = guild.adminRole;
		const logsC = guild.logsChannel;
		const dj = guild.djRole;
		const roleDj = guild.roleDj;

		// English
		if (lang === 'English' || lang === 'english') {
			return English1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			return Spanish1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			return German1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			return French1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			return Nor1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj);
		}
	},
};

// English
async function English1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj) {
	message.channel.send(english.configCmd.response1);
	const embed = new MessageEmbed()
		.setTitle(message.guild.name)
		.setColor('#0C78D7')
		.setDescription(`
        ${english.configCmd.embedDesc1} \`${message.guild.id}\`
        ${english.configCmd.embedDesc2} \`${lang}\`
        ${english.configCmd.embedDesc3} \`${prefix}\` and <@${client.user.id}>
        ${english.configCmd.embedDesc4} \`${dj}\`
        ${english.configCmd.embedDesc5} \`${roleDj}\`
        ${english.configCmd.embedDesc6} \`${modeR}\`
        ${english.configCmd.embedDesc7} \`${adminR}\`
		${english.configCmd.embedDesc8} \`${logsC}\`
		`)
		.setTimestamp()
		.setFooter('© Mastive - TheGreench#5074');
	message.channel.send(embed);
}

// Spanish
async function Spanish1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj) {
	message.channel.send(spanish.configCmd.response1);
	const embed = new MessageEmbed()
		.setTitle(message.guild.name)
		.setColor('#0C78D7')
		.setDescription(`
        ${spanish.configCmd.embedDesc1} \`${message.guild.id}\`
        ${spanish.configCmd.embedDesc2} \`${lang}\`
        ${spanish.configCmd.embedDesc3} \`${prefix}\` and <@${client.user.id}>
        ${spanish.configCmd.embedDesc4} \`${dj}\`
        ${spanish.configCmd.embedDesc5} \`${roleDj}\`
        ${spanish.configCmd.embedDesc6} \`${modeR}\`
        ${spanish.configCmd.embedDesc7} \`${adminR}\`
		${spanish.configCmd.embedDesc8} \`${logsC}\`
		`)
		.setTimestamp()
		.setFooter('© Mastive - TheGreench#5074');
	message.channel.send(embed);
}

// German
async function German1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj) {
	message.channel.send(german.configCmd.response1);
	const embed = new MessageEmbed()
		.setTitle(message.guild.name)
		.setColor('#0C78D7')
		.setDescription(`
        ${german.configCmd.embedDesc1} \`${message.guild.id}\`
        ${german.configCmd.embedDesc2} \`${lang}\`
        ${german.configCmd.embedDesc3} \`${prefix}\` and <@${client.user.id}>
        ${german.configCmd.embedDesc4} \`${dj}\`
        ${german.configCmd.embedDesc5} \`${roleDj}\`
        ${german.configCmd.embedDesc6} \`${modeR}\`
        ${german.configCmd.embedDesc7} \`${adminR}\`
		${german.configCmd.embedDesc8} \`${logsC}\`
		`)
		.setTimestamp()
		.setFooter('© Mastive - TheGreench#5074');
	message.channel.send(embed);
}

// French
async function French1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj) {
	message.channel.send(french.configCmd.response1);
	const embed = new MessageEmbed()
		.setTitle(message.guild.name)
		.setColor('#0C78D7')
		.setDescription(`
        ${french.configCmd.embedDesc1} \`${message.guild.id}\`
        ${french.configCmd.embedDesc2} \`${lang}\`
        ${french.configCmd.embedDesc3} \`${prefix}\` and <@${client.user.id}>
        ${french.configCmd.embedDesc4} \`${dj}\`
        ${french.configCmd.embedDesc5} \`${roleDj}\`
        ${french.configCmd.embedDesc6} \`${modeR}\`
        ${french.configCmd.embedDesc7} \`${adminR}\`
		${french.configCmd.embedDesc8} \`${logsC}\`
		`)
		.setTimestamp()
		.setFooter('© Mastive - TheGreench#5074');
	message.channel.send(embed);
}

// Norwegian
async function Nor1(client, message, lang, prefix, modeR, adminR, logsC, dj, roleDj) {
	message.channel.send(nor.configCmd.response1);
	const embed = new MessageEmbed()
		.setTitle(message.guild.name)
		.setColor('#0C78D7')
		.setDescription(`
        ${nor.configCmd.embedDesc1} \`${message.guild.id}\`
        ${nor.configCmd.embedDesc2} \`${lang}\`
        ${nor.configCmd.embedDesc3} \`${prefix}\` and <@${client.user.id}>
        ${nor.configCmd.embedDesc4} \`${dj}\`
        ${nor.configCmd.embedDesc5} \`${roleDj}\`
        ${nor.configCmd.embedDesc6} \`${modeR}\`
        ${nor.configCmd.embedDesc7} \`${adminR}\`
		${nor.configCmd.embedDesc8} \`${logsC}\`
		`)
		.setTimestamp()
		.setFooter('© Mastive - TheGreench#5074');
	message.channel.send(embed);
}