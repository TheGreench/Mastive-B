const { Schema, model } = require('mongoose');

// Schema for Each Guild
const Guild = Schema({
	id: { type: String, indexes: true },
	serverName: String,
	owner: String,
	prefix: { default: '*', type: String },
	lang: { default: 'English', type: String },
	djRole: { default: false, type: Boolean },
	roleDj: { default: 'DJ', type: String },
	modRole: { default: 'Mod', type: String },
	adminRole: { default: 'Admin', type: String },
	logsChannel: { default: 'logs', type: String },
	memberLogs: { default: false, type: Boolean },
	memberLogsChannel: { default: 'joins', type: String },
	blacklisted: { default: false, type: Boolean },
});
module.exports = model('Guild', Guild);