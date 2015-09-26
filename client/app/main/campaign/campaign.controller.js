'use strict';

angular.module('savvyAppApp')
  .controller('CampaignCtrl', function ($scope, $http) {
    $scope.currentStep = 'two';

    $scope.$watch('$parent.sid', function () {
    	$scope.sid = $scope.$parent.sid;
    	init();
    });

    $scope.goStep = function (step) {
    	$scope.currentStep = step;
    };

    var init = function () {
    	
    };
  });
