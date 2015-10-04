'use strict';

angular.module('savvyAppApp')
  .controller('GlanceCtrl', function ($scope, $timeout, $http) {
    $scope.currentStep = 'two';

    

    $scope.goStep = function (step) {
    	$scope.currentStep = step;
    };

    $scope.campaigns = [
    {
        name: 'Summer Special',
        collections: [
        {
            name: 'New Collection 1',
            products: [],
            is_active: false
        },{
            name: 'New Collection 2',
            products: [],
            is_active: true
        },{
            name: 'New Collection 3',
            products: [],
            is_active: false
        },{
            name: 'New Collection 4',
            products: [],
            is_active: true
        }],
        budget: 1100,
        duration_type: 'Discrete',
        is_active: false
    },{
        name: 'Fall Special',
        collections: [
        {
            name: 'New Collection 1',
            products: [],
            is_active: false
        },{
            name: 'New Collection 2',
            products: [],
            is_active: true
        },{
            name: 'New Collection 3',
            products: [],
            is_active: false
        },{
            name: 'New Collection 4',
            products: [],
            is_active: true
        }],
        budget: 350,
        duration_type: 'Continuous',
        is_active: true
    },{
        name: 'Winter Special',
        collections: [
        {
            name: 'New Collection 1',
            products: [],
            is_active: false
        },{
            name: 'New Collection 2',
            products: [],
            is_active: true
        },{
            name: 'New Collection 3',
            products: [],
            is_active: false
        },{
            name: 'New Collection 4',
            products: [],
            is_active: true
        }],
        budget: 400,
        duration_type: 'Staggered',
        is_active: true
    },{
        name: 'Spring Special',
        collections: [
        {
            name: 'New Collection 3',
            products: [],
            is_active: false
        },{
            name: 'New Collection 2',
            products: [],
            is_active: true
        },{
            name: 'New Collection 5',
            products: [],
            is_active: false
        },{
            name: 'New Collection 6',
            products: [],
            is_active: true
        }],
        budget: 700,
        duration_type: 'Staggered',
        is_active: false
    }]


    var usersPieChart = function () {
        var data = [
                {
                    value: 33,
                    color: '#46BFBD',
                    highlight: '#5AD3D1',
                    label: 'Other User'
                },
                {
                    value: 23,
                    color: '#34AAD9',
                    highlight: '#34AAD9',
                    label: 'User Paid'
                }
            ];
        var ctx = document.getElementById('usersPie').getContext('2d');
        var myPieChart = new Chart(ctx).Pie(data);
        document.getElementById('usersLegend').innerHTML = myPieChart.generateLegend();
    };

    var productssPieChart = function () {
        var data = [
                {
                    value: 134,
                    color: '#FDB45C',
                    highlight: '#FFC870',
                    label: 'Product Sold'
                },
                {
                    value: 479,
                    color: '#46BFBD',
                    highlight: '#5AD3D1',
                    label: 'Product Launching'
                },
                {
                    value: 217,
                    color:'#F7464A',
                    highlight: '#FF5A5E',
                    label:'Product Ordered'
                }
            ];
        var ctx = document.getElementById('productsPie').getContext('2d');
        var myPieChart = new Chart(ctx).Pie(data);
        document.getElementById('productsLegend').innerHTML = myPieChart.generateLegend();
    };

    var init = function () {
    	usersPieChart();
        productssPieChart();
        var getRatio = 33;
        var budget = 330;
        var returnRatio = 15.03;

        var ratioToday = new CountUp('ratio', 0, getRatio,0,2.5, {suffix : '%'});
        var budgetToday = new CountUp('budget', 0, budget,0,2.5, {prefix : '$'});
        var rorToday = new CountUp('return', 0, returnRatio,0,2.5, {suffix : '%'});
        
        rorToday.start();
        ratioToday.start();
        budgetToday.start();
    };

    $scope.$watch('$parent.sid', function () {
        $scope.sid = $scope.$parent.sid;
        init();
    });
  });
