[![Code Climate](https://codeclimate.com/github/mrmartineau/InteractionCheck.js/badges/gpa.svg)](https://codeclimate.com/github/mrmartineau/InteractionCheck.js)
# InteractionCheck.js
Use this script to check if your users have not interacted with your page after a given amount of time. You can choose what to listen for (`mousemove` or `scroll` are good examples) and then run a callback function afterwards.


### Bower
`bower install interactioncheck`

### NPM
`npm install interactioncheck --save`

## Usage
Include **interactioncheck.js** in your JavaScript bundle or add it to your HTML page like this:

```html
<script type='application/javascript' src='/path/to/interactioncheck.js'></script>
```

or with NPM/Browserify

```js
var InteractionCheck = require('interactioncheck');
```

### Create a new checker
```js
// Listen for mousemove event
var mousemoveCheck = new InteractionCheck('mousemove', 4000, function() {
	console.log('no mousemove');
});

// Listen for scroll event
var scrollCheck = new InteractionCheck('scroll', 4000, function() {
	console.log('no scroll');
});

// Prevent from starting immediately and restarting
var touchstartCheck = new InteractionCheck('touchstart', 4000, function() {
	console.log('no touchstart');
}, false, false);
```

## API

`InteractionCheck(event, interval, callback, startImmediately, restart)`

### `event` [string]
Default: `mousemove`

Can be any javascript event, e.g. `mousemove` or `scroll`.

### `interval` [integer]
Default: `6000`

Time in milliseconds (thousandths of a second) to wait before triggering the check.

### `callback` [function]
Default: `undefined`

A callback function to be run if the user is inactive for your specified amount of time.

### `startImmediately` [boolean] [optional]
Default: `true`

Set this to true to start the timer immediately after invocation.

### `restart` [boolean] [optional]
Default: `true`

Set this to `true` to restart the check after the callback has fired.


## Public methods

### `InteractionCheck.start()`
Call `start()` to start the check if `startImmediately` has been set to `false`.

### `InteractionCheck.stop()`
Call `stop()` to stop the check's timer at any time.

#### `start()` / `stop()` examples

```js
var touchstartCheck = new InteractionCheck('touchstart', 4000, function() {
	console.log('no touchstart');
}, false, false);

// Start the prompt
touchstartCheck.start();

// Stop the prompt
touchstartCheck.stop();
```

## Browser support
Chrome, Internet Explorer 9+, Firefox, Opera

## Module loader support
Browserify (Node.js) & AMD