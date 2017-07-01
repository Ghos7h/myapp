/// <reference path="angular.min.js" >
var app = angular.module("Demo", ["ngRoute"])
				 // .directive('myFirstDirective', function(){
				 // 	function linkFunction($scope, elem, attrs) {
				 // 		$scope.name = "Hello World";
				 // 		$scope.changeName = function(newName) {
				 // 			$scope.name = this.controllerSpecificProperty;
				 // 		}
				 // 	} 
				 // 	return{
				 // 		restrict: 'EA',
				 // 		link: linkFunction,
				 // 		scope: true,
				 // 		template: '<span ng-click="changeName()">current name: {{name}}</span>'
				 // 	};
				 // })
				 .directive('myFirstDirective', function(){
				 	
				 	return{
				 		restrict: 'EA',
				 		scope: {name: '@'},
				 		template: ['<p>current name: {{name}}</p>', 'Enter new "name" <input type="text" ng-model="name"></p>'].join()
				 	}
				 })
				 .config(function($routeProvider, $locationProvider) {
				 	$routeProvider.caseInsensitiveMatch=true
				 	$routeProvider
				 	.when("/home", 	{
				 		templateUrl: "Templates/home.html",
				 		controller: "homeController as homeCont"
				 	})
				 	.when("/courses", 	{
				 		templateUrl: "Templates/courses.html",
				 		controller: "coursesController as coursesCont",

				 	})
				 	.when("/students", 	{
				 		templateUrl: "Templates/students.html",
				 		controller: "studentsController as studentsCont"
				 	})
				 	.when("/student/:id", {
				 		templateUrl: "Templates/studentDetail.html",
				 		controller: "studentDetailController as studentDetailCont"
				 	})
				 	.when("/inline", 	{
				 		template: "<h1>inline template</h1>",
				 		controller: "homeController as homeCont"
				 	})
				 	.when("/studentSearch/:name?", {
				 		templateUrl: "Templates/studentSearch.html",
				 		controller: "studentSearchController as studentSearchCont"
				 		// controllerAs: "studentSearchCont"
				 	})
				 	.otherwise({
				 		redirectTo: "/home"
				 	})
				 	$locationProvider.html5Mode(true);
				 })
				 .controller("homeController", function($scope) {
				 	this.message = "Home Page";
				 	$scope.name = "codedam"
				 })
				 .controller("coursesController", function() {
				 	this.courses = ["node", "java", "angular", "sql"];
				 })
				 .controller("studentsController", function($route, $scope, $location) {
				 	// $scope.$on("$routeChangeStart", function(event, next, current) {
				 	// 	if(!confirm("Are u sure u want to navigate to "+next.$$route.originalPath)){
				 	// 		event.preventDefault();
				 	// 	}
				 	// })
				 	$scope.$on("$locationChangeStart", function(event, next, current) {
				 		if(!confirm("Are u sure u want to navigate to "+next)){
				 			event.preventDefault();
				 		}
				 	})
				 	this.searchStudent = function() {
				 		if(this.name) {
				 			$location.url('/studentSearch/'+this.name); 
				 		}
				 		else{
				 			$location.url('/studentSearch');
				 		}
				 	}
				 	this.reloadData = function() {
				 		console.log("In reloadData")
				 		$route.reload();
				 	}

				 	// $scope.students = ["fghj", "fghjk", "vbhnjmk", "cvbn"];
				 	this.students = [{id: 1, name: "fghj"}, {id: 2, name: "fghjk"}, {id: 4, name: "vbhnjmk"}, {id: 5, name: "cvbn"}, {id: 6, name: "jhgf"}, {id: 7, name: "ghosh"}];
				 })
				 .controller("studentDetailController", function($routeParams) {
				 	var students = [{id: 1, name: "fghj"}, {id: 2, name: "fghjk"}, {id: 4, name: "vbhnjmk"}, {id: 5, name: "cvbn"}, {id: 6, name: "jhgf"}, {id: 7, name: "ghosh"}];
				 	console.log("Integer.parseInt($routeParams.id)", typeof $routeParams.id)
				 	for (var i = 0; i < students.length; i++) {
				 		if(students[i].id === parseInt($routeParams.id)) {
				 			this.student = students[i];
				 		}
				 	}
				 })
				 .controller("studentSearchController", function($routeParams){
				 	var searchedStudent = {}, searchedStudents = []
				 	var studentList = [{id: 1, name: "fghj"}, {id: 2, name: "fghjk"}, {id: 4, name: "vbhnjmk"}, {id: 5, name: "cvbn"}, {id: 6, name: "jhgf"}, {id: 7, name: "ghosh"}];
				 	if($routeParams.name) {
				 		for (var i = 0; i < studentList.length; i++) {
					 		if(studentList[i].name.includes($routeParams.name)) {
					 			searchedStudents.push(studentList[i]);
					 		}
					 	}
					 	this.students = searchedStudents;
				 	}
				 	else {
				 		this.students= studentList;
				 	}
				 	
				 })