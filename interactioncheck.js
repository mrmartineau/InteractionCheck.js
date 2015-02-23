function InteractionCheck(event, interval, callback, startImmediately, restart) {

	this.event            = event || 'mousemove';
	this.interval         = interval  || 6000;
	this.startImmediately = (typeof startImmediately === "undefined") ? true : startImmediately;
	this.restart          = (typeof restart === "undefined") ? true : restart;
	this.callback         = callback || undefined;

	this.timer            = null;
	this.state            = 'idle';


	// Start listening for the event
	document.addEventListener(this.event, listener.bind(this), true);


	// Ensures the timer starts immediately if startImmediately === true
	if (this.startImmediately) {
		this.start.call(this);
	}


	// Event listener
	function listener() {

		if (this.state !== 'idle') {
			this.start.call(this);
		}
	}

}


/**
 * Clear the timer
 */
InteractionCheck.prototype.clearTimer = function() {

	if (this.timer) {
		clearTimeout(this.timer);
		this.timer = null;
	}
};


/**
 * Trigger your callback and stop timer
 * Timer will be restarted if this.restart === true
 */
InteractionCheck.prototype.triggerCallback = function() {

	this.state = 'idle';
	this.timer = null;
	this.callback();

	if (this.restart) {
		this.start.call(this);
	}
};


/**
 * Start the timer
 * Public method, can be called manually
 */
InteractionCheck.prototype.start = function() {

	this.clearTimer.call(this);
	this.state = 'active';
	this.timer = setTimeout(this.triggerCallback.bind(this), this.interval);
};


/**
 * Stop the interaction checker
 * Public method, can be called manually
 */
InteractionCheck.prototype.stop = function() {

	this.state = 'idle';
	this.clearTimer.call(this);
};


// Check for AMD/Module support, otherwise define trak as a global variable.
if (typeof define !== 'undefined' && define.amd) {
	// AMD. Register as an anonymous module.
	define (function() {
		'use strict';
		return InteractionCheck;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = InteractionCheck;
} else {
	window.InteractionCheck = InteractionCheck;
}
