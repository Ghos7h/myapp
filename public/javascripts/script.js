var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope, $http,stringService, $location, $anchorScroll){
		var countries = [
		{
			name: 'Usa',
			cities: [
				{
					name : "abc",

				},
				{
					name : "def",
					
				},
				{
					name : "ghi",
					
				}
			]
		},
		{
			name: 'cnjcmk',
			cities: [
				{
					name : "poi",

				},
				{
					name : "bn",
					
				},
				{
					name : "lk",
					
				}
			]
		},
		{
			name: 'hjkl',
			cities: [
				{
					name : "oiu",

				},
				{
					name : "lkj",
					
				},
				{
					name : "lk",
					
				}
			]
		}
	];
	$scope.countries = countries;

	var technologies = [
		{name: "C#", likes: 0, dislikes: 0},
		{name: "Java", likes: 0, dislikes: 0},
		{name: "Nodejs", likes: 0, dislikes: 0},
		{name: "Angularjs", likes: 0, dislikes: 0}
	];
	$scope.technologies = technologies;
	console.log("technologies ====>", technologies);
	$scope.increamentlikes = function(technology) {
		technology.likes++;
	}

	$scope.increamentDislikes = function(technology) {
		technology.dislikes++;
	}

	var employees = [
		{name: "jack", dob: new Date("November 23, 1980"), gender: "Female", salary: 550000.78, city: "London"},
		{name: "bon", dob: new Date("November 23, 1981"), gender: "Male", salary: 98765.78, city: "Bangalore"},
		{name: "kick", dob: new Date("November 23, 1982"), gender: "Female", salary: 56789.78, city: "London"},
		{name: "rick", dob: new Date("November 23, 1983"), gender: "Male", salary: 9898765.78, city: "Bangalore"},
		{name: "hugo", dob: new Date("November 23, 1984"), gender: "Female", salary: 2345667.78, city: "London"},
	];
	console.log(employees.length)
	$scope.maxLimit = employees.length-1;
	$scope.employees = employees;
	$scope.rowLimit = 3;
	$scope.sortColumn = "name"
	$scope.reverseSort = false;

	$scope.sortData = function(column) {
		$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
		$scope.sortColumn = column;
	}

	$scope.getSortClass = function(column) {
		if(($scope.sortColumn == column)) {
			return $scope.reverseSort ? 'arrow-up' : 'arrow-down'
		}
		return '';
	}

	$scope.search = function(item) {
		if($scope.serchText== undefined) {
			return true;
		}

		if(item.name.toLowerCase().indexOf($scope.serchText.toLowerCase()) !=-1|| item.city.toLowerCase().indexOf($scope.serchText.toLowerCase())!=-1) {
			console.log(item.city.toLowerCase().indexOf($scope.serchText.toLowerCase())!=-1);
			return true;
		}
		return false;
	}

	var employees = [
		{name: "jack",gender: 1, salary: 550000.78, city: "London"},
		{name: "bon", gender: 2, salary: 98765.78, city: "Bangalore"},
		{name: "kick", gender: 1, salary: 56789.78, city: "London"},
		{name: "rick", gender: 2, salary: 9898765.78, city: "Bangalore"},
		{name: "hugo", gender: 3, salary: 2345667.78, city: "London"},
	];

	$scope.employees = employees;
	$scope.employeeView = "./EmployeeTable.html";


	/*http request*/
	// var successResponse = function(response) {
	// 	$log.info('successResponse',response);
	// 	$scope.successResponse = response;
	// };

	// var errorResponse = function(response) {
	// 	$log.info('errorResponse',response);
	// 	$scope.errorResponse = response;
	// }

	// $http({
	// 	method: 'GET',
	// 	url: "api.androidhive.info/contacts/",
	// 	headers: {
	// 	   'Content-Type': undefined
	// 	}
	// }).then(function(successResponse, errorResponse) {

	// })

	$scope.processString = function(input) {
		console.log("input ====>",  input);
		$scope.output = stringService.processingString(input);
	}

	$scope.scrollTo = function(scrollLoaction) {
		$location.hash(scrollLoaction);
		$anchorScroll();
	}
	var courses = [{name: "BE"}, {name: "ME"}, {name: "BCA"}, {name: "MCA"}];
	$scope.courses = courses;
	var students = [{name: "ghjk"}, {name: "ghjk"}, {name: "fghj"}, {name: "ghjk"}];
	$scope.students = students;
});
