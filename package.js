Package.describe({
  name: 'chrisbutler:livestream',
  version: '0.0.1',
  summary: 'An NPM/Meteor package for the New Livestream API',
  git: 'https://github.com/chrisbutler/livestream',
  documentation: 'README.md'
});

Npm.depends({request: "2.55.0"});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.use('underscore');
  api.addFiles('livestream.js', ['server']);
  api.export('Livestream', ['server']);
});
