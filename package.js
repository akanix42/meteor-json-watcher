Package.describe({
	name: 'nathantreid:json-watcher',
	version: '0.0.1',
	summary: 'Reload Meteor when you make changes to a .json file',
	git: 'https://github.com/nathantreid/meteor-json-watcher.git',
	documentation: 'README.md'
});


Package.registerBuildPlugin({
	name: 'json-watcher-build-plugin',
	use: [
		'ecmascript@0.1.6'
	],
	sources: [
		'plugins.js'
	]
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.0.1');
	api.use('isobuild:compiler-plugin@1.0.0');
});
