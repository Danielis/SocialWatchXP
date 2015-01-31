// Add data-ng-controller or so forth for html5 rules

// ng-app grabs this in index.html
var app = angular.module('channel', []);

app.controller('channelController', function($scope, $window, chatApi){
	$scope.channelID= [];
	$scope.genre = "Comedy";
	$scope.showSideBar = "";
	$scope.sideBarHideText = "display: none;";
	$scope.videoHeight = "100%";
	$scope.videoWidth = "80%";

	$scope.userData = {
		'Channels':["Comedy","Action", "News","USC>UCLA"],
		'MyChannels': ["BeingAwesome","UnityIntroduction"]
	};

	$scope.toggleSideBar = function(){
		if($scope.showSideBar == $scope.sideBarHideText){
			$scope.showSideBar = "";
			$scope.videoWidth="100%"; 
		} 
		else{ 
			$scope.showSideBar = $scope.sideBarHideText;
			$scope.videoWidth="80%";
		}
		console.log($window.innerHeight);
	};
});

app.factory('chatApi', function($http){
	return {
		all: function(){
			return $http.get('');
		}
	}
});

// // controller for the module above
// app.controller('channelVideoController', function($scope, youtubeApi){
// 	// Data
// 	$scope.students = [];

// 	// response contains data, status, headers, config
// 	gradesApi.all().then(function(response){
// 		$scope.students = response.data;

// 		$scope.gradeAverage= gradeStats.getAverage($scope.students);
// 		$scope.gradeHighest = gradeStats.getHighest($scope.students);
// 		$scope.gradeLowest = gradeStats.getLowest($scope.students);
// 	});

// 	$scope.$watch('students', function(){
// 		$scope.gradeAverage = gradeStats.getAverage($scope.students);
// 	}, true);

// 	$scope.addStudent = function(){
// 		$scope.students.push($scope.gradeForm);

// 		$scope.gradeForm=  null;
// 	};
// });

// // create a custom service called in controller
// app.factory('youtubeApi', function($http){
// 	return {
// 		all: function(){
// 			return $http.get('');
// 		}
// 	}
// });