exports = module.exports = (function () {

	var request = require('request');
	
	function Slackman (opts) {
		this.hook = opts.hook || '';
		this.debug = opts.debug || false;
	}

	Slackman.prototype.send = function (msg) {
		var that = this;
		this.debug ? console.log('Sending message ' + msg) : 0;
		request({
			method: 'POST',
			json: true,
			url: that.hook,
			headers: { 'Content-Type': 'application/json' },
			body: {
				text: msg || ''
			}
		});
	}

	return Slackman;

}).call(this);

