'use strict';

angular.module('savvyAppApp')
  .controller('MainCtrl', function ($scope, Auth, $http) {
    Auth.getCurrentUserAsync(function (currentUser) {
      $scope.currentUser = currentUser;
      $scope.sid = currentUser.store_id;
    });
  });
