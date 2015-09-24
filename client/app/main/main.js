'use strict';

angular.module('savvyAppApp')
.config(function ($stateProvider) {
	$stateProvider
		.state('template', {
			url: '/template',
			templateUrl: 'components/theme/html/index.html'
		})
	  	.state('main', {
		    url: '/',
		    templateUrl: 'app/main/main.html',
	  	  	controller: 'MainCtrl'
	  	});
});	