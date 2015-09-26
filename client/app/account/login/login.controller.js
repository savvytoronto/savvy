'use strict';

angular.module('savvyAppApp')
  .controller('LoginCtrl', function ($scope, Auth, $timeout, $http, $location) {

    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(validUser($scope.user)) {
        Auth.login({
          username: $scope.username,
          password: $scope.password
        })
        .then( function() {
          // Logged in, redirect to home
          $scope.loadScreen = true;
          $timeout(function () {
            $location.path('/dashboard/glance');
          },1500);
          
        })
        .catch( function(err) {
          $scope.loadScreen = true;
          $timeout(function () {
            $location.path('/dashboard/glance');
          },1500);
        });
      }
    };

    var validUser = function (user) {
      return true;
    };

    $scope.checkUser = function () {
      if (!$scope.username) {
        $scope.usernameError = true;
        return;
      }

      $scope.loadUser = 'load';
      //api call here

      //when successful
      $timeout(function () {
        $scope.loadUser = 'success';
      }, 1500);
    };


  });
