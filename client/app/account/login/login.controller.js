'use strict';

angular.module('savvyAppApp')
  .controller('LoginCtrl', function ($scope, Auth, $timeout, $http, $location) {

    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(validUser($scope.user)) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    var validEmail = function (email) {
      var valid = false;
      if (email.indexOf('@') > 0) {
        valid = true;
      }
      return valid;
    };

    var validUser = function (user) {
      return true;
    };

    $scope.checkUser = function () {
      console.log($scope.email);
      if (!$scope.email) {
        $scope.emailError = true;
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
