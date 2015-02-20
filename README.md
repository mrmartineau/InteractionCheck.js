# prompt.js
Prompt users if they have not interacted with your page for a given amount of time. The check interval is 6 seconds and currently listens for the `mousemove` event but `scroll` or others can be used equally well.

## Usage

Start the prompt:

```js
var mousemovePrompt = new Prompt('mousemove', 4000, function() {
	alert('The mouse moved');
});
```