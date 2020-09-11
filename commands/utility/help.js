/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');

module.exports = {
	name: 'help',
	category: 'utility',
	aliases: ['h', 'cmds', 'commands'],
	// Descriptions
	image: 'https://i.imgur.com/4e5DL9y.png',
	description: english.cmdDescriptions.utility.help,
	descriptionS: spanish.cmdDescriptions.utility.help,
	descriptionG: german.cmdDescriptions.utility.help,
	descriptionF: french.cmdDescriptions.utility.help,
	descriptionN: nor.cmdDescriptions.utility.help,
	usage: 'help || help Command_Name',
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

		if (args[0]) {
			return getCMD(client, message, args[0], lang);
		}
		else {
			return getAll(client, message, lang);
		}
	},
};

async function getAll(client, message, lang) {
	try {
		if (lang === 'English' || lang === 'english') {
			const embed = new MessageEmbed()
				.setColor('#0C78D7')
				.setTitle(english.helpCmd.title)
				.setDescription(english.helpCmd.description)
				.addField(english.helpCmd.links1, english.helpCmd.links2, true)
				.setTimestamp()
				.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X');
			const commands = (category) => {
				return client.commands
					.filter(cmd => cmd.category === category)
					.map(cmd => `\`${cmd.name}\``)
					.join(', ');
			};
			const info = client.categories
				.map(cat => stripIndents`◽️ ${cat[0].toUpperCase() + cat.slice(1)} \n${commands(cat)}`)
				.reduce((string, category) => string + '\n' + category);
			return message.channel.send(embed.addField('Commands:', info));
		}
		if (lang === 'Spanish' || lang === 'spanish') {
			const embed = new MessageEmbed()
				.setColor('#0C78D7')
				.setTitle(spanish.helpCmd.title)
				.setDescription(spanish.helpCmd.description)
				.addField(spanish.helpCmd.links1, spanish.helpCmd.links2, true)
				.setTimestamp()
				.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X');
			const commands = (category) => {
				return client.commands
					.filter(cmd => cmd.category === category)
					.map(cmd => `\`${cmd.name}\``)
					.join(', ');
			};
			const info = client.categories
				.map(cat => stripIndents`◽️ ${cat[0].toUpperCase() + cat.slice(1)} \n${commands(cat)}`)
				.reduce((string, category) => string + '\n' + category);

			return message.channel.send(embed.addField('Commandos:', info));
		}
		if (lang === 'German' || lang === 'german') {
			const embed = new MessageEmbed()
				.setColor('#0C78D7')
				.setTitle(german.helpCmd.title)
				.setDescription(german.helpCmd.description)
				.addField(german.helpCmd.links1, german.helpCmd.links2, true)
				.setTimestamp()
				.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X');
			const commands = (category) => {
				return client.commands
					.filter(cmd => cmd.category === category)
					.map(cmd => `\`${cmd.name}\``)
					.join(', ');
			};
			const info = client.categories
				.map(cat => stripIndents`◽️ ${cat[0].toUpperCase() + cat.slice(1)} \n${commands(cat)}`)
				.reduce((string, category) => string + '\n' + category);

			return message.channel.send(embed.addField('Befehls:', info));
		}
		if (lang === 'French' || lang === 'french') {
			const embed = new MessageEmbed()
				.setColor('#0C78D7')
				.setTitle(french.helpCmd.title)
				.setDescription(french.helpCmd.description)
				.addField(french.helpCmd.links1, french.helpCmd.links2, true)
				.setTimestamp()
				.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X');
			const commands = (category) => {
				return client.commands
					.filter(cmd => cmd.category === category)
					.map(cmd => `\`${cmd.name}\``)
					.join(', ');
			};
			const info = client.categories
				.map(cat => stripIndents`◽️ ${cat[0].toUpperCase() + cat.slice(1)} \n${commands(cat)}`)
				.reduce((string, category) => string + '\n' + category);

			return message.channel.send(embed.addField('Befehls:', info));
		}
		if (lang === 'Norwegian' || lang === 'norwegian') {
			const embed = new MessageEmbed()
				.setColor('#0C78D7')
				.setTitle(nor.helpCmd.title)
				.setDescription(nor.helpCmd.description)
				.addField(nor.helpCmd.links1, nor.helpCmd.links2, true)
				.setTimestamp()
				.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X');
			const commands = (category) => {
				return client.commands
					.filter(cmd => cmd.category === category)
					.map(cmd => `\`${cmd.name}\``)
					.join(', ');
			};
			const info = client.categories
				.map(cat => stripIndents`◽️ ${cat[0].toUpperCase() + cat.slice(1)} \n${commands(cat)}`)
				.reduce((string, category) => string + '\n' + category);

			return message.channel.send(embed.addField('Kommando:', info));
		}

	}
	catch (err) {
		console.log(err);
	}
}

