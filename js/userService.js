angular.module('user', [])
.factory('UserService', function() {
	var User = Parse.User.extend({

	}, {
		getUsers: function() {
			var query = new Parse.Query(User);
			return query.find();
		}
	});

	// username, password, email
	Object.defineProperty(User.prototype, "firstName", {
		get: function() {
			return this.get("firstName");
		},
		set: function(firstName) {
			this.set("firstName", firstName);
		}
	}); // end property User.firstName

	Object.defineProperty(User.prototype, "lastName", {
		get: function() {
			return this.get("lastName");
		},
		set: function(lastName) {
			this.set("lastName", lastName);
		}
	}); // end property User.lastName

	Object.defineProperty(User.prototype, "fullName", {
		get: function() {
			return this.get("fullName");
		},
		set: function(fullName) {
			this.set("fullName", fullName);
		}
	}); // end property User.fullName

	Object.defineProperty(User.prototype, "facebookID", {
		get: function() {
			return this.get("facebookID");
		},
		set: function(facebookID) {
			this.set("facebookID", facebookID);
		}
	}); // end property User.facebookID

	Object.defineProperty(User.prototype, "channels", {

	})
});