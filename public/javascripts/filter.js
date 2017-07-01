/// <reference path="script.js"/>

myApp.filter("gender", function(){
	return function(gender) {
		switch(gender) {
			case 1: return "Male";
			case 2: return "Female";
			case 3: return "Cannot Disclosed";
		}
	}
});
myApp.filter("id", function(){
	return function(gender) {
		switch(gender) {
			case "jack": return 1;
			case "bon": return 2;
			case "kick": return 4;
			case "rick": return 5;
			case "hugo": return 6;
		}
	}
})
