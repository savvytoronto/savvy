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
          $location.path('/dashboard/glance');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
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
      }, 2000);
    };


  });
