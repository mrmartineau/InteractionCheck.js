[![Code Climate](https://codeclimate.com/github/mrmartineau/prompt/badges/gpa.svg)](https://codeclimate.com/github/mrmartineau/prompt)
# prompt.js
Use this script to check if your users have not interacted with your page after a given amount of time. You can choose what to listen for (`mousemove` or `scroll` are good examples) and then run a function afterwards.

## Usage

Start a prompt:

```js
// Listen for mousemove event
var mousemovePrompt = new Prompt('mousemove', 4000, function() {
	console.log('no mousemove');
});

// Listen for scroll event
var scrollPrompt = new Prompt('scroll', 4000, function() {
	console.log('no scroll');
});

// Prevent from starting immediately and restarting
var touchstartPrompt = new Prompt('touchstart', 4000, function() {
	console.log('no touchstart');
}, false, false);
```

## API

`Prompt(event, interval, callback, startImmediately, restart)`

### `event` [string]
Default: `mousemove`

Can be any javascript event, e.g. `mousemove` or `scroll`.

### `interval` [integer]
Default: `6000`

Time in milliseconds (thousandths of a second) to wait before triggering the prompt.

### `callback` [function]
Default: `undefined`

A callback function to be run if the user is inactive for your specified amount of time.

### `startImmediately` [boolean] [optional]
Default: `true`

Set this to true to start the timer immediately after invocation.

### `restart` [boolean] [optional]
Default: `true`

Set this to `true` to restart the prompt after the callback has fired.


## Public methods

### `Prompt.start()`
Call `start()` to start the prompt if you have not started it immediately with the `startImmediately` option.

### `Prompt.stop()`
Call `stop()` to stop the prompt's timer at any time.

```js
var touchstartPrompt = new Prompt('touchstart', 4000, function() {
	console.log('no touchstart');
}, false, false);

// Start the prompt
touchstartPrompt.start();

// Stop the prompt
touchstartPrompt.stop();
```

## Browser support
Chrome, Internet Explorer 9+, Firefox, Opera

## Module loader support
Browserify (Node.js) & AMD