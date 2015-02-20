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