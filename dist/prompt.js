/**
 * prompt.js - Prompt users if they have not interacted with your page for a given amount of time
 * @version v0.3.0
 * @link https://github.com/mrmartineau/prompt
 * @license MIT
 */
function Prompt(event, interval, callback, startImmediately, restart) {

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
Prompt.prototype.clearTimer = function() {

	if (this.timer) {
		clearTimeout(this.timer);
		this.timer = null;
	}
};


/**
 * Trigger your callback and stop timer
 * Timer will be restarted if this.restart === true
 */
Prompt.prototype.triggerCallback = function() {

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
Prompt.prototype.start = function() {

	this.clearTimer.call(this);
	this.state = 'active';
	this.timer = setTimeout(this.triggerCallback.bind(this), this.interval);
};


/**
 * Stop the interaction checker
 * Public method, can be called manually
 */
Prompt.prototype.stop = function() {

	this.state = 'idle';
	this.clearTimer.call(this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwcm9tcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBQcm9tcHQoZXZlbnQsIGludGVydmFsLCBjYWxsYmFjaywgc3RhcnRJbW1lZGlhdGVseSwgcmVzdGFydCkge1xuXG5cdHRoaXMuZXZlbnQgICAgICAgICAgICA9IGV2ZW50IHx8ICdtb3VzZW1vdmUnO1xuXHR0aGlzLmludGVydmFsICAgICAgICAgPSBpbnRlcnZhbCAgfHwgNjAwMDtcblx0dGhpcy5zdGFydEltbWVkaWF0ZWx5ID0gKHR5cGVvZiBzdGFydEltbWVkaWF0ZWx5ID09PSBcInVuZGVmaW5lZFwiKSA/IHRydWUgOiBzdGFydEltbWVkaWF0ZWx5O1xuXHR0aGlzLnJlc3RhcnQgICAgICAgICAgPSAodHlwZW9mIHJlc3RhcnQgPT09IFwidW5kZWZpbmVkXCIpID8gdHJ1ZSA6IHJlc3RhcnQ7XG5cdHRoaXMuY2FsbGJhY2sgICAgICAgICA9IGNhbGxiYWNrIHx8IHVuZGVmaW5lZDtcblxuXHR0aGlzLnRpbWVyICAgICAgICAgICAgPSBudWxsO1xuXHR0aGlzLnN0YXRlICAgICAgICAgICAgPSAnaWRsZSc7XG5cblxuXHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIHRoZSBldmVudFxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnQsIGxpc3RlbmVyLmJpbmQodGhpcyksIHRydWUpO1xuXG5cblx0Ly8gRW5zdXJlcyB0aGUgdGltZXIgc3RhcnRzIGltbWVkaWF0ZWx5IGlmIHN0YXJ0SW1tZWRpYXRlbHkgPT09IHRydWVcblx0aWYgKHRoaXMuc3RhcnRJbW1lZGlhdGVseSkge1xuXHRcdHRoaXMuc3RhcnQuY2FsbCh0aGlzKTtcblx0fVxuXG5cblx0Ly8gRXZlbnQgbGlzdGVuZXJcblx0ZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG5cblx0XHRpZiAodGhpcy5zdGF0ZSAhPT0gJ2lkbGUnKSB7XG5cdFx0XHR0aGlzLnN0YXJ0LmNhbGwodGhpcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vKipcbiAqIENsZWFyIHRoZSB0aW1lclxuICovXG5Qcm9tcHQucHJvdG90eXBlLmNsZWFyVGltZXIgPSBmdW5jdGlvbigpIHtcblxuXHRpZiAodGhpcy50aW1lcikge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcblx0XHR0aGlzLnRpbWVyID0gbnVsbDtcblx0fVxufTtcblxuXG4vKipcbiAqIFRyaWdnZXIgeW91ciBjYWxsYmFjayBhbmQgc3RvcCB0aW1lclxuICogVGltZXIgd2lsbCBiZSByZXN0YXJ0ZWQgaWYgdGhpcy5yZXN0YXJ0ID09PSB0cnVlXG4gKi9cblByb21wdC5wcm90b3R5cGUudHJpZ2dlckNhbGxiYWNrID0gZnVuY3Rpb24oKSB7XG5cblx0dGhpcy5zdGF0ZSA9ICdpZGxlJztcblx0dGhpcy50aW1lciA9IG51bGw7XG5cdHRoaXMuY2FsbGJhY2soKTtcblxuXHRpZiAodGhpcy5yZXN0YXJ0KSB7XG5cdFx0dGhpcy5zdGFydC5jYWxsKHRoaXMpO1xuXHR9XG59O1xuXG5cbi8qKlxuICogU3RhcnQgdGhlIHRpbWVyXG4gKiBQdWJsaWMgbWV0aG9kLCBjYW4gYmUgY2FsbGVkIG1hbnVhbGx5XG4gKi9cblByb21wdC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcblxuXHR0aGlzLmNsZWFyVGltZXIuY2FsbCh0aGlzKTtcblx0dGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xuXHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCh0aGlzLnRyaWdnZXJDYWxsYmFjay5iaW5kKHRoaXMpLCB0aGlzLmludGVydmFsKTtcbn07XG5cblxuLyoqXG4gKiBTdG9wIHRoZSBpbnRlcmFjdGlvbiBjaGVja2VyXG4gKiBQdWJsaWMgbWV0aG9kLCBjYW4gYmUgY2FsbGVkIG1hbnVhbGx5XG4gKi9cblByb21wdC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXG5cdHRoaXMuc3RhdGUgPSAnaWRsZSc7XG5cdHRoaXMuY2xlYXJUaW1lci5jYWxsKHRoaXMpO1xufTtcblxuXG4vLyBDaGVjayBmb3IgQU1EL01vZHVsZSBzdXBwb3J0LCBvdGhlcndpc2UgZGVmaW5lIHRyYWsgYXMgYSBnbG9iYWwgdmFyaWFibGUuXG5pZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmaW5lLmFtZCkge1xuXHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdGRlZmluZSAoZnVuY3Rpb24oKSB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXHRcdHJldHVybiBQcm9tcHQ7XG5cdH0pO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IFByb21wdDtcbn0gZWxzZSB7XG5cdHdpbmRvdy5Qcm9tcHQgPSBQcm9tcHQ7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=