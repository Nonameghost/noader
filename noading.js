const chalk = require('chalk');
const readline = require('readline');
//Base ==========================================================//

function Base(config){
	this.val = (config.val === undefined) ? 0 : config.val;
	this.max = (config.max === undefined) ? 100 : config.max;
	console.log("Val: " + this.val);
	console.log("Max: " + this.max);


	this.interval = Math.max((config.interval === undefined) ? 0 : config.interval, 250);
	if(config.autoUpdate)
	{
		this.autoUpdate = true;
	}
	else
	{
		this.autoUpdate = this.interval > 0;
	}

	Base.prototype.update = function()
	{
		this.clearLine();
		this.writeLine("Loading " + this.val);
	}.bind(this);
}

Base.prototype.clearLine = function()
{
	readline.clearLine(process.stdout, 0);
	readline.moveCursor(process.stdout, -1024, 0);
}

Base.prototype.writeLine = function(str)
{
	process.stdout.write(str);
}

Base.prototype.start = function()
{
	this.updateHandle = setInterval(this.update, this.interval);
}

Base.prototype.stop = function()
{
	clearInterval(this.updateHandle);
}

Base.prototype.getProgress = function(clamped)
{
	if(clamped)
	{
		return Math.min(Math.max(this.val / this.max, 0), 1);	
	}
	else
	{
		return this.val / this.max;
	}
}

//BAR ============================================================//

function Bar(config){
	Base.call(this,config);

	this.len 		= Math.max((config.len === undefined) ? 10 : config.len, 1);
	this.litChar 	= (config.litChar === undefined) ? '▓▒' : config.litChar;
	this.unlitChar 	= (config.unlitChar === undefined) ? '░░' : config.unlitChar;
	this.litColor	= (config.litColor === undefined) ? chalk.blue : config.litColor;
	this.unlitColor	= (config.unlitColor === undefined) ? this.litColor : config.unlitColor;
	this.textColor	= (config.textColor === undefined) ? this.litColor : config.textColor;

	this.update = function()
	{
		this.clearLine();
		
		var str = '';
		var pct = this.getProgress();
		var litChars = Math.floor(this.len * pct);
		for (var i = 0; i < this.len; i++) {
			if(i<litChars)
			{
				str += this.litColor(this.litChar);
			}
			else
			{
				str += this.unlitColor(this.unlitChar);
			}
		}

		str += this.textColor(' | ' + (Math.floor(pct*100)) + "% ");

		this.writeLine(str);
	}.bind(this);
}

Bar.prototype = Object.create(Base.prototype);


//Exports ====================//
exports.base 	= new Base();
exports.bar 	= new Bar();
//============================//