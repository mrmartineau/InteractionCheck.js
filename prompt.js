/**
 * TODO:
 * Should it prompt multiple times?
 * Node?
 * Add options
 * Call with new Prompt('mousemove', 5000, cb)
 */

function Prompt(listenFor, interval, cb) {

	this.listenFor = listenFor || 'mousemove';
	this.interval  = interval  || 6000;
	this.now       = new Date();
	this.cb        = cb || undefined;

	this.listener.call(this);

	if (document.addEventListener) {
		document.addEventListener(this.listenFor, this.listener.call(this), false);
	} else if (document.attachEvent) {
		document.attachEvent(this.listenFor, this.listener.call(this));
	}

	// Run check every n seconds
	setInterval(this.checkForInteraction.call(this), this.interval);
}

Prompt.prototype.listener = function() {
	// console.log("listener", this);
	this.now = new Date();
	this.checkForInteraction.call(this);
};


// Checks that are done every n seconds
Prompt.prototype.checkForInteraction = function() {
	var timeCheck       = new Date();
	var timeCheckString = timeCheck.getMinutes() + ':' + timeCheck.getSeconds();
	var nowString       = this.now.getMinutes() + ':' + this.now.getSeconds();
	console.log("checkForInteraction", this);

	if ( timeCheckString !== nowString ) {
		this.promptUser.call(this);
	} else {
		// Run this function or do nothing
		this.dontPromptUser.call(this);
	}
};


//
Prompt.prototype.promptUser = function() {
	console.log("promptUser", this);
	this.prompt = true;
	console.log('Do something!');
	this.cb();
};


//
Prompt.prototype.dontPromptUser = function() {
	this.prompt = false;
	console.log('Do nothing!');
	// this.cb();
};