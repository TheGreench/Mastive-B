const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.MONGODBLINK, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});