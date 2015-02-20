/**
 * prompt.js - Prompt users if they have not interacted with your page for a given amount of time
 * @version v0.4.0
 * @link https://github.com/mrmartineau/prompt
 * @license MIT
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InByb21wdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVE9ETzpcbiAqIFNob3VsZCBpdCBwcm9tcHQgbXVsdGlwbGUgdGltZXM/XG4gKiBOb2RlP1xuICogQWRkIG9wdGlvbnNcbiAqIENhbGwgd2l0aCBuZXcgUHJvbXB0KCdtb3VzZW1vdmUnLCA1MDAwLCBjYilcbiAqL1xuXG5mdW5jdGlvbiBQcm9tcHQobGlzdGVuRm9yLCBpbnRlcnZhbCwgY2IpIHtcblxuXHR0aGlzLmxpc3RlbkZvciA9IGxpc3RlbkZvciB8fCAnbW91c2Vtb3ZlJztcblx0dGhpcy5pbnRlcnZhbCAgPSBpbnRlcnZhbCAgfHwgNjAwMDtcblx0dGhpcy5ub3cgICAgICAgPSBuZXcgRGF0ZSgpO1xuXHR0aGlzLmNiICAgICAgICA9IGNiIHx8IHVuZGVmaW5lZDtcblxuXHR0aGlzLmxpc3RlbmVyLmNhbGwodGhpcyk7XG5cblx0aWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubGlzdGVuRm9yLCB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcyksIGZhbHNlKTtcblx0fSBlbHNlIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCkge1xuXHRcdGRvY3VtZW50LmF0dGFjaEV2ZW50KHRoaXMubGlzdGVuRm9yLCB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcykpO1xuXHR9XG5cblx0Ly8gUnVuIGNoZWNrIGV2ZXJ5IG4gc2Vjb25kc1xuXHRzZXRJbnRlcnZhbCh0aGlzLmNoZWNrRm9ySW50ZXJhY3Rpb24uY2FsbCh0aGlzKSwgdGhpcy5pbnRlcnZhbCk7XG59XG5cblByb21wdC5wcm90b3R5cGUubGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcblx0Ly8gY29uc29sZS5sb2coXCJsaXN0ZW5lclwiLCB0aGlzKTtcblx0dGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXHR0aGlzLmNoZWNrRm9ySW50ZXJhY3Rpb24uY2FsbCh0aGlzKTtcbn07XG5cblxuLy8gQ2hlY2tzIHRoYXQgYXJlIGRvbmUgZXZlcnkgbiBzZWNvbmRzXG5Qcm9tcHQucHJvdG90eXBlLmNoZWNrRm9ySW50ZXJhY3Rpb24gPSBmdW5jdGlvbigpIHtcblx0dmFyIHRpbWVDaGVjayAgICAgICA9IG5ldyBEYXRlKCk7XG5cdHZhciB0aW1lQ2hlY2tTdHJpbmcgPSB0aW1lQ2hlY2suZ2V0TWludXRlcygpICsgJzonICsgdGltZUNoZWNrLmdldFNlY29uZHMoKTtcblx0dmFyIG5vd1N0cmluZyAgICAgICA9IHRoaXMubm93LmdldE1pbnV0ZXMoKSArICc6JyArIHRoaXMubm93LmdldFNlY29uZHMoKTtcblx0Y29uc29sZS5sb2coXCJjaGVja0ZvckludGVyYWN0aW9uXCIsIHRoaXMpO1xuXG5cdGlmICggdGltZUNoZWNrU3RyaW5nICE9PSBub3dTdHJpbmcgKSB7XG5cdFx0dGhpcy5wcm9tcHRVc2VyLmNhbGwodGhpcyk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUnVuIHRoaXMgZnVuY3Rpb24gb3IgZG8gbm90aGluZ1xuXHRcdHRoaXMuZG9udFByb21wdFVzZXIuY2FsbCh0aGlzKTtcblx0fVxufTtcblxuXG4vL1xuUHJvbXB0LnByb3RvdHlwZS5wcm9tcHRVc2VyID0gZnVuY3Rpb24oKSB7XG5cdGNvbnNvbGUubG9nKFwicHJvbXB0VXNlclwiLCB0aGlzKTtcblx0dGhpcy5wcm9tcHQgPSB0cnVlO1xuXHRjb25zb2xlLmxvZygnRG8gc29tZXRoaW5nIScpO1xuXHR0aGlzLmNiKCk7XG59O1xuXG5cbi8vXG5Qcm9tcHQucHJvdG90eXBlLmRvbnRQcm9tcHRVc2VyID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMucHJvbXB0ID0gZmFsc2U7XG5cdGNvbnNvbGUubG9nKCdEbyBub3RoaW5nIScpO1xuXHQvLyB0aGlzLmNiKCk7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==