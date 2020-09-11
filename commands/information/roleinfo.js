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
	name: 'roleinfo',
	category: 'information',
	aliases: ['rinfo', 'roleinformation', 'rinformation'],
	// Descriptions
	image: 'https://i.imgur.com/iGvcRQw.png',
	description: english.cmdDescriptions.infomation.roleinfo,
	descriptionS: spanish.cmdDescriptions.infomation.roleinfo,
	descriptionG: german.cmdDescriptions.infomation.roleinfo,
	descriptionF: french.cmdDescriptions.infomation.roleinfo,
	descriptionN: nor.cmdDescriptions.infomation.roleinfo,
	// Usage
	usage: 'roleinfo [ROLE_NAME]',
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

		const roleName = args.join(' ');
		const day = message.guild.createdAt.getDate();
		const month = 1 + message.guild.createdAt.getMonth();
		const year = message.guild.createdAt.getFullYear();
		const role = message.guild.roles.cache.find((r) => r.name.toLowerCase() == roleName.toLowerCase()) ||
			message.guild.roles.cache.find((e) => e.id === args[0]) ||
			message.guild.roles.cache.find((e) => e.mentions === args[0]);

		// English
		if (lang === 'English' || lang === 'english') {
			return English1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			return Spanish1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			return German1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			return French1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			return Nor1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role);
		}
	},
};

