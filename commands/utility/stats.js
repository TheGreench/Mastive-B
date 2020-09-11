/* eslint-disable no-unused-vars */
/* eslint-disable semi */
const { MessageEmbed, version } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const os = require('os');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');
const userS = require('../../models/DiscordUser.js');

module.exports = {
	name: 'stats',
	category: 'utility',
	aliases: ['botstats', 'bstats', 'mastiveS'],
	description: 'Shows useful stats of Mastive',
	descriptionS: 'Muestra estadísticas útiles de Mastive',
	descriptionG: 'Zeigt nützliche Statistiken von Mastive',
	descriptionF: 'Affiche les statistiques utiles de Mastive',
	usage: 'stats',
	image: 'https://i.imgur.com/VThO1cz.png',
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
			return English1(client, message, args);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			return Spanish1(client, message, args);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			return German1(client, message, args);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			return French1(client, message, args);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			return Nor1(client, message, args);
		}
	},
};

// English
async function English1(client, message, args) {
	const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
	const time = Date.now();
	const gbU = os.totalmem / 1000000000;
	const gbR = Math.round(gbU);

	const embed = new MessageEmbed()
		.setAuthor(english.statsCmd.embedTitle)
		.setColor('#7289DA')
	if (os.platform == 'win32') {
		embed.addField(english.statsCmd.embedField1, 'Windows', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024518761021460/Windows-Logo.png');
	}
	if (os.platform == 'linux') {
		embed.addField(english.statsCmd.embedField1, 'Linux', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024720733536277/LINUX-LOGO.png');
	}
	if (os.platform == 'darwin') {
		embed.addField(english.statsCmd.embedField1, 'Mac OS', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024928028491779/2000px-OS_X_El_Capitan_logo.png');
	}
	if(os.platform == null || undefined) {
		embed.addField(english.statsCmd.embedField1, 'OS is undefined', true);
	}
	embed.addField('Langauges(s)', '<:js:735042548770537522> JavaScript', true)
	embed.addField(english.statsCmd.embedField2, `${os.release()}`, true)
	// embed.addField('\u200B', '\u200B', true)
	embed.addField(english.statsCmd.embedField3, `${os.cpus().length}`, true)
	embed.addField(english.statsCmd.embedField4, `${os.cpus()[0].model}`)
	embed.addField(english.statsCmd.embedField5, `${os.arch}`, true)
	embed.addField(english.statsCmd.embedField6, `${gbR}GB`, true)
	embed.addField(english.statsCmd.embedField7, `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
	embed.addField(english.statsCmd.embedField8, `\`\`\`css${english.statsCmd.embedField9} ${duration}\nUsers: ${client.users.cache.size}${english.statsCmd.embedField9A} ${client.guilds.cache.size}${english.statsCmd.embedField9B} ${client.channels.cache.size}${english.statsCmd.embedField9C} ${client.commands.size}\`\`\``)
	embed.addField(english.statsCmd.embedField10, `v${version}`, true)
	embed.addField(english.statsCmd.embedField11, 'v3', true)
	embed.addField(english.statsCmd.embedField12, `${process.version}`, true)
	embed.addField(english.statsCmd.embedField13, client.user.id)
	embed.addField(english.statsCmd.embedField14, english.statsCmd.embedField14B)
	embed.setTimestamp()
	embed.setThumbnail(client.user.displayAvatarURL())
	embed.setFooter(`© Mastive - TheGreench#5074 - Time taken: ${Date.now() - time}ms`);
	message.channel.send(embed);
}

// Spanish
async function Spanish1(client, message, args) {
	const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
	const time = Date.now();
	const gbU = os.totalmem / 1000000000;
	const gbR = Math.round(gbU);

	const embed = new MessageEmbed()
		.setAuthor(spanish.statsCmd.embedTitle)
		.setColor('#7289DA')
	if (os.platform == 'win32') {
		embed.addField(spanish.statsCmd.embedField1, 'Windows', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024518761021460/Windows-Logo.png');
	}
	if (os.platform == 'linux') {
		embed.addField(spanish.statsCmd.embedField1, 'Linux', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024720733536277/LINUX-LOGO.png');
	}
	if (os.platform == 'darwin') {
		embed.addField(spanish.statsCmd.embedField1, 'Mac OS', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024928028491779/2000px-OS_X_El_Capitan_logo.png');
	}
	if(os.platform == null || undefined) {
		embed.addField(spanish.statsCmd.embedField1, 'OS is undefined', true);
	}
	embed.addField('Langauges(s)', '<:js:735042548770537522> JavaScript', true)
	embed.addField(spanish.statsCmd.embedField2, `${os.release()}`, true)
	// embed.addField('\u200B', '\u200B', true)
	embed.addField(spanish.statsCmd.embedField3, `${os.cpus().length}`, true)
	embed.addField(spanish.statsCmd.embedField4, `${os.cpus()[0].model}`)
	embed.addField(spanish.statsCmd.embedField5, `${os.arch}`, true)
	embed.addField(spanish.statsCmd.embedField6, `${gbR}GB`, true)
	embed.addField(spanish.statsCmd.embedField7, `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
	embed.addField(spanish.statsCmd.embedField8, `\`\`\`css${spanish.statsCmd.embedField9} ${duration}\nUsers: ${client.users.cache.size}${spanish.statsCmd.embedField9A} ${client.guilds.cache.size}${spanish.statsCmd.embedField9B} ${client.channels.cache.size}${spanish.statsCmd.embedField9C} ${client.commands.size}\`\`\``)
	embed.addField(spanish.statsCmd.embedField10, `v${version}`, true)
	embed.addField(spanish.statsCmd.embedField11, 'v3', true)
	embed.addField(spanish.statsCmd.embedField12, `${process.version}`, true)
	embed.addField(spanish.statsCmd.embedField13, client.user.id)
	embed.addField(spanish.statsCmd.embedField14, spanish.statsCmd.embedField14B)
	embed.setTimestamp()
	embed.setThumbnail(client.user.displayAvatarURL())
	embed.setFooter(`© Mastive - TheGreench#5074 - Time taken: ${Date.now() - time}ms`);
	message.channel.send(embed);
}

// German
async function German1(client, message, args) {
	const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
	const time = Date.now();
	const gbU = os.totalmem / 1000000000;
	const gbR = Math.round(gbU);

	const embed = new MessageEmbed()
		.setAuthor(german.statsCmd.embedTitle)
		.setColor('#7289DA')
	if (os.platform == 'win32') {
		embed.addField(german.statsCmd.embedField1, 'Windows', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024518761021460/Windows-Logo.png');
	}
	if (os.platform == 'linux') {
		embed.addField(german.statsCmd.embedField1, 'Linux', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024720733536277/LINUX-LOGO.png');
	}
	if (os.platform == 'darwin') {
		embed.addField(german.statsCmd.embedField1, 'Mac OS', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024928028491779/2000px-OS_X_El_Capitan_logo.png');
	}
	if(os.platform == null || undefined) {
		embed.addField(german.statsCmd.embedField1, 'OS is undefined', true);
	}
	embed.addField('Langauges(s)', '<:js:735042548770537522> JavaScript', true)
	embed.addField(german.statsCmd.embedField2, `${os.release()}`, true)
	// embed.addField('\u200B', '\u200B', true)
	embed.addField(german.statsCmd.embedField3, `${os.cpus().length}`, true)
	embed.addField(german.statsCmd.embedField4, `${os.cpus()[0].model}`)
	embed.addField(german.statsCmd.embedField5, `${os.arch}`, true)
	embed.addField(german.statsCmd.embedField6, `${gbR}GB`, true)
	embed.addField(german.statsCmd.embedField7, `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
	embed.addField(german.statsCmd.embedField8, `\`\`\`css${german.statsCmd.embedField9} ${duration}\nUsers: ${client.users.cache.size}${german.statsCmd.embedField9A} ${client.guilds.cache.size}${german.statsCmd.embedField9B} ${client.channels.cache.size}${german.statsCmd.embedField9C} ${client.commands.size}\`\`\``)
	embed.addField(german.statsCmd.embedField10, `v${version}`, true)
	embed.addField(german.statsCmd.embedField11, 'v3', true)
	embed.addField(german.statsCmd.embedField12, `${process.version}`, true)
	embed.addField(german.statsCmd.embedField13, client.user.id)
	embed.addField(german.statsCmd.embedField14, german.statsCmd.embedField14B)
	embed.setTimestamp()
	embed.setThumbnail(client.user.displayAvatarURL())
	embed.setFooter(`© Mastive - TheGreench#5074 - Time taken: ${Date.now() - time}ms`);
	message.channel.send(embed);
}

// French
async function French1(client, message, args) {
	const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
	const time = Date.now();
	const gbU = os.totalmem / 1000000000;
	const gbR = Math.round(gbU);

	const embed = new MessageEmbed()
		.setAuthor(french.statsCmd.embedTitle)
		.setColor('#7289DA')
	if (os.platform == 'win32') {
		embed.addField(french.statsCmd.embedField1, 'Windows', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024518761021460/Windows-Logo.png');
	}
	if (os.platform == 'linux') {
		embed.addField(french.statsCmd.embedField1, 'Linux', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024720733536277/LINUX-LOGO.png');
	}
	if (os.platform == 'darwin') {
		embed.addField(french.statsCmd.embedField1, 'Mac OS', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024928028491779/2000px-OS_X_El_Capitan_logo.png');
	}
	if(os.platform == null || undefined) {
		embed.addField(french.statsCmd.embedField1, 'OS is undefined', true);
	}
	embed.addField('Langauges(s)', '<:js:735042548770537522> JavaScript', true)
	embed.addField(french.statsCmd.embedField2, `${os.release()}`, true)
	// embed.addField('\u200B', '\u200B', true)
	embed.addField(french.statsCmd.embedField3, `${os.cpus().length}`, true)
	embed.addField(french.statsCmd.embedField4, `${os.cpus()[0].model}`)
	embed.addField(french.statsCmd.embedField5, `${os.arch}`, true)
	embed.addField(french.statsCmd.embedField6, `${gbR}GB`, true)
	embed.addField(french.statsCmd.embedField7, `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
	embed.addField(french.statsCmd.embedField8, `\`\`\`css${french.statsCmd.embedField9} ${duration}\nUsers: ${client.users.cache.size}${french.statsCmd.embedField9A} ${client.guilds.cache.size}${french.statsCmd.embedField9B} ${client.channels.cache.size}${french.statsCmd.embedField9C} ${client.commands.size}\`\`\``)
	embed.addField(french.statsCmd.embedField10, `v${version}`, true)
	embed.addField(french.statsCmd.embedField11, 'v3', true)
	embed.addField(french.statsCmd.embedField12, `${process.version}`, true)
	embed.addField(french.statsCmd.embedField13, client.user.id)
	embed.addField(french.statsCmd.embedField14, french.statsCmd.embedField14B)
	embed.setTimestamp()
	embed.setThumbnail(client.user.displayAvatarURL())
	embed.setFooter(`© Mastive - TheGreench#5074 - Time taken: ${Date.now() - time}ms`);
	message.channel.send(embed);
}

// Norwegian
async function Nor1(client, message, args) {
	const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
	const time = Date.now();
	const gbU = os.totalmem / 1000000000;
	const gbR = Math.round(gbU);

	const embed = new MessageEmbed()
		.setAuthor(nor.statsCmd.embedTitle)
		.setColor('#7289DA')
	if (os.platform == 'win32') {
		embed.addField(nor.statsCmd.embedField1, 'Windows', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024518761021460/Windows-Logo.png');
	}
	if (os.platform == 'linux') {
		embed.addField(nor.statsCmd.embedField1, 'Linux', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024720733536277/LINUX-LOGO.png');
	}
	if (os.platform == 'darwin') {
		embed.addField(nor.statsCmd.embedField1, 'Mac OS', true);
		embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024928028491779/2000px-OS_X_El_Capitan_logo.png');
	}
	if(os.platform == null || undefined) {
		embed.addField(nor.statsCmd.embedField1, 'OS is undefined', true);
	}
	embed.addField('Langauges(s)', '<:js:735042548770537522> JavaScript', true)
	embed.addField(nor.statsCmd.embedField2, `${os.release()}`, true)
	// embed.addField('\u200B', '\u200B', true)
	embed.addField(nor.statsCmd.embedField3, `${os.cpus().length}`, true)
	embed.addField(nor.statsCmd.embedField4, `${os.cpus()[0].model}`)
	embed.addField(nor.statsCmd.embedField5, `${os.arch}`, true)
	embed.addField(nor.statsCmd.embedField6, `${gbR}GB`, true)
	embed.addField(nor.statsCmd.embedFIeld7, `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
	embed.addField(nor.statsCmd.embedField8, `\`\`\`css${nor.statsCmd.embedField9} ${duration}\nUsers: ${client.users.cache.size}${nor.statsCmd.embedField9A} ${client.guilds.cache.size}${nor.statsCmd.embedField9B} ${client.channels.cache.size}${nor.statsCmd.embedField9C} ${client.commands.size}\`\`\``)
	embed.addField(nor.statsCmd.embedField10, `v${version}`, true)
	embed.addField(nor.statsCmd.embedField11, 'v3', true)
	embed.addField(nor.statsCmd.embedField12, `${process.version}`, true)
	embed.addField(nor.statsCmd.embedField13, client.user.id)
	embed.addField(nor.statsCmd.embedField14, nor.statsCmd.embedField14B)
	embed.setTimestamp()
	embed.setThumbnail(client.user.displayAvatarURL())
	embed.setFooter(`© Mastive - TheGreench#5074 - Time taken: ${Date.now() - time}ms`);
	message.channel.send(embed);
}