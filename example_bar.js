const noading = require('./noading.js');

var config = {
	val			: 0,
	max			: 10,
	litChar 	: '▓▒',
	unlitChar 	: '░░',
	len 		: 20,
	litColor	: 'red',
	unlitColor 	: 'blue',
	textColor	: 'blue',
	interval    : 500
};

var n = new noading.bar(config);
n.start();

setInterval(function(){
	n.val += 1;
}, 1000);

