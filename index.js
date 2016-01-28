exports = module.exports = (function () {

	var request = require('request');
	
	function Slackman (opts) {
		this.hook = opts.hook || '';
		this.debug = opts.debug || false;
		this.username = opts.username || 'Slackman';
		this.message = opts.message || 'Hello! I am the Slackman!';
		this.channel = opts.channel || '#general';
	}

	Slackman.prototype.sendMessage = function (opts) {
		var msg = opts && opts.message ? opts.message : this.message;
		var channel = opts && opts.channel ? opts.channel : this.channel;
		var username = opts && opts.username ? opts.username : this.username;

		this.debug ? console.log('Sending message ' + msg + ' to channel ' + channel) : 0;

		var that = this;

		request({
			method: 'POST',
			json: true,
			url: that.hook,
			headers: { 'Content-Type': 'application/json' },
			body: {
				text: msg,
				channel: channel,
				username: username,
			}
		});
	}

	return Slackman;

}).call(this);

