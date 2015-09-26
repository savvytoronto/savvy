'use strict';

angular.module('savvyAppApp')
.controller('NewCollectionCtrl', function ($scope, $http) {

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
  
  $scope.setItem = function (item) {
    $scope.selectedItem = item;
  }
});
