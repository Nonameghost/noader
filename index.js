const chalk = require('chalk');
const log = console.log;
const readline = require('readline');

const colors = {
	red : '#FF0000',
	blue : '#00FF00',
	green : '#0000FF'
}

log(chalk.hex(colors.red)(colors.red));

//Noader ==========================================================//

function Noader(visual){
	this.val = 0;
	this.max = 10;

	this.updateTimer = null;

	this.visual = visual;
	if(!this.visual) //Also check parent class or something.
	{
		this.visual = new LoadingBar();
	}

	this.visual.watch(this);
}

Noader.prototype.getProgress = function(clamped = true){
	if(clamped)
	{
		return Math.min(Math.max(this.val / this.max, 0), 1);	
	}
	else
	{
		return this.val / this.max;
	}
}

Noader.prototype.start = function(interval = -1){
	//this.emit('start');
	this.visual.start(interval);
}

Noader.prototype.complete = function(){
	//this.emit('complete');
}

Noader.prototype.error = function()
{
	//this.emit('error');
}

//LOADING BAR ============================================================//

function LoadingBar(){

	this.updateHandle = null;
	this.noader = null;

	this.DefaultConfig = function(){
		return {
			litChar 	: '▓▒',
			unlitChar 	: '░░',
			len 		: 10,
			litColor	: colors.blue,
			unlitColor 	: colors.blue,
			textColor	: colors.blue
		}
	}
	this.config = this.DefaultConfig();


	this.watch = function(noader)
	{
		this.noader = noader;
	}

	this.start = function(interval = -1)
	{
		//Auto-update 
		if(interval >= 0)
		{
			updateHandle = setInterval(this.update, interval)
		}
	}

	this.stop = function()
	{
		clearInterval(this.updateHandle);
	}

	this.clearLine = function()
	{
		readline.clearLine(process.stdout, 0);
		readline.moveCursor(process.stdout, -1024, 0);
	}

	this.writeLine = function(str)
	{
		process.stdout.write(str);
	}

	this.update = function()
	{
		this.clearLine();
		
		var str = '';
		var pct = this.noader.getProgress();
		var litChars = Math.floor(this.config.len * pct);
		for (var i = 0; i < this.config.len; i++) {
			if(i<litChars)
			{
				str += this.config.litColor(this.config.litChar);
			}
			else
			{
				str += this.config.unlitColor(this.config.unlitChar);
			}
		}

		str += config.textColor(' | ' + (Math.floor(pct*100)) + "% ");

		this.writeLine(str);

	}.bind(this);
}
//TEST =====================================================================//\

var lb = new LoadingBar();
var config = lb.config;

//config.litChar = '❤';
//config.unlitChar = '✚';

config.litColor = chalk.red;
config.unlitColor = chalk.grey;
config.textColor = chalk.red;

config.len = 10;

lb.config = config;


var n = new Noader(lb);
n.start(1000);

n.val = 0;
n.max = 10;
setInterval(function(){
	n.val += 1;
}, 1000);

function clamp(val, min, max) {
	return Math.min(Math.max(val, min), max);
}; 