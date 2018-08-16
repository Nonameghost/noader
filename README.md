# noading
Loading visualization for node.js CLI

![gif](https://media.giphy.com/media/9uImrwBV72XgCguyNb/giphy.gif "gif")

![gif](https://media.giphy.com/media/9uImrtV4TH3jwpCsjO/giphy.gif "gif")

A simple loading visualizer.

## Usage

Example from **example_bar.js:**

```js
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

// Result:

// ▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒ | 100%
```
Create a noading bar with **noading.bar()** and a config object, then **bar.start()** to trigger the automatic update. Updating **val** will change the current progress of the bar. The bar can also be manually updated by calling **bar.update()** instead of start.

## Colors

Depending on you terminal, noading can display visuals in various colors using [chalk](https://github.com/chalk/chalk). This can be done by passing in either keywords ('blue') or hex codes ('#0000FF') in a noading config object. Chalk should automatically fallback if the active terminal does not support a certain color range. See [the chalk docs](https://github.com/chalk/chalk) for more details. 

## Types/Configs

Below are the configs for the current loading bar types:

### Global

Shared between all noading types.

| Property  | Description |
| ------------- | ------------- |
| val  | The starting value being loaded. |
| max  | The total value being loaded. |
| max  | The total value being loaded. |
| interval | The rate at which the visual updates when .start() is used.|

### Bar

A loading bar.

| Property  | Description |
| ------------- | ------------- |
| litChar | The character(s) printed as the "loaded" part of the bar.|
| unlitChar | The characters(s) printed as the "unloaded" part of the bar.|
| len | The length of the bar in characters * length of both the above variables. (e.g. if litChar is 2 chars, 100% at len 10 will be 20 chars long.|
| litColor | The color of the lit chars. |
| unlitColor | The color of the unlit chars.|
| textColor | the color of the text at the end of the bar.|

### Animation

Loops through a sequence of characters and draws them at each frame interval.

| Property  | Description |
| ------------- | ------------- |
| sequence | An array of characters or strings that the animation will loop through.|
| color | The color of the characters in the animation.|

## License

```
MIT License

Copyright (c) 2018 Neil Sveri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
