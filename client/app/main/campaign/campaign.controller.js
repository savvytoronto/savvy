'use strict';

angular.module('savvyAppApp')
  .controller('CampaignCtrl', function ($scope, $http) {
    $scope.currentStep = 'one';

    $scope.$watch('$parent.sid', function () {
    	$scope.sid = $scope.$parent.sid;
    	init();
    });

    $scope.goStep = function (step) {
    	$scope.currentStep = step;
    };

    $scope.type = '';

    $scope.setType = function (type) {
        $scope.type = type;
    };
    var init = function () {
    	
    };
  });
