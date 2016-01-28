# Slackman
The node module for creating beautiful integrations with Slack. https://slack.com/

## Installation
Simply use npm to install Slackman with all its dependencies. Run `npm install slackman` in your project root and add `--save` after your install command if you want to add the dependency to your package.json.

## Usage
Firstly get your own Slack webhook from your Slack teams page.

Then require the slackman module and create new Slackman object to use it. Of course some of the parameter object properties are optional. Only your own webhook url is required to succesful use of Slackman.

    var Slackman = require('slackman');

    var commentBot = new Slackman({
      hook: 'yourownslackwebhookurl',
      channel: '#yourchannel',
      username: 'Blog comment bot',
      message: 'Default message',
      debug: true
      });

Okay. You are ready to go. You should now to be able to send messages to your slack channel. If you not pass any parameters, will the bot send the default values set.

    commentBot.sendMessage({
      message: 'This is a comment from the site.',
      channel: '#otherchannel',
      username: 'Some other username'
    });
    
