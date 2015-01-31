angular.module('videoService', [])
.factory('ParseVideo', function() {
	var Video = Parse.Object.extend({
		upvoteVideo: function() {
			this.increment("upVotes");
			this.save(); // ?????????
		}, // end function upvoteVideo
		downvoteVideo: function() {
			this.increment("downVotes", -1);
			this.save();
		} // end function downvoteVideo
	}, {
		// Class methods
		addVideo: function(video) {
			var newVideo = new Video();
			return newVideo.save({
				youtubeId: video.youtubeId,
				videoLength: video.videoLength,
				startTime: video.startTime,
				submittedBy: video.submittedBy,
				thumbnail: video.thumbnail,
				upVotes: 0,
				downVotes: 0
			}, {
				success: function(newVideo) {
					return newVideo;
				} // end function newVideo.save.success
			}); // end return newVideo.save
		} // end function addVideo
	}); // end Parse.Object.extend

	Object.defineProperty(Video.prototype, "youtubeId", {
		get: function() {
			return this.get("youtubeId");
		},
		set: function(youtubeId) {
			this.set("youtubeId", youtubeId);
		}
	}); // end Object.defineProperty(youtubeId)

	Object.defineProperty(Video.prototype, "videoLength", {
		get: function() {
			return this.get("videoLength");
		},
		set: function(videoLength) {
			this.set("videoLength", videoLength);
		}
	}); // end Object.defineProperty(videoLength)

	Object.defineProperty(Video.prototype, "startTime", {
		get: function() {
			return this.get("startTime");
		},
		set: function(startTime) {
			this.set("startTime", startTime);
		}
	}); // end Object.defineProperty(startTime)

	Object.defineProperty(Video.prototype, "submittedBy", {
		get: function() {
			return this.get("submittedBy");
		},
		set: function(submittedBy) {
			this.set("submittedBy", submittedBy);
		}
	}); // end Object.defineProperty(submittedBy)

	Object.defineProperty(Video.prototype, "thumbnail", {
		get: function() {
			return this.get("thumbnail");
		},
		set: function(thumbnail) {
			this.set("thumbnail", thumbnail);
		}
	}); // end Object.defineProperty(thumbnail)

	Object.defineProperty(Video.prototype, "upVotes", {
		get: function() {
			return this.get("upVotes");
		},
		set: function(upVotes) {
			this.set("upVotes", upVotes);
		}
	}); // end Object.defineProperty(upVotes)

	Object.defineProperty(Video.prototype, "downVotes", {
		get: function() {
			return this.get("downVotes");
		},
		set: function(downVotes) {
			this.set("downVotes", downVotes);
		}
	}); // end Object.defineProperty(downVotes)
}); // end .factory('Video')