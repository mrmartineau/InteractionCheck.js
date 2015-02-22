/**
 * prompt.js - Prompt users if they have not interacted with your page for a given amount of time
 * @version v0.2.0
 * @link https://github.com/mrmartineau/prompt
 * @license MIT
 */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InByb21wdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVE9ETzpcbiAqIFNob3VsZCBpdCBwcm9tcHQgbXVsdGlwbGUgdGltZXM/XG4gKiBEaXNhYmxlIHByb21wdCBhZnRlciBuIHRpbWVzP1xuICovXG5cbmZ1bmN0aW9uIFByb21wdChldmVudCwgaW50ZXJ2YWwsIGNiKSB7XG5cblx0dGhpcy5ldmVudCAgICAgPSBldmVudCB8fCAnbW91c2Vtb3ZlJztcblx0dGhpcy5pbnRlcnZhbCAgPSBpbnRlcnZhbCAgfHwgNjAwMDtcblx0dGhpcy5ub3cgICAgICAgPSBuZXcgRGF0ZSgpO1xuXHR0aGlzLmNiICAgICAgICA9IGNiIHx8IHVuZGVmaW5lZDtcblxuXHRpZiAoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lci5iaW5kKHRoaXMpKTtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xuXHRcdGRvY3VtZW50LmF0dGFjaEV2ZW50KHRoaXMuZXZlbnQsIHRoaXMubGlzdGVuZXIpO1xuXHR9XG5cblx0Ly8gUnVuIGNoZWNrIGV2ZXJ5IG4gc2Vjb25kc1xuXHRzZXRJbnRlcnZhbCh0aGlzLmNoZWNrRm9ySW50ZXJhY3Rpb24uYmluZCh0aGlzKSwgdGhpcy5pbnRlcnZhbCk7XG59XG5cblxuUHJvbXB0LnByb3RvdHlwZS5saXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cdHRoaXMuY2hlY2tGb3JJbnRlcmFjdGlvbi5jYWxsKHRoaXMpO1xufTtcblxuXG4vLyBDaGVja3MgdGhhdCBhcmUgZG9uZSBldmVyeSBuIHNlY29uZHNcblByb21wdC5wcm90b3R5cGUuY2hlY2tGb3JJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGltZUNoZWNrICAgICAgID0gbmV3IERhdGUoKTtcblx0dmFyIHRpbWVDaGVja1N0cmluZyA9IHRpbWVDaGVjay5nZXRNaW51dGVzKCkgKyAnOicgKyB0aW1lQ2hlY2suZ2V0U2Vjb25kcygpO1xuXHR2YXIgbm93U3RyaW5nICAgICAgID0gdGhpcy5ub3cuZ2V0TWludXRlcygpICsgJzonICsgdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuXG5cdGlmICggdGltZUNoZWNrU3RyaW5nICE9PSBub3dTdHJpbmcgKSB7XG5cdFx0dGhpcy5wcm9tcHRVc2VyLmNhbGwodGhpcyk7XG5cdH1cbn07XG5cblxuXG5Qcm9tcHQucHJvdG90eXBlLnByb21wdFVzZXIgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5wcm9tcHQgPSB0cnVlO1xuXHR0aGlzLmNiKCk7XG59O1xuXG5cbi8vIENoZWNrIGZvciBBTUQvTW9kdWxlIHN1cHBvcnQsIG90aGVyd2lzZSBkZWZpbmUgdHJhayBhcyBhIGdsb2JhbCB2YXJpYWJsZS5cbmlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSB7XG5cdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0ZGVmaW5lIChmdW5jdGlvbigpIHtcblx0XHQndXNlIHN0cmljdCc7XG5cdFx0cmV0dXJuIFByb21wdDtcblx0fSk7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJvbXB0O1xufSBlbHNlIHtcblx0d2luZG93LlByb21wdCA9IFByb21wdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==