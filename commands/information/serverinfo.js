/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');
const userS = require('../../models/DiscordUser.js');
const mainS = process.env.MAIN_GUILD;

module.exports = {
	name: 'serverinfo',
	category: 'information',
	aliases: ['server', 'sinfo', 'guildinfo'],
	// Descriptions
	image: 'https://i.imgur.com/iGvcRQw.png',
	description: english.cmdDescriptions.infomation.serverinfo,
	descriptionS: spanish.cmdDescriptions.infomation.serverinfo,
	descriptionG: german.cmdDescriptions.infomation.serverinfo,
	descriptionF: french.cmdDescriptions.infomation.serverinfo,
	descriptionN: nor.cmdDescriptions.infomation.serverinfo,
	usage: 'serverinfo',
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
		const online = message.guild.members.cache.filter(member => member.user.presence.status !== 'offline');
		const idle = message.guild.members.cache.filter(member => member.user.presence.status === 'idle');
		const offline = message.guild.members.cache.filter(member => member.user.presence.status === 'offline');
		const day = message.guild.createdAt.getDate();
		const month = 1 + message.guild.createdAt.getMonth();
		const year = message.guild.createdAt.getFullYear();
		const sicon = message.guild.displayIconURL;
		const textChannels = message.guild.channels.cache.filter(c => c.type === 'text').size;
		const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice').size;

		// English
		if (lang === 'English' || lang === 'english') {
			return English1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline);
		}
		// Spanish
		if (lang === 'Spanish' || lang === 'spanish') {
			return Spanish1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline);
		}
		//  German
		if (lang === 'German' || lang === 'german') {
			return German1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline);
		}
		// French
		if (lang === 'French' || lang === 'french') {
			return French1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline);
		}
		// Norwegian
		if (lang === 'Norwegian' || lang === 'norwegian') {
			return Nor1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline);
		}
	},
};