// English
async function English1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role) {
	const haveRole = message.guild.members.cache.filter(m => m.roles.cache.get(role)).size;
	const embed2 = new MessageEmbed()
		.setColor(colors.red_dark)
		.setDescription(english.roleinfoCmd.noRole);
	if (!role) return message.channel.send(embed2);
	if (!args[0]) return message.channel.send(embed2);
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setTitle(english.roleinfoCmd.title + role.name)
		.setDescription('<@&' + role.id + '>')
		.addField(english.roleinfoCmd.field1, role.name, true)
		.addField(english.roleinfoCmd.field2, role.id, true)
		.addField(english.roleinfoCmd.field3, role.hexColor, true)
		.addField(english.roleinfoCmd.field4, role.position, true)
		.addField(english.roleinfoCmd.field5, new Date(role.createdAt).toISOString().slice(0, 19).replace(/-/g, '/').replace(/T/g, ' '), true)
		.addField(english.roleinfoCmd.field6, `${english.roleinfoCmd.field6a} ${haveRole} ${english.roleinfoCmd.field6b}`, true)
		.addField(english.roleinfoCmd.field7, `${role.hoist}`, true)
		.addField(english.roleinfoCmd.field8, `${role.managed}`, true)
		.addField(english.roleinfoCmd.field9, `${role.mentionable}`, true)
		.setFooter(`${english.roleinfoCmd.footer} ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(embed);
}

// Spanish
async function Spanish1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role) {
	const haveRole = message.guild.members.cache.filter(m => m.roles.cache.get(role)).size;
	const embed2 = new MessageEmbed()
		.setColor(colors.red_dark)
		.setDescription(spanish.roleinfoCmd.noRole);
	if (!role) return message.channel.send(embed2);
	if (!args[0]) return message.channel.send(embed2);
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setTitle(spanish.roleinfoCmd.title + role.name)
		.setDescription('<@&' + role.id + '>')
		.addField(spanish.roleinfoCmd.field1, role.name, true)
		.addField(spanish.roleinfoCmd.field2, role.id, true)
		.addField(spanish.roleinfoCmd.field3, role.hexColor, true)
		.addField(spanish.roleinfoCmd.field4, role.position, true)
		.addField(spanish.roleinfoCmd.field5, new Date(role.createdAt).toISOString().slice(0, 19).replace(/-/g, '/').replace(/T/g, ' '), true)
		.addField(spanish.roleinfoCmd.field6, `${spanish.roleinfoCmd.field6a} ${haveRole} ${spanish.roleinfoCmd.field6b}`, true)
		.addField(spanish.roleinfoCmd.field7, `${role.hoist}`, true)
		.addField(spanish.roleinfoCmd.field8, `${role.managed}`, true)
		.addField(spanish.roleinfoCmd.field9, `${role.mentionable}`, true)
		.setFooter(`${spanish.roleinfoCmd.footer} ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(embed);
}

// German
async function German1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role) {
	const haveRole = message.guild.members.cache.filter(m => m.roles.cache.get(role)).size;
	const embed2 = new MessageEmbed()
		.setColor(colors.red_dark)
		.setDescription(german.roleinfoCmd.noRole);
	if (!role) return message.channel.send(embed2);
	if (!args[0]) return message.channel.send(embed2);
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setTitle(german.roleinfoCmd.title + role.name)
		.setDescription('<@&' + role.id + '>')
		.addField(german.roleinfoCmd.field1, role.name, true)
		.addField(german.roleinfoCmd.field2, role.id, true)
		.addField(german.roleinfoCmd.field3, role.hexColor, true)
		.addField(german.roleinfoCmd.field4, role.position, true)
		.addField(german.roleinfoCmd.field5, new Date(role.createdAt).toISOString().slice(0, 19).replace(/-/g, '/').replace(/T/g, ' '), true)
		.addField(german.roleinfoCmd.field6, `${german.roleinfoCmd.field6a} ${haveRole} ${german.roleinfoCmd.field6b}`, true)
		.addField(german.roleinfoCmd.field7, `${role.hoist}`, true)
		.addField(german.roleinfoCmd.field8, `${role.managed}`, true)
		.addField(german.roleinfoCmd.field9, `${role.mentionable}`, true)
		.setFooter(`${german.roleinfoCmd.footer} ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(embed);
}

// French
async function French1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role) {
	const haveRole = message.guild.members.cache.filter(m => m.roles.cache.get(role)).size;
	const embed2 = new MessageEmbed()
		.setColor(colors.red_dark)
		.setDescription(french.roleinfoCmd.noRole);
	if (!role) return message.channel.send(embed2);
	if (!args[0]) return message.channel.send(embed2);
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setTitle(french.roleinfoCmd.title + role.name)
		.setDescription('<@&' + role.id + '>')
		.addField(french.roleinfoCmd.field1, role.name, true)
		.addField(french.roleinfoCmd.field2, role.id, true)
		.addField(french.roleinfoCmd.field3, role.hexColor, true)
		.addField(french.roleinfoCmd.field4, role.position, true)
		.addField(french.roleinfoCmd.field5, new Date(role.createdAt).toISOString().slice(0, 19).replace(/-/g, '/').replace(/T/g, ' '), true)
		.addField(french.roleinfoCmd.field6, `${french.roleinfoCmd.field6a} ${haveRole} ${french.roleinfoCmd.field6b}`, true)
		.addField(french.roleinfoCmd.field7, `${role.hoist}`, true)
		.addField(french.roleinfoCmd.field8, `${role.managed}`, true)
		.addField(french.roleinfoCmd.field9, `${role.mentionable}`, true)
		.setFooter(`${french.roleinfoCmd.footer} ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(embed);
}

// Norwegian
async function Nor1(client, message, args, lang, prefix, modeR, adminR, logsC, day, month, year, role) {
	const haveRole = message.guild.members.cache.filter(m => m.roles.cache.get(role)).size;
	const embed2 = new MessageEmbed()
		.setColor(colors.red_dark)
		.setDescription(nor.roleinfoCmd.noRole);
	if (!role) return message.channel.send(embed2);
	if (!args[0]) return message.channel.send(embed2);
	const embed = new MessageEmbed()
		.setColor(colors.blue_dark)
		.setTitle(nor.roleinfoCmd.title + role.name)
		.setDescription('<@&' + role.id + '>')
		.addField(nor.roleinfoCmd.field1, role.name, true)
		.addField(nor.roleinfoCmd.field2, role.id, true)
		.addField(nor.roleinfoCmd.field3, role.hexColor, true)
		.addField(nor.roleinfoCmd.field4, role.position, true)
		.addField(nor.roleinfoCmd.field5, new Date(role.createdAt).toISOString().slice(0, 19).replace(/-/g, '/').replace(/T/g, ' '), true)
		.addField(nor.roleinfoCmd.field6, `${nor.roleinfoCmd.field6a} ${haveRole} ${nor.roleinfoCmd.field6b}`, true)
		.addField(nor.roleinfoCmd.field7, `${role.hoist}`, true)
		.addField(nor.roleinfoCmd.field8, `${role.managed}`, true)
		.addField(nor.roleinfoCmd.field9, `${role.mentionable}`, true)
		.setFooter(`${nor.roleinfoCmd.footer} ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(embed);
}