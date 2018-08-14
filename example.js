const noading = require('./noading.js');
const chalk = require('chalk');

var config = {
	val			: 0,
	max			: 10,
	litChar 	: '▓▒',
	unlitChar 	: '░░',
	len 		: 20,
	litColor	: chalk.blue,
	unlitColor 	: chalk.blue,
	textColor	: chalk.blue,
	interval    : 500
};

var n = new noading.bar(config);
n.start();

setInterval(function(){
	n.val += 1;
}, 1000);