// English
async function English1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline) {
	const serverembed = new MessageEmbed()
		.setAuthor(message.guild.name, sicon)
		.setColor('#7289DA')
		.setThumbnail(message.guild.iconURL(), false)
		.addField(english.serverinfoCmd.embedField1, message.guild.id, true)
		.addField(english.serverinfoCmd.embedField2, message.guild.name, true)
		.addField(english.serverinfoCmd.embedField3, `<@${message.guild.owner.user.id}>`, true)
		.addField(english.serverinfoCmd.embedField4, message.guild.region, true)
		.addField(english.serverinfoCmd.embedField5, message.guild.memberCount, true)
		.addField(english.serverinfoCmd.embedField6, textChannels, true)
		.addField(english.serverinfoCmd.embedField7, voiceChannels, true)
		.addField(english.serverinfoCmd.embedField8, message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(english.serverinfoCmd.embedField9, message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(english.serverinfoCmd.embedField10, online.size, true)
		.addField(english.serverinfoCmd.embedField11, idle.size, true)
		.addField(english.serverinfoCmd.embedField12, offline.size, true);
	if (mainS.includes(message.guild.id)) {
		serverembed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**Mastive Main Server**');
	}
	serverembed.setFooter(`Server Created: ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(serverembed);
}

// Spanish
async function Spanish1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline) {
	const serverembed = new MessageEmbed()
		.setAuthor(message.guild.name, sicon)
		.setColor('#7289DA')
		.setThumbnail(message.guild.iconURL(), false)
		.addField(spanish.serverinfoCmd.embedField1, message.guild.id, true)
		.addField(spanish.serverinfoCmd.embedField2, message.guild.name, true)
		.addField(spanish.serverinfoCmd.embedField3, `<@${message.guild.owner.user.id}>`, true)
		.addField(spanish.serverinfoCmd.embedField4, message.guild.region, true)
		.addField(spanish.serverinfoCmd.embedField5, message.guild.memberCount, true)
		.addField(spanish.serverinfoCmd.embedField6, textChannels, true)
		.addField(spanish.serverinfoCmd.embedField7, voiceChannels, true)
		.addField(spanish.serverinfoCmd.embedField8, message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(spanish.serverinfoCmd.embedField9, message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(spanish.serverinfoCmd.embedField10, online.size, true)
		.addField(spanish.serverinfoCmd.embedField11, idle.size, true)
		.addField(spanish.serverinfoCmd.embedField12, offline.size, true);
	if (mainS.includes(message.guild.id)) {
		serverembed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**Mastive Main Server**');
	}
	serverembed.setFooter(`Server Created: ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(serverembed);
}

// German
async function German1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline) {
	const serverembed = new MessageEmbed()
		.setAuthor(message.guild.name, sicon)
		.setColor('#7289DA')
		.setThumbnail(message.guild.iconURL(), false)
		.addField(german.serverinfoCmd.embedField1, message.guild.id, true)
		.addField(german.serverinfoCmd.embedField2, message.guild.name, true)
		.addField(german.serverinfoCmd.embedField3, `<@${message.guild.owner.user.id}>`, true)
		.addField(german.serverinfoCmd.embedField4, message.guild.region, true)
		.addField(german.serverinfoCmd.embedField5, message.guild.memberCount, true)
		.addField(german.serverinfoCmd.embedField6, textChannels, true)
		.addField(german.serverinfoCmd.embedField7, voiceChannels, true)
		.addField(german.serverinfoCmd.embedField8, message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(german.serverinfoCmd.embedField9, message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(german.serverinfoCmd.embedField10, online.size, true)
		.addField(german.serverinfoCmd.embedField11, idle.size, true)
		.addField(german.serverinfoCmd.embedField12, offline.size, true);
	if (mainS.includes(message.guild.id)) {
		serverembed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**Mastive Main Server**');
	}
	serverembed.setFooter(`Server Created: ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(serverembed);
}

// French
async function French1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline) {
	const serverembed = new MessageEmbed()
		.setAuthor(message.guild.name, sicon)
		.setColor('#7289DA')
		.setThumbnail(message.guild.iconURL(), false)
		.addField(french.serverinfoCmd.embedField1, message.guild.id, true)
		.addField(french.serverinfoCmd.embedField2, message.guild.name, true)
		.addField(french.serverinfoCmd.embedField3, `<@${message.guild.owner.user.id}>`, true)
		.addField(french.serverinfoCmd.embedField4, message.guild.region, true)
		.addField(french.serverinfoCmd.embedField5, message.guild.memberCount, true)
		.addField(french.serverinfoCmd.embedField6, textChannels, true)
		.addField(french.serverinfoCmd.embedField7, voiceChannels, true)
		.addField(french.serverinfoCmd.embedField8, message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(french.serverinfoCmd.embedField9, message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(french.serverinfoCmd.embedField10, online.size, true)
		.addField(french.serverinfoCmd.embedField11, idle.size, true)
		.addField(french.serverinfoCmd.embedField12, offline.size, true);
	if (mainS.includes(message.guild.id)) {
		serverembed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**Mastive Main Server**');
	}
	serverembed.setFooter(`Server Created: ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(serverembed);
}

// Norwegian
async function Nor1(message, online, day, month, year, sicon, textChannels, voiceChannels, idle, offline) {
	const serverembed = new MessageEmbed()
		.setAuthor(message.guild.name, sicon)
		.setColor('#7289DA')
		.setThumbnail(message.guild.iconURL(), false)
		.addField(nor.serverinfoCmd.embedField1, message.guild.id, true)
		.addField(nor.serverinfoCmd.embedField2, message.guild.name, true)
		.addField(nor.serverinfoCmd.embedField3, `<@${message.guild.owner.user.id}>`, true)
		.addField(nor.serverinfoCmd.embedField4, message.guild.region, true)
		.addField(nor.serverinfoCmd.embedField5, message.guild.memberCount, true)
		.addField(nor.serverinfoCmd.embedField6, textChannels, true)
		.addField(nor.serverinfoCmd.embedField7, voiceChannels, true)
		.addField(nor.serverinfoCmd.embedField8, message.guild.memberCount - message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(nor.serverinfoCmd.embedField9, message.guild.members.cache.filter(m => m.user.bot).size, true)
		.addField(nor.serverinfoCmd.embedField10, online.size, true)
		.addField(nor.serverinfoCmd.embedField11, idle.size, true)
		.addField(nor.serverinfoCmd.embedField12, offline.size, true);
	if (mainS.includes(message.guild.id)) {
		serverembed.setDescription('<:users_logo:738525259820695592>\u00a0\u00a0\u00a0**Mastive Main Server**');
	}
	serverembed.setFooter(`Server Created: ${day}/${month}/${year} • © Mastive - TheGreench#5074`);
	message.channel.send(serverembed);
}