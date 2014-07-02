'use strict';


angular.module('f1App.controllers')
  .controller('driverCtrl', function ($scope, $routeParams, ergastAPIservice) {
   $scope.id = $routeParams.id;
   $scope.races = [];
   $scope.driver = null;

   ergastAPIservice.getDriversDetails($scope.id)
   		.success(function (response){
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
   	});

   	ergastAPIservice.getDriverRaces($scope.id)
   		.success(function (response){
   			$scope.races = response.MRData.RaceTable.Races;
   		});
  });
