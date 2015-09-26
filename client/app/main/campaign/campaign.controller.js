'use strict';

angular.module('savvyAppApp')
  .controller('CampaignCtrl', function ($scope, $timeout, $http) {
    $scope.currentStep = 'one';
    $scope.cNum = 1;
    
    $scope.products = [
    { name: 'Blue Pants',
      number: 27381,
      src: '1.png'},
    { name: 'Grey Pants',
      number: 27381,
      src: '2.png'},
    { name: 'Dark Pants',
      number: 27381,
      src: '3.png'},
    { name: 'Short Pants',
      number: 27381,
      src: '4.png'},
    { name: 'Dark Short Pants',
      number: 27381,
      src: '6.png'},
    { name: 'Light Short Pants',
      number: 27381,
      src: '7.png'},
    { name: 'Hoodie',
      number: 27381,
      src: '8.png'},
    { name: 'Long-Sleeve',
      number: 27381,
      src: '9.png'},
    { name: 'Gray Sleeve',
      number: 27381,
      src: '10.png'},
    { name: 'Suit',
      number: 27381,
      src: '11.png'},
    { name: 'Light Suit',
      number: 27381,
      src: '12.png'},
    { name: 'Gray Suit',
      number: 27381,
      src: '13.png'},
    { name: 'Jacket',
      number: 27381,
      src: '14.png'},
    { name: 'Blue Tie',
      number: 27381,
      src: '18.png'},
    { name: 'Casual Suit',
      number: 27381,
      src: '16.png'},
    { name: 'Red Tie',
      number: 27381,
      src: '17.png'}
  ];
  
  $scope.products2 = [
    { name: 'Blue Tie',
      number: 27381,
      src: '18.png'},
      { name: 'Women Red Pants',
      number: 27381,
      src: '19.png'}
  ];
    
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
