angular.module('youtubeApi', [])
.service('youtubeApiService', function($http, $rootScope, $q) {
	this.getVideos = function(playlistId) {
		return $http({
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/playlistItems',
			params: {
				key: 'AIzaSyCZ_J9hsLVxCD4sQwlO37Q1GTRbuylhQWI',
				part: 'snippet,contentDetails,status',
				playlistId: playlistId
			}
		});
	};

	this.addVideo = function() {
		return $http({
			method: 'POST',
			url: 'https://www.googleapis.com/youtube/v3/playlistItems',
			params: {
				key: 'AIzaSyCZ_J9hsLVxCD4sQwlO37Q1GTRbuylhQWI',
				part: 'snippet',
				resource: {
					snippet: {
						playlistId: 'PLFYnRxXsKaZVOpsTm3YSsqVzqclnq0x8W',
						resourceId: {
							videoId: 'JBJ1VPBrCl0',
							kind: 'youtube#video'
						}
					}
				}
			}
		});
	};
});