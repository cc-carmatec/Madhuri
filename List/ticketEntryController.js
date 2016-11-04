(function () {
    'use strict';
    angular.module('app').controller('ticketEntryController', ticketEntryController);

    function ticketEntryController($scope) {
        //$scope.thesc
        $scope.lineGrid = {};
        $scope.addRow = function () {
          var item = { index: 'TEST123'};
          $scope.$broadcast('AddRow', item);
        }
    }
})();
