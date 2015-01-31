var app = angular.module('app', ['ngRoute', 'main', 'channel', 'firebase', 'youtube-player']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		.when('/channel/:channelID', {
			templateUrl: 'channel.html',
			controller: 'channelController'
		})
		.otherwise({
			redirectTo: '/'
		});
});
