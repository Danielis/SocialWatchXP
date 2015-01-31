var app = angular.module('youtubeApp', ['youtube-player', 'youtubeApi']);

// app.run(function($rootScope, youtubeApiService) {
// 	console.log('here2');
// });

app.controller('youtubeController', function($scope, youtubeApiService) {
	$scope.youtubeVideo = {
		url: 'https://www.youtube.com/watch?v=HaEbpndntsU&t=0m15s',
		vars: {
			// list: 'PLFYnRxXsKaZVOpsTm3YSsqVzqclnq0x8W',
			controls: 0,
			autoplay: 1,
			disablekb: 1,
			showinfo: 0
		}
	};

	// youtubeApiService.getVideos('PLFYnRxXsKaZVOpsTm3YSsqVzqclnq0x8W').then(function(response) {
	// 	console.log(response);
	// });

	// $scope.test = function() {
	// 	youtubeApiService.addVideo().then(function(response) {
	// 		console.log(response);
	// 	});
	// };
});