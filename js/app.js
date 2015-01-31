var app = angular.module('app', ['ngRoute', 'main', 'channel', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		.when('/channel', {
			templateUrl: 'channel.html',
			controller: 'channelController'
		})
		.otherwise({
			redirectTo: '/'
		});
});
