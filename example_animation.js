const noading = require('./noading.js');

var config = {
	val:0,
	max:10,
	interval: 1000,
	sequence: [
	'(\\°-°)\\┬─┬      /(°-°/)',
	'(╯°□°)╯︵ ┻━┻   /(°-°/)',
	'(\\°-°)\\      ┬─┬/(°-°/)',
	'(\\°-°)\\   ┻━┻ ︵╰(°□°╰)'
	]
}

var n = new noading.animation(config);
n.start();

setInterval(function(){
	n.val += 1;
}, 1000);