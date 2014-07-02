'use strict';

angular
  .module('f1App', [
    'f1App.controllers'
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/drivers', {
        templateUrl: 'views/drivers.html',
        controller: 'driversCtrl'
      })
      .when('/drivers/:id', {
        templateUrl: 'views/driver.html',
        controller: 'driverCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
