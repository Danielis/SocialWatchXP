// Add data-ng-controller or so forth for html5 rules

// ng-app grabs this in index.html
var app = angular.module('channel', []);

app.controller('channelController', function($scope, $window, $firebase, chatApi, $interval, youtubeEmbedUtils){

	var ref = new Firebase("https://shining-heat-6104.firebaseio.com/");
	var messages = $firebase(ref);
	// We don't want this here as it pushes this every time controller loads
	// messages.$push(message={channelName:"Lakers",text: "Welcome!",submitter: "Daniel Silva",time: new Date()});
	// This pulls the entire list of messages
	var messageObj = messages.$asObject();
	$scope.messages = messageObj;
	// As you can see the push created something with a unqiue identifier so to filter we need channelName and timestamp
	console.log($scope.messages);

	messageObj.$bindTo($scope, "messages").then(function() {
   		console.log($scope.messages); // { foo: "bar" }
   		// $scope.data.foo = "baz";  // will be saved to Firebase
   		//ref.set({foo: "baz"});   // this would update Firebase and $scope.data
	});
	//messages.$remove();

	$scope.inputText = "";
	$scope.currentChannel = "Lakers";
	$scope.currentUser = "Daniel Silva";


	$scope.channelID= [];
	$scope.genre = "Comedy";
	$scope.showSideBar = "";
	$scope.sideBarHideText = "display: none;";
	$scope.videoHeight = $window.innerHeight;
	$scope.videoWidth = "100%";

	//modal
	$scope.hideModal = "display: none;";
	$scope.hideModalText = "display: none;";
	$scope.showModalText = "";

	$scope.userData = {
		'Channels':["Comedy","Action", "News","USC>UCLA"],
		'MyChannels': ["BeingAwesome","UnityIntroduction"],
		'NextVideos': ["Charlie bit my finger", "UCLA floods", "USC is awesome"]
	};

	$scope.videoCounter = 0;
	$scope.youtubeVideos = [
		'https://www.youtube.com/watch?v=nG2rNBFzkGE',
		'https://www.youtube.com/watch?v=tPEE9ZwTmy0',
		'https://www.youtube.com/watch?v=qBcBwOzUlOk',
		'https://www.youtube.com/watch?v=kfchvCyHmsc',
		'https://www.youtube.com/watch?v=UPKb9z4l7eM',
		'https://www.youtube.com/watch?v=HaEbpndntsU'
	];
	$scope.youtubeUrl = $scope.youtubeVideos[$scope.videoCounter];
	$scope.youtubeId = youtubeEmbedUtils.getIdFromURL($scope.youtubeUrl);

	$scope.youtubeVars = {
		// list: 'PLFYnRxXsKaZVOpsTm3YSsqVzqclnq0x8W',
		controls: 0,
		autoplay: 1,
		disablekb: 1,
		showinfo: 0
	};

	$scope.$on('youtube.player.ended', function($event, player) {
		$scope.videoCounter++;
		if($scope.videoCounter < $scope.youtubeVideos.length) {
			$scope.youtubeUrl = $scope.youtubeVideos[$scope.videoCounter];
		}
	});



	var channelRef = new Firebase("https://shining-heat-9627.firebaseio.com/");
	var channels = $firebase(channelRef);
	// We don't want this here as it pushes this every time controller loads
	// messages.$push(message={channelName:"Lakers",text: "Welcome!",submitter: "Daniel Silva",time: new Date()});
	// This pulls the entire list of messages
	var channelObj = channels.$asObject();
	$scope.channels = channelObj;
	// As you can see the push created something with a unqiue identifier so to filter we need channelName and timestamp
	console.log($scope.channels);

	channelObj.$bindTo($scope, "channels").then(function() {
   		console.log($scope.channels); // { foo: "bar" }
   		// $scope.data.foo = "baz";  // will be saved to Firebase
   		//channelRef.set({foo: "baz"});   // this would update Firebase and $scope.data
	});

	$scope.createChannel = function (channel) {
		channels.$push(channel={name: channel.name, description: channel.description, date_created: Date.now() });
	};


	$scope.toggleSideBar = function(){
		if($scope.showSideBar == $scope.sideBarHideText){
			$scope.showSideBar = "";
		}
		else{
			$scope.showSideBar = $scope.sideBarHideText;
		}
		console.log($window.innerHeight);
	};

	$scope.clickLike = function(){
		//do something when like is pressed
		console.log("clicked like");

	};
	$scope.clickDislike = function(){
		//do something when like is pressed
		console.log("clicked dislike");

	};

	$scope.toggleModal = function(){
		//bring up modal
		if($scope.hideModal == $scope.showModalText){
			$scope.hideModal = $scope.hideModalText;
		}
		else{
			$scope.hideModal = $scope.showModalText;
		}
	};

	$scope.addVideo = function(){
		//do something to add a video

	};

	$scope.submitMessage = function(){
		messages.$push(message={channelName: $scope.currentChannel,text: $scope.inputText,submitter: $scope.currentUser,time: new Date()});
		console.log($scope.inputText);
	};
});

app.factory('chatApi', function($http){
	return {
		all: function(){
			return $http.get('');
		}
	};
});