'use strict';

/**
 * @ngdoc overview
 * @name formula1StandingTestApp
 * @description
 * # formula1StandingTestApp
 *
 * Main module of the application.
 */
angular
  .module('formula1StandingTestApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
