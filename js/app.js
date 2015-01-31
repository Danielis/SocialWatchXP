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

app.run([function ($rootScope, $firebase) {
	var ref = new Firebase("https://shining-heat-9627.firebaseio.com/");
	var sync = $firebase(ref);
	$rootScope.fb = $firebase;
}]);