/ Add data-ng-controller or so forth for html5 rules

// ng-app grabs this in index.html
var app = angular.module('gradebook', []);

// controller for the module above
app.controller('GradebookController', function($scope, gradesApi, gradeStats){
	// Data
	$scope.students = [];

	// response contains data, status, headers, config
	gradesApi.all().then(function(response){
		$scope.students = response.data;

		$scope.gradeAverage= gradeStats.getAverage($scope.students);
		$scope.gradeHighest = gradeStats.getHighest($scope.students);
		$scope.gradeLowest = gradeStats.getLowest($scope.students);
	});

	$scope.$watch('students', function(){
		$scope.gradeAverage = gradeStats.getAverage($scope.students);
	}, true);

	$scope.addStudent = function(){
		$scope.students.push($scope.gradeForm);

		$scope.gradeForm=  null;
	};
});

// create a custom service called in controller
app.factory('gradesApi', function($http){
	return {
		all: function(){
			return $http.get('grades.json');
		}
	}
});

app.factory('gradeStats', function(){
	function getAverage(students){
		var sum = 0;
		students.forEach(function(student){
			sum += student.grade;
		});
		return sum/students.length;
	}

	function getHighest(students){
		var highest = students[0];
		students.forEach(function(student){
			if(highest.grade < student.grade){
				highest = student;
			}
		});
		return highest.grade;
	}

	function getLowest(students){
		var smallest = students[0];
		students.forEach(function(student){
			if(smallest.grade > student.grade){
				smallest = student;
			}
		});
		return smallest.grade;
	}

	return  {
		getAverage: getAverage,
		getHighest: getHighest,
		getLowest: getLowest
	}
});