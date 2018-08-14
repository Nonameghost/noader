const noading = require('noading');

var n = new noading.bar({
	val			: 0,
	max			: 10,
	litChar 	: '▓▒',
	unlitChar 	: '░░',
	len 		: 10,
	litColor	: chalk.blue,
	unlitColor 	: chalk.blue,
	textColor	: chalk.blue,
	interval    : 500
});
n.start();

setInterval(function(){
	n.val += 1;
}, 1000);