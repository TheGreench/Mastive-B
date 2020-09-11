/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');

module.exports = (client) => {
	const Events = fs.readdirSync('./events/')
		.filter(file => !fs.statSync(path.resolve('./events/' + file))
			.isDirectory())
		.filter(file => file.endsWith('.js'));
	for (let event of Events) {
		event = event.replace(/\.js$/i, '');
		console.info(`[#] Loading event: ${event}`);
		if (event === 'ready') client.on(event, () => require(`../events/${event}`)(client));
		else client.on(event, require(`../events/${event}`));
	}
};