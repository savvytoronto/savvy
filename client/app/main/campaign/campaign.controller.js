'use strict';

angular.module('savvyAppApp')
  .controller('CampaignCtrl', function ($scope, $timeout, $http) {
    $scope.currentStep = 'one';
    $scope.cNum = 1;
    
    $scope.products = [
    { name: 'Blue Pants',
      number: 27381,
      src: 'http://i.imgur.com/ooipbsq.png'},
    { name: 'Grey Pants',
      number: 27381,
      src: 'http://i.imgur.com/gjeOAfW.png'},
    { name: 'Dark Pants',
      number: 27381,
      src: 'http://i.imgur.com/JFzncfu.png'},
    { name: 'Short Pants',
      number: 27381,
      src: 'http://i.imgur.com/SOH1f4B.png'},
    { name: 'Dark Short Pants',
      number: 27381,
      src: 'http://i.imgur.com/mROfzaZ.png'},
    { name: 'Light Short Pants',
      number: 27381,
      src: 'http://i.imgur.com/zDETzjP.png'},
    { name: 'Hoodie',
      number: 27381,
      src: 'http://i.imgur.com/sAOMMer.png'},
    { name: 'Long-Sleeve',
      number: 27381,
      src: 'http://i.imgur.com/7x2VdR6.png'},
    { name: 'Gray Sleeve',
      number: 27381,
      src: 'http://i.imgur.com/Xynchm4.png'},
    { name: 'Suit',
      number: 27381,
      src: 'http://i.imgur.com/JP34QD7.png'},
    { name: 'Light Suit',
      number: 27381,
      src: 'http://i.imgur.com/r4NIu8S.png'},
    { name: 'Gray Suit',
      number: 27381,
      src: 'http://i.imgur.com/QLbLiRZ.png'},
    { name: 'Jacket',
      number: 27381,
      src: 'http://i.imgur.com/6RUVV3g.png'},
    { name: 'Blue Tie',
      number: 27381,
      src: 'http://i.imgur.com/glzvFAf.png'},
    { name: 'Casual Suit',
      number: 27381,
      src: 'http://i.imgur.com/QHFQ9i2.png'},
    { name: 'Red Tie',
      number: 27381,
      src: 'http://i.imgur.com/5PChWMP.png'}
  ];
  
  $scope.products2 = [
    { name: 'Blue Tie',
      number: 27381,
      src: 'http://i.imgur.com/glzvFAf.png'},
      { name: 'Women Red Pants',
      number: 27381,
      src: 'http://i.imgur.com/HIBKPbp.png'}
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
