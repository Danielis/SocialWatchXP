// ng-app grabs this in index.html
var app = angular.module('main', []);

// controller for the module above
app.controller('mainController', function($scope){
	var ref = new Firebase("https://shining-heat-9627.firebaseio.com/");
	var sync = $firebase(ref);



	// Data
	$scope.showSideBar = "";
	$scope.sideBarHideText = "display: none;";
	$scope.channelStyle = "";

	$scope.userData = {
		'Channels':["Comedy","Action", "News","USC>UCLA"],
		'MyChannels': ["BeingAwesome","UnityIntroduction"]
	};
	// Ideas: When we do this these have ratings based on user preferences or views or so, this way things they like
	// show up first before others
	// MyChannels are those they favorited, but these are based on how much they few them
	$scope.Channels=[
		{title:"Lakers"},
		{title:"News"},
		{title:"Anime"},
		{title:"Comedy"}
	];
	console.log($scope.Channels);
	$scope.toggleSideBar = function(){
		if($scope.showSideBar == $scope.sideBarHideText){
			$scope.showSideBar = "";
			$scope.channelStyle = "width:";
		}
		else{
			$scope.showSideBar = $scope.sideBarHideText;
		}
	};
});

app.factory('channelApi', function($http){
	return {
		all: function(){
			return $http.get('');
		}
	};
});
