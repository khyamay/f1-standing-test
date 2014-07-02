'use strict';

angular.module('f1App.controllers')
  .controller('driversCtrl', function ($scope, $routeParams, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver){
    	var re = new RegExp($scope.nameFilter, 'i');
    	return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers()
    	.success(function (response){
    		$scope.driversList= response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    	});
  });
