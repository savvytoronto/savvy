'use strict';

angular.module('savvyAppApp')
.config(function ($stateProvider) {
	$stateProvider
	  	.state('main', {
		    url: '/',
		    templateUrl: 'app/main/main.html',
	  	  	controller: 'MainCtrl'
	  	});
});	