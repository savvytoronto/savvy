'use strict';

angular.module('savvyAppApp')
.config(function ($stateProvider) {
	$stateProvider
	  	.state('main', {
		    url: '/dashboard',
		    templateUrl: 'app/main/main.html',
	  	  	controller: 'MainCtrl'
	  	})
	  	.state('main.glance', {
		    url: '/glance',
		    templateUrl: 'app/main/glance/glance.html',
	  	  	controller: 'GlanceCtrl'
	  	})
	  	.state('main.campaign', {
		    url: '/campaign',
		    templateUrl: 'app/main/campaign/campaign.html',
	  	  	controller: 'CampaignCtrl'
	  	})
	  	.state('main.newcollection', {
		    url: '/collection/new',
		    templateUrl: 'app/main/collection/new/newcollection.html',
	  	  	controller: 'NewCollectionCtrl'
	  	})
		  .state('main.managecollection', {
		    url: '/collection/manage',
		    templateUrl: 'app/main/collection/manage/managecollection.html',
	  	  	controller: 'ManageCollectionCtrl'
	  	});
	  	// .state('main.inventory', {
		  //   url: '/inventory',
		  //   templateUrl: 'app/main/inventory/inventory.html',
	  	//   	controller: 'InventoryCtrl'
	  	// })
});	