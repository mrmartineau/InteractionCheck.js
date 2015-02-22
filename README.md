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
```

## API

`Prompt(event, interval, callback)`

### `event` [string]
Can be any javascript event, e.g. `mousemove` or `scroll`.

### `interval` [integer]
Is the number of milliseconds (thousandths of a second)

### `callback` [function]
A callback function to be run if the user is inactive for your specified amount of time.
