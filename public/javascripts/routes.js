angular.module('Noblog')
.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '/templates/posts/index.html'
	});
});