async function getCMD(client, message, input, lang) {
	try {

		if (lang === 'English' || lang === 'english') {
			const embed = new MessageEmbed();
			const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
			let info = english.helpCmd.infoError + ` ***${input.toLowerCase()}***, please run: \`*help\``;
			if (!cmd) {
				return message.channel.send(info);
			}
			if (cmd.name) info = english.helpCmd.extraTitle1 + ` ${cmd.name}`;
			if (cmd.aliases) info += '\n' + english.helpCmd.extraAliases1 + ` ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`; else info += '\n' + english.helpCmd.extraAliases1 + ' ' + english.helpCmd.extraAliases2;
			if (cmd.description) info += '\n' + english.helpCmd.extraDesc1 + ` ${cmd.description}`; else info += '\n' + english.helpCmd.extraDesc1 + ' ' + english.helpCmd.extraDesc2;
			if (cmd.usage) info += '\n' + english.helpCmd.extraUsage1 + ` ${cmd.usage}`; else info += '\n' + english.helpCmd.extraUsage1 + ' ' + english.helpCmd.extraUsage2;
			if (cmd.status) info += '\n' + english.helpCmd.extraStatus1 + ` ${cmd.status}`; else info += '\n' + english.helpCmd.extraStatus1 + ' ' + english.helpCmd.extraStatus2;
			if (cmd.permissions) info += '\n' + english.helpCmd.extraPerms1 + ` ${cmd.permissions}`; else info += '\n' + english.helpCmd.extraPerms1 + ' ' + english.helpCmd.extraPerms2;
			if (cmd.translated) info += '\n' + english.helpCmd.extraTranslated1 + ` ${cmd.translated}`; else info += '\n' + english.helpCmd.extraTranslated1 + ' ' + english.cmdTranslated.no;

			return message.channel.send(
				embed
					.setTitle(english.helpCmd.extraTitle0 + ' > ' + cmd.name.toUpperCase())
					.setThumbnail(cmd.image)
					.setColor('#2C2F33')
					.setDescription(info)
					.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X')
					.setTimestamp(),
			);
		}
		if (lang === 'Spanish' || lang === 'spanish') {
			const embed = new MessageEmbed();
			const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
			let info = spanish.helpCmd.infoError + ` ***${input.toLowerCase()}***, please run: \`*help\``;
			if (!cmd) {
				return message.channel.send(info);
			}
			if (cmd.name) info = spanish.helpCmd.extraTitle1 + ` ${cmd.name}`;
			if (cmd.aliases) info += '\n' + spanish.helpCmd.extraAliases1 + ` ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`; else info += '\n' + spanish.helpCmd.extraAliases1 + ' ' + spanish.helpCmd.extraAliases2;
			if (cmd.descriptionS) info += '\n' + spanish.helpCmd.extraDesc1 + ` ${cmd.descriptionS}`; else info += '\n' + spanish.helpCmd.extraDesc1 + ' ' + spanish.helpCmd.extraDesc2;
			if (cmd.usage) info += '\n' + spanish.helpCmd.extraUsage1 + ` ${cmd.usage}`; else info += '\n' + spanish.helpCmd.extraUsage1 + ' ' + spanish.helpCmd.extraUsage2;
			if (cmd.statusS) info += '\n' + spanish.helpCmd.extraStatus1 + ` ${cmd.statusS}`; else info += '\n' + spanish.helpCmd.extraStatus1 + ' ' + spanish.helpCmd.extraStatus2;
			if (cmd.permissions) info += '\n' + spanish.helpCmd.extraPerms1 + ` ${cmd.permissions}`; else info += '\n' + spanish.helpCmd.extraPerms1 + ' ' + spanish.helpCmd.extraPerms2;
			if (cmd.translatedS) info += '\n' + spanish.helpCmd.extraTranslated1 + ` ${cmd.translatedS}`; else info += '\n' + spanish.helpCmd.extraTranslated1 + ' ' + spanish.cmdTranslated.no;

			return message.channel.send(
				embed
					.setTitle(english.helpCmd.extraTitle0 + ' > ' + cmd.name.toUpperCase())
					.setThumbnail(cmd.image)
					.setColor('#2C2F33')
					.setDescription(info)
					.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X')
					.setTimestamp(),
			);
		}
		if (lang === 'German' || lang === 'german') {
			const embed = new MessageEmbed();
			const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
			let info = german.helpCmd.infoError + ` ***${input.toLowerCase()}***, please run: \`*help\``;
			if (!cmd) {
				return message.channel.send(info);
			}
			if (cmd.name) info = german.helpCmd.extraTitle1 + ` ${cmd.name}`;
			if (cmd.aliases) info += '\n' + german.helpCmd.extraAliases1 + ` ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`; else info += '\n' + german.helpCmd.extraAliases1 + ' ' + german.helpCmd.extraAliases2;
			if (cmd.descriptionG) info += '\n' + german.helpCmd.extraDesc1 + ` ${cmd.descriptionG}`; else info += '\n' + german.helpCmd.extraDesc1 + ' ' + german.helpCmd.extraDesc2;
			if (cmd.usage) info += '\n' + german.helpCmd.extraUsage1 + ` ${cmd.usage}`; else info += '\n' + german.helpCmd.extraUsage1 + ' ' + german.helpCmd.extraUsage2;
			if (cmd.statusG) info += '\n' + german.helpCmd.extraStatus1 + ` ${cmd.statusG}`; else info += '\n' + german.helpCmd.extraStatus1 + ' ' + german.helpCmd.extraStatus2;
			if (cmd.permissions) info += '\n' + german.helpCmd.extraPerms1 + ` ${cmd.permissions}`; else info += '\n' + german.helpCmd.extraPerms1 + ' ' + german.helpCmd.extraPerms2;
			if (cmd.translatedG) info += '\n' + german.helpCmd.extraTranslated1 + ` ${cmd.translatedG}`; else info += '\n' + german.helpCmd.extraTranslated1 + ' ' + german.cmdTranslated.no;

			return message.channel.send(
				embed
					.setTitle(english.helpCmd.extraTitle0 + ' > ' + cmd.name.toUpperCase())
					.setThumbnail(cmd.image)
					.setColor('#2C2F33')
					.setDescription(info)
					.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X')
					.setTimestamp(),
			);
		}
		if (lang === 'French' || lang === 'french') {
			const embed = new MessageEmbed();
			const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
			let info = french.helpCmd.infoError + ` ***${input.toLowerCase()}***, please run: \`*help\``;
			if (!cmd) {
				return message.channel.send(info);
			}
			if (cmd.name) info = french.helpCmd.extraTitle1 + ` ${cmd.name}`;
			if (cmd.aliases) info += '\n' + french.helpCmd.extraAliases1 + ` ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`; else info += '\n' + french.helpCmd.extraAliases1 + ' ' + french.helpCmd.extraAliases2;
			if (cmd.descriptionF) info += '\n' + french.helpCmd.extraDesc1 + ` ${cmd.descriptionF}`; else info += '\n' + french.helpCmd.extraDesc1 + ' ' + french.helpCmd.extraDesc2;
			if (cmd.usage) info += '\n' + french.helpCmd.extraUsage1 + ` ${cmd.usage}`; else info += '\n' + french.helpCmd.extraUsage1 + ' ' + french.helpCmd.extraUsage2;
			if (cmd.statusF) info += '\n' + french.helpCmd.extraStatus1 + ` ${cmd.statusF}`; else info += '\n' + french.helpCmd.extraStatus1 + ' ' + french.helpCmd.extraStatus2;
			if (cmd.permissions) info += '\n' + french.helpCmd.extraPerms1 + ` ${cmd.permissions}`; else info += '\n' + french.helpCmd.extraPerms1 + ' ' + french.helpCmd.extraPerms2;
			if (cmd.translatedF) info += '\n' + french.helpCmd.extraTranslated1 + ` ${cmd.translatedF}`; else info += '\n' + french.helpCmd.extraTranslated1 + ' ' + french.cmdTranslated.no;

			return message.channel.send(
				embed
					.setTitle(english.helpCmd.extraTitle0 + ' > ' + cmd.name.toUpperCase())
					.setThumbnail(cmd.image)
					.setColor('#2C2F33')
					.setDescription(info)
					.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X')
					.setTimestamp(),
			);
		}
		if (lang === 'Norwegian' || lang === 'norwegian') {
			const embed = new MessageEmbed();
			const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
			let info = nor.helpCmd.infoError + ` ***${input.toLowerCase()}***, please run: \`*help\``;
			if (!cmd) {
				return message.channel.send(info);
			}
			if (cmd.name) info = nor.helpCmd.extraTitle1 + ` ${cmd.name}`;
			if (cmd.aliases) info += '\n' + nor.helpCmd.extraAliases1 + ` ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`; else info += '\n' + nor.helpCmd.extraAliases1 + ' ' + nor.helpCmd.extraAliases2;
			if (cmd.descriptionN) info += '\n' + nor.helpCmd.extraDesc1 + ` ${cmd.descriptionN}`; else info += '\n' + nor.helpCmd.extraDesc1 + ' ' + nor.helpCmd.extraDesc2;
			if (cmd.usage) info += '\n' + nor.helpCmd.extraUsage1 + ` ${cmd.usage}`; else info += '\n' + nor.helpCmd.extraUsage1 + ' ' + nor.helpCmd.extraUsage2;
			if (cmd.statusN) info += '\n' + nor.helpCmd.extraStatus1 + ` ${cmd.status}`; else info += '\n' + nor.helpCmd.extraStatus1 + ' ' + nor.helpCmd.extraStatus2;
			if (cmd.permissions) info += '\n' + nor.helpCmd.extraPerms1 + ` ${cmd.permissionsN}`; else info += '\n' + nor.helpCmd.extraPerms1 + ' ' + nor.helpCmd.extraPerms2;
			if (cmd.translatedN) info += '\n' + nor.helpCmd.extraTranslated1 + ` ${cmd.translatedN}`; else info += '\n' + nor.helpCmd.extraTranslated1 + ' ' + nor.cmdTranslated.no;

			return message.channel.send(
				embed
					.setTitle(english.helpCmd.extraTitle0 + ' > ' + cmd.name.toUpperCase())
					.setThumbnail(cmd.image)
					.setColor('#2C2F33')
					.setDescription(info)
					.setFooter('© Mastive - TheGreench#5074 - discord.gg/rzEDr3X')
					.setTimestamp(),
			);
		}

	}
	catch (err) {
		console.log(err);
	}
}