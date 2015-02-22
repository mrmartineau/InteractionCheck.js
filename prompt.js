/**
 * TODO:
 * Should it prompt multiple times?
 * Disable prompt after n times?
 */

function Prompt(event, interval, cb) {

	this.event     = event || 'mousemove';
	this.interval  = interval  || 6000;
	this.now       = new Date();
	this.cb        = cb || undefined;

	if (document.addEventListener) {
		document.addEventListener(this.event, this.listener.bind(this));
	} else if (document.attachEvent) {
		document.attachEvent(this.event, this.listener);
	}

	// Run check every n seconds
	setInterval(this.checkForInteraction.bind(this), this.interval);
}


Prompt.prototype.listener = function() {
	this.now = new Date();
	this.checkForInteraction.call(this);
};


// Checks that are done every n seconds
Prompt.prototype.checkForInteraction = function() {
	var timeCheck       = new Date();
	var timeCheckString = timeCheck.getMinutes() + ':' + timeCheck.getSeconds();
	var nowString       = this.now.getMinutes() + ':' + this.now.getSeconds();

	if ( timeCheckString !== nowString ) {
		this.promptUser.call(this);
	}
};



Prompt.prototype.promptUser = function() {
	this.prompt = true;
	this.cb();
};


// Check for AMD/Module support, otherwise define trak as a global variable.
if (typeof define !== 'undefined' && define.amd) {
	// AMD. Register as an anonymous module.
	define (function() {
		'use strict';
		return Prompt;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prompt;
} else {
	window.Prompt = Prompt;
}
