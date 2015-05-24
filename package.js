Package.describe({
  name: 'chrisbutler:livestream',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('livestream.js');
  api.exports('Livestream');
});
