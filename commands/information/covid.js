/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
const { MessageEmbed } = require('discord.js');
const api = require('novelcovid');
const english = require('../../languages/en.json');
const spanish = require('../../languages/es.json');
const german = require('../../languages/de.json');
const french = require('../../languages/fr.json');
const nor = require('../../languages/nor.json');
const gS = require('../../models/Guild.js');
const colors = require('../../json/colours.json');

module.exports = {
	name: 'covid',
	category: 'information',
	aliases: ['coronav', 'coronavirus', 'corona'],
	// Descriptions
	image: 'https://i.imgur.com/cRuDxVN.png',
	description: english.cmdDescriptions.infomation.covid,
	descriptionS: spanish.cmdDescriptions.infomation.covid,
	descriptionG: german.cmdDescriptions.infomation.covid,
	descriptionF: french.cmdDescriptions.infomation.covid,
	descriptionN: nor.cmdDescriptions.infomation.covid,
	// Usage
	usage: 'covid all | state [state] | [country]',
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
	if(!args[0]) {
		return message.channel.send(english.covidCmd.response1);
	}
	if(args[0] === 'all') {
		// if they entered all as the first argument, get information from all countries
		await api.all().then((data) => {
			// create an embed with the information and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(english.covidCmd.embedTitle1)
				.setColor(colors.green_dark)
				.addField(english.covidCmd.embedField2, data.cases, true)
				.addField(english.covidCmd.embedField3, data.deaths, true)
				.addField(english.covidCmd.embedField4, data.recovered, true)
				.addField(english.covidCmd.embedField5, data.todayCases, true)
				.addField(english.covidCmd.embedField6, data.todayDeaths, true)
				.addField(english.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
	else if (args[0] === 'state') {
		// if they entered state as the first argument go into this block
		// check if they entered second argument
		if(!args[1]) {
			return message.channel.send(english.covidCmd.response2);
		}
		else{
			// add everything after the first argument together separated by a space
			const state = args.slice(1).join(' ');
			// attempt to search for that state
			await api.states({ state: state }).then((data) => {
				if(data.state === undefined) return message.channel.send(english.covidCmd.response3);
				// send an embed with the information
				const embed = new MessageEmbed()
					.setTitle(`${data.state}`)
					.setColor(colors.green_dark)
					.addField(english.covidCmd.embedField2, data.cases, true)
					.addField(english.covidCmd.embedField3, data.deaths, true)
					.addField(english.covidCmd.embedField5, data.todayCases, true)
					.addField(english.covidCmd.embedField6, data.todayDeaths, true)
					.addField(english.covidCmd.embedField7, data.active, true)
					.setFooter(`© ${message.guild.me.displayName}`);

				return message.channel.send(embed);
			}).catch(err => console.log('[E]' + err));
		}
	}
	else{
		// if they didn't enter all or state as the first search term go into this block
		// add the terms together separated by a space
		const country = args.slice(0).join(' ');
		// attempt to search for information on that country
		await api.countries({ country: country }).then((data) => {
			if(data.country === undefined) return message.channel.send(english.covidCmd.response3);
			// create an embed with the data and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(`${data.country}`)
				.setColor(colors.green_dark)
				.addField(english.covidCmd.embedField2, data.cases, true)
				.addField(english.covidCmd.embedField3, data.deaths, true)
				.addField(english.covidCmd.embedField4, data.recovered, true)
				.addField(english.covidCmd.embedField5, data.todayCases, true)
				.addField(english.covidCmd.embedField6, data.todayDeaths, true)
				.addField(english.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
}

// Spanish
async function Spanish1(client, message, args) {
	if(!args[0]) {
		return message.channel.send(spanish.covidCmd.response1);
	}
	if(args[0] === 'all') {
		// if they entered all as the first argument, get information from all countries
		await api.all().then((data) => {
			// create an embed with the information and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(spanish.covidCmd.embedTitle1)
				.setColor(colors.green_dark)
				.addField(spanish.covidCmd.embedField2, data.cases, true)
				.addField(spanish.covidCmd.embedField3, data.deaths, true)
				.addField(spanish.covidCmd.embedField4, data.recovered, true)
				.addField(spanish.covidCmd.embedField5, data.todayCases, true)
				.addField(spanish.covidCmd.embedField6, data.todayDeaths, true)
				.addField(spanish.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
	else if (args[0] === 'state') {
		// if they entered state as the first argument go into this block
		// check if they entered second argument
		if(!args[1]) {
			return message.channel.send(spanish.covidCmd.response2);
		}
		else{
			// add everything after the first argument together separated by a space
			const state = args.slice(1).join(' ');
			// attempt to search for that state
			await api.states({ state: state }).then((data) => {
				if(data.state === undefined) return message.channel.send(spanish.covidCmd.response3);
				// send an embed with the information
				const embed = new MessageEmbed()
					.setTitle(`${data.state}`)
					.setColor(colors.green_dark)
					.addField(spanish.covidCmd.embedField2, data.cases, true)
					.addField(spanish.covidCmd.embedField3, data.deaths, true)
					.addField(spanish.covidCmd.embedField5, data.todayCases, true)
					.addField(spanish.covidCmd.embedField6, data.todayDeaths, true)
					.addField(spanish.covidCmd.embedField7, data.active, true)
					.setFooter(`© ${message.guild.me.displayName}`);

				return message.channel.send(embed);
			}).catch(err => console.log('[E]' + err));
		}
	}
	else{
		// if they didn't enter all or state as the first search term go into this block
		// add the terms together separated by a space
		const country = args.slice(0).join(' ');
		// attempt to search for information on that country
		await api.countries({ country: country }).then((data) => {
			if(data.country === undefined) return message.channel.send(spanish.covidCmd.response3);
			// create an embed with the data and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(`${data.country}`)
				.setColor(colors.green_dark)
				.addField(spanish.covidCmd.embedField2, data.cases, true)
				.addField(spanish.covidCmd.embedField3, data.deaths, true)
				.addField(spanish.covidCmd.embedField4, data.recovered, true)
				.addField(spanish.covidCmd.embedField5, data.todayCases, true)
				.addField(spanish.covidCmd.embedField6, data.todayDeaths, true)
				.addField(spanish.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
}

// German
async function German1(client, message, args) {
	if(!args[0]) {
		return message.channel.send(german.covidCmd.response1);
	}
	if(args[0] === 'all') {
		// if they entered all as the first argument, get information from all countries
		await api.all().then((data) => {
			// create an embed with the information and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(german.covidCmd.embedTitle1)
				.setColor(colors.green_dark)
				.addField(german.covidCmd.embedField2, data.cases, true)
				.addField(german.covidCmd.embedField3, data.deaths, true)
				.addField(german.covidCmd.embedField4, data.recovered, true)
				.addField(german.covidCmd.embedField5, data.todayCases, true)
				.addField(german.covidCmd.embedField6, data.todayDeaths, true)
				.addField(german.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
	else if (args[0] === 'state') {
		// if they entered state as the first argument go into this block
		// check if they entered second argument
		if(!args[1]) {
			return message.channel.send(german.covidCmd.response2);
		}
		else{
			// add everything after the first argument together separated by a space
			const state = args.slice(1).join(' ');
			// attempt to search for that state
			await api.states({ state: state }).then((data) => {
				if(data.state === undefined) return message.channel.send(german.covidCmd.response3);
				// send an embed with the information
				const embed = new MessageEmbed()
					.setTitle(`${data.state}`)
					.setColor(colors.green_dark)
					.addField(german.covidCmd.embedField2, data.cases, true)
					.addField(german.covidCmd.embedField3, data.deaths, true)
					.addField(german.covidCmd.embedField5, data.todayCases, true)
					.addField(german.covidCmd.embedField6, data.todayDeaths, true)
					.addField(german.covidCmd.embedField7, data.active, true)
					.setFooter(`© ${message.guild.me.displayName}`);

				return message.channel.send(embed);
			}).catch(err => console.log('[E]' + err));
		}
	}
	else{
		// if they didn't enter all or state as the first search term go into this block
		// add the terms together separated by a space
		const country = args.slice(0).join(' ');
		// attempt to search for information on that country
		await api.countries({ country: country }).then((data) => {
			if(data.country === undefined) return message.channel.send(german.covidCmd.response3);
			// create an embed with the data and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(`${data.country}`)
				.setColor(colors.green_dark)
				.addField(german.covidCmd.embedField2, data.cases, true)
				.addField(german.covidCmd.embedField3, data.deaths, true)
				.addField(german.covidCmd.embedField4, data.recovered, true)
				.addField(german.covidCmd.embedField5, data.todayCases, true)
				.addField(german.covidCmd.embedField6, data.todayDeaths, true)
				.addField(german.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
}

// French
async function French1(client, message, args) {
	if(!args[0]) {
		return message.channel.send(french.covidCmd.response1);
	}
	if(args[0] === 'all') {
		// if they entered all as the first argument, get information from all countries
		await api.all().then((data) => {
			// create an embed with the information and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(french.covidCmd.embedTitle1)
				.setColor(colors.green_dark)
				.addField(french.covidCmd.embedField2, data.cases, true)
				.addField(french.covidCmd.embedField3, data.deaths, true)
				.addField(french.covidCmd.embedField4, data.recovered, true)
				.addField(french.covidCmd.embedField5, data.todayCases, true)
				.addField(french.covidCmd.embedField6, data.todayDeaths, true)
				.addField(french.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
	else if (args[0] === 'state') {
		// if they entered state as the first argument go into this block
		// check if they entered second argument
		if(!args[1]) {
			return message.channel.send(french.covidCmd.response2);
		}
		else{
			// add everything after the first argument together separated by a space
			const state = args.slice(1).join(' ');
			// attempt to search for that state
			await api.states({ state: state }).then((data) => {
				if(data.state === undefined) return message.channel.send(french.covidCmd.response3);
				// send an embed with the information
				const embed = new MessageEmbed()
					.setTitle(`${data.state}`)
					.setColor(colors.green_dark)
					.addField(french.covidCmd.embedField2, data.cases, true)
					.addField(french.covidCmd.embedField3, data.deaths, true)
					.addField(french.covidCmd.embedField5, data.todayCases, true)
					.addField(french.covidCmd.embedField6, data.todayDeaths, true)
					.addField(french.covidCmd.embedField7, data.active, true)
					.setFooter(`© ${message.guild.me.displayName}`);

				return message.channel.send(embed);
			}).catch(err => console.log('[E]' + err));
		}
	}
	else{
		// if they didn't enter all or state as the first search term go into this block
		// add the terms together separated by a space
		const country = args.slice(0).join(' ');
		// attempt to search for information on that country
		await api.countries({ country: country }).then((data) => {
			if(data.country === undefined) return message.channel.send(french.covidCmd.response3);
			// create an embed with the data and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(`${data.country}`)
				.setColor(colors.green_dark)
				.addField(french.covidCmd.embedField2, data.cases, true)
				.addField(french.covidCmd.embedField3, data.deaths, true)
				.addField(french.covidCmd.embedField4, data.recovered, true)
				.addField(french.covidCmd.embedField5, data.todayCases, true)
				.addField(french.covidCmd.embedField6, data.todayDeaths, true)
				.addField(french.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
}

// Norwegian
async function Nor1(client, message, args) {
	if(!args[0]) {
		return message.channel.send(nor.covidCmd.response1);
	}
	if(args[0] === 'all') {
		// if they entered all as the first argument, get information from all countries
		await api.all().then((data) => {
			// create an embed with the information and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(nor.covidCmd.embedTitle1)
				.setColor(colors.green_dark)
				.addField(nor.covidCmd.embedField2, data.cases, true)
				.addField(nor.covidCmd.embedField3, data.deaths, true)
				.addField(nor.covidCmd.embedField4, data.recovered, true)
				.addField(nor.covidCmd.embedField5, data.todayCases, true)
				.addField(nor.covidCmd.embedField6, data.todayDeaths, true)
				.addField(nor.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
	else if (args[0] === 'state') {
		// if they entered state as the first argument go into this block
		// check if they entered second argument
		if(!args[1]) {
			return message.channel.send(nor.covidCmd.response2);
		}
		else{
			// add everything after the first argument together separated by a space
			const state = args.slice(1).join(' ');
			// attempt to search for that state
			await api.states({ state: state }).then((data) => {
				if(data.state === undefined) return message.channel.send(nor.covidCmd.response3);
				// send an embed with the information
				const embed = new MessageEmbed()
					.setTitle(`${data.state}`)
					.setColor(colors.green_dark)
					.addField(nor.covidCmd.embedField2, data.cases, true)
					.addField(nor.covidCmd.embedField3, data.deaths, true)
					.addField(nor.covidCmd.embedField5, data.todayCases, true)
					.addField(nor.covidCmd.embedField6, data.todayDeaths, true)
					.addField(nor.covidCmd.embedField7, data.active, true)
					.setFooter(`© ${message.guild.me.displayName}`);

				return message.channel.send(embed);
			}).catch(err => console.log('[E]' + err));
		}
	}
	else{
		// if they didn't enter all or state as the first search term go into this block
		// add the terms together separated by a space
		const country = args.slice(0).join(' ');
		// attempt to search for information on that country
		await api.countries({ country: country }).then((data) => {
			if(data.country === undefined) return message.channel.send(nor.covidCmd.response3);
			// create an embed with the data and send it to the channel
			const embed = new MessageEmbed()
				.setTitle(`${data.country}`)
				.setColor(colors.green_dark)
				.addField(nor.covidCmd.embedField2, data.cases, true)
				.addField(nor.covidCmd.embedField3, data.deaths, true)
				.addField(nor.covidCmd.embedField4, data.recovered, true)
				.addField(nor.covidCmd.embedField5, data.todayCases, true)
				.addField(nor.covidCmd.embedField6, data.todayDeaths, true)
				.addField(nor.covidCmd.embedField7, data.active, true)
				.setFooter(`© ${message.guild.me.displayName}`);
			return message.channel.send(embed);
		}).catch(err => console.log('[E]' + err));
	}
}