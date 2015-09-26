'use strict';

angular.module('savvyAppApp')
  .controller('CampaignCtrl', function ($scope, $timeout, $http) {
    $scope.currentStep = 'one';
    $scope.cNum = 1;

    $scope.$watch('$parent.sid', function () {
    	$scope.sid = $scope.$parent.sid;
    	init();
    });

    $scope.goStep = function (step) {
    	$scope.currentStep = step;
        if (step === 'four') {
            $timeout(function () {
                $scope.cNum += 1;
                $scope.goStep('one');
            },2000);
        }
    };
    var generateTempCode = function (length) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789',
            hash = '';

        for (var i = 0; i < length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            hash += chars.substring(rnum,rnum+1);
        }

        return hash;
    };

    $scope.generateCouponCode = function () {
        $scope.couponLoad = 'load';
        $scope.couponCode = generateTempCode(7);
        $timeout(function () {
            $scope.couponLoad = 'finish';
        },2000);
    };

    $scope.type = '';

    $scope.setType = function (type) {
        $scope.type = type;
    };
    var init = function () {
    	
    };
  });
