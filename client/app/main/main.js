'use strict';

angular.module('savvyAppApp')
.config(function ($stateProvider) {
	$stateProvider
	  	.state('main', {
		    url: '/dashboard',
		    templateUrl: 'app/main/main.html',
	  	  	controller: 'MainCtrl'
	  	})
	  	.state('main.campaign', {
		    url: '/campaign',
		    templateUrl: 'app/main/campaign/campaign.html',
	  	  	controller: 'CampaignCtrl'
	  	})
	  	.state('main.collection', {
		    url: '/collection',
		    templateUrl: 'app/main/collection/collection.html',
	  	  	controller: 'CollectionCtrl'
	  	})
	  	.state('main.inventory', {
		    url: '/inventory',
		    templateUrl: 'app/main/inventory/inventory.html',
	  	  	controller: 'InventoryCtrl'
	  	})
});	