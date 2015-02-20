/**
 * prompt.js - Prompt users if they have not interacted with your page for a given amount of time
 * @version v0.4.0
 * @link https://github.com/mrmartineau/prompt
 * @license MIT
 */
var PROMPT = {
	prompt   : false,
	interval : 6000,
	now      : new Date(),

	init : function() {
		// Do initial check
		this.listener();
		// console.log(this);

		// Listen for mousemove, scroll etc
		if (document.addEventListener) {
			document.addEventListener('mousemove', this.listener, false);
		} else if (document.attachEvent) {
			document.attachEvent('mousemove', this.listener);
		}


		// Run check every n seconds
		setInterval(this.checkForInteraction, this.interval);
	},

	listener : function() {
		PROMPT.now = new Date();
		PROMPT.checkForInteraction();
	},

	// Checks that are done every n seconds
	checkForInteraction : function() {
		var timeCheck = new Date(),
			timeCheckString = timeCheck.getMinutes() + ':' + timeCheck.getSeconds(),
			nowString = PROMPT.now.getMinutes() + ':' + PROMPT.now.getSeconds()
		;

		if ( timeCheckString !== nowString ) {
			PROMPT.promptUser();
		} else {
			// Run this function or do nothing
			// PROMPT.dontPromptUser();
		}
	},

	promptUser : function() {
		this.prompt = true;
		console.log('Do something!');
	},

	dontPromptUser : function() {
		this.prompt = false;
		console.log('Do nothing!');
	}
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21wdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJwcm9tcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUFJPTVBUID0ge1xuXHRwcm9tcHQgICA6IGZhbHNlLFxuXHRpbnRlcnZhbCA6IDYwMDAsXG5cdG5vdyAgICAgIDogbmV3IERhdGUoKSxcblxuXHRpbml0IDogZnVuY3Rpb24oKSB7XG5cdFx0Ly8gRG8gaW5pdGlhbCBjaGVja1xuXHRcdHRoaXMubGlzdGVuZXIoKTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcblxuXHRcdC8vIExpc3RlbiBmb3IgbW91c2Vtb3ZlLCBzY3JvbGwgZXRjXG5cdFx0aWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubGlzdGVuZXIsIGZhbHNlKTtcblx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmF0dGFjaEV2ZW50KSB7XG5cdFx0XHRkb2N1bWVudC5hdHRhY2hFdmVudCgnbW91c2Vtb3ZlJywgdGhpcy5saXN0ZW5lcik7XG5cdFx0fVxuXG5cblx0XHQvLyBSdW4gY2hlY2sgZXZlcnkgbiBzZWNvbmRzXG5cdFx0c2V0SW50ZXJ2YWwodGhpcy5jaGVja0ZvckludGVyYWN0aW9uLCB0aGlzLmludGVydmFsKTtcblx0fSxcblxuXHRsaXN0ZW5lciA6IGZ1bmN0aW9uKCkge1xuXHRcdFBST01QVC5ub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdFBST01QVC5jaGVja0ZvckludGVyYWN0aW9uKCk7XG5cdH0sXG5cblx0Ly8gQ2hlY2tzIHRoYXQgYXJlIGRvbmUgZXZlcnkgbiBzZWNvbmRzXG5cdGNoZWNrRm9ySW50ZXJhY3Rpb24gOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGltZUNoZWNrID0gbmV3IERhdGUoKSxcblx0XHRcdHRpbWVDaGVja1N0cmluZyA9IHRpbWVDaGVjay5nZXRNaW51dGVzKCkgKyAnOicgKyB0aW1lQ2hlY2suZ2V0U2Vjb25kcygpLFxuXHRcdFx0bm93U3RyaW5nID0gUFJPTVBULm5vdy5nZXRNaW51dGVzKCkgKyAnOicgKyBQUk9NUFQubm93LmdldFNlY29uZHMoKVxuXHRcdDtcblxuXHRcdGlmICggdGltZUNoZWNrU3RyaW5nICE9PSBub3dTdHJpbmcgKSB7XG5cdFx0XHRQUk9NUFQucHJvbXB0VXNlcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBSdW4gdGhpcyBmdW5jdGlvbiBvciBkbyBub3RoaW5nXG5cdFx0XHQvLyBQUk9NUFQuZG9udFByb21wdFVzZXIoKTtcblx0XHR9XG5cdH0sXG5cblx0cHJvbXB0VXNlciA6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMucHJvbXB0ID0gdHJ1ZTtcblx0XHRjb25zb2xlLmxvZygnRG8gc29tZXRoaW5nIScpO1xuXHR9LFxuXG5cdGRvbnRQcm9tcHRVc2VyIDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5wcm9tcHQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZygnRG8gbm90aGluZyEnKTtcblx0fVxufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=