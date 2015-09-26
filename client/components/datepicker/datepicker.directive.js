'use strict';

angular.module('savvyAppApp')
.directive('datepicker', function () {
    return {
        restrict: 'C',
        link: function (scope, elm, attrs) {
            elm.datepicker({
                weekStart: 1,
                autoclose: true,
                todayBtn: true,
                todayHighlight: true,
                color: '{color}'
            });

            scope.$watch(attrs.ngModel, function (newValue) {
                elm.datepicker('setValue', newValue);
            });
        }
    };
});