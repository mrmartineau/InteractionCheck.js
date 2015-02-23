/**
 * InteractionCheck - Use this script to check if your users have not interacted with your page after a given amount of time
 * @version v0.3.0
 * @link https://github.com/mrmartineau/InteractionCheck.js
 * @license MIT
 */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9uY2hlY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW50ZXJhY3Rpb25jaGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEludGVyYWN0aW9uQ2hlY2soZXZlbnQsIGludGVydmFsLCBjYWxsYmFjaywgc3RhcnRJbW1lZGlhdGVseSwgcmVzdGFydCkge1xuXG5cdHRoaXMuZXZlbnQgICAgICAgICAgICA9IGV2ZW50IHx8ICdtb3VzZW1vdmUnO1xuXHR0aGlzLmludGVydmFsICAgICAgICAgPSBpbnRlcnZhbCAgfHwgNjAwMDtcblx0dGhpcy5zdGFydEltbWVkaWF0ZWx5ID0gKHR5cGVvZiBzdGFydEltbWVkaWF0ZWx5ID09PSBcInVuZGVmaW5lZFwiKSA/IHRydWUgOiBzdGFydEltbWVkaWF0ZWx5O1xuXHR0aGlzLnJlc3RhcnQgICAgICAgICAgPSAodHlwZW9mIHJlc3RhcnQgPT09IFwidW5kZWZpbmVkXCIpID8gdHJ1ZSA6IHJlc3RhcnQ7XG5cdHRoaXMuY2FsbGJhY2sgICAgICAgICA9IGNhbGxiYWNrIHx8IHVuZGVmaW5lZDtcblxuXHR0aGlzLnRpbWVyICAgICAgICAgICAgPSBudWxsO1xuXHR0aGlzLnN0YXRlICAgICAgICAgICAgPSAnaWRsZSc7XG5cblxuXHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIHRoZSBldmVudFxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnQsIGxpc3RlbmVyLmJpbmQodGhpcyksIHRydWUpO1xuXG5cblx0Ly8gRW5zdXJlcyB0aGUgdGltZXIgc3RhcnRzIGltbWVkaWF0ZWx5IGlmIHN0YXJ0SW1tZWRpYXRlbHkgPT09IHRydWVcblx0aWYgKHRoaXMuc3RhcnRJbW1lZGlhdGVseSkge1xuXHRcdHRoaXMuc3RhcnQuY2FsbCh0aGlzKTtcblx0fVxuXG5cblx0Ly8gRXZlbnQgbGlzdGVuZXJcblx0ZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG5cblx0XHRpZiAodGhpcy5zdGF0ZSAhPT0gJ2lkbGUnKSB7XG5cdFx0XHR0aGlzLnN0YXJ0LmNhbGwodGhpcyk7XG5cdFx0fVxuXHR9XG5cbn1cblxuXG4vKipcbiAqIENsZWFyIHRoZSB0aW1lclxuICovXG5JbnRlcmFjdGlvbkNoZWNrLnByb3RvdHlwZS5jbGVhclRpbWVyID0gZnVuY3Rpb24oKSB7XG5cblx0aWYgKHRoaXMudGltZXIpIHtcblx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG5cdFx0dGhpcy50aW1lciA9IG51bGw7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBUcmlnZ2VyIHlvdXIgY2FsbGJhY2sgYW5kIHN0b3AgdGltZXJcbiAqIFRpbWVyIHdpbGwgYmUgcmVzdGFydGVkIGlmIHRoaXMucmVzdGFydCA9PT0gdHJ1ZVxuICovXG5JbnRlcmFjdGlvbkNoZWNrLnByb3RvdHlwZS50cmlnZ2VyQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcblxuXHR0aGlzLnN0YXRlID0gJ2lkbGUnO1xuXHR0aGlzLnRpbWVyID0gbnVsbDtcblx0dGhpcy5jYWxsYmFjaygpO1xuXG5cdGlmICh0aGlzLnJlc3RhcnQpIHtcblx0XHR0aGlzLnN0YXJ0LmNhbGwodGhpcyk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTdGFydCB0aGUgdGltZXJcbiAqIFB1YmxpYyBtZXRob2QsIGNhbiBiZSBjYWxsZWQgbWFudWFsbHlcbiAqL1xuSW50ZXJhY3Rpb25DaGVjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcblxuXHR0aGlzLmNsZWFyVGltZXIuY2FsbCh0aGlzKTtcblx0dGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xuXHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCh0aGlzLnRyaWdnZXJDYWxsYmFjay5iaW5kKHRoaXMpLCB0aGlzLmludGVydmFsKTtcbn07XG5cblxuLyoqXG4gKiBTdG9wIHRoZSBpbnRlcmFjdGlvbiBjaGVja2VyXG4gKiBQdWJsaWMgbWV0aG9kLCBjYW4gYmUgY2FsbGVkIG1hbnVhbGx5XG4gKi9cbkludGVyYWN0aW9uQ2hlY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblxuXHR0aGlzLnN0YXRlID0gJ2lkbGUnO1xuXHR0aGlzLmNsZWFyVGltZXIuY2FsbCh0aGlzKTtcbn07XG5cblxuLy8gQ2hlY2sgZm9yIEFNRC9Nb2R1bGUgc3VwcG9ydCwgb3RoZXJ3aXNlIGRlZmluZSB0cmFrIGFzIGEgZ2xvYmFsIHZhcmlhYmxlLlxuaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIHtcblx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRkZWZpbmUgKGZ1bmN0aW9uKCkge1xuXHRcdCd1c2Ugc3RyaWN0Jztcblx0XHRyZXR1cm4gSW50ZXJhY3Rpb25DaGVjaztcblx0fSk7XG59IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gSW50ZXJhY3Rpb25DaGVjaztcbn0gZWxzZSB7XG5cdHdpbmRvdy5JbnRlcmFjdGlvbkNoZWNrID0gSW50ZXJhY3Rpb25DaGVjaztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==