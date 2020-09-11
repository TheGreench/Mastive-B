/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');

// Schema For Each User
const UserSchema = new mongoose.Schema({
	discordId: { type: String, required: true },
	username: { type: String, required: true },
	avatarURl: { type: String, required: true },
	discriminator: { type: Number, required: true },
	guilds: { type: Array, required: true },
	premiun: { type: Boolean, default: false },
	blacklisted: { type: Boolean, default: false },
	coins: { type: Number, default: 0 },
	fragments: { type: Number, default: 0 },
	rubies: { type: Number, default: 0 },
	level: { type: Number, default: 0 },
	xp: { type: Number, default: 0 },
	daily: { type: Number, default: 0 },
	rep: { type: Number, default: 0 },
});
const DiscordUser = module.exports = mongoose.model('User', UserSchema);