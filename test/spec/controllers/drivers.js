'use strict';

describe('Controller: driversCtrl', function () {

  // load the controller's module
  beforeEach(module('f1App'));

//   var driversCtrl, scope;

//   // Initialize the controller and a mock scope
//   beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
//     var scope = $rootScope.$new();
    
//     var httpMock = $httpBackend;

//   httpMock.expectJSONP("http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK").respond(
//       {"MRData": {"StandingsTable": {"StandingsLists" : [{"DriverStandings":[
//         {
//           "Driver": {
//               "givenName": 'Sebastian',
//               "familyName": 'Vettel'
//           },
//           "points": "397",
//           "nationality": "German",
//           "Constructors": [
//               {"name": "Red Bull"}
//           ]
//         },
//         {
//           "Driver": {
//               "givenName": 'Fernando',
//               "familyName": 'Alonso'
//           },
//           "points": "242",
//           "nationality": "Spanish",
//           "Constructors": [
//               {"name": "Ferrari"}
//           ]
//         },
//         {
//           "Driver": {
//               "givenName": 'Mark',
//               "familyName": 'Webber'
//           },
//           "points": "199",
//           "nationality": "Australian",
//           "Constructors": [
//               {"name": "Red Bull"}
//           ]
//         }
//       ]}]}}}
//     );

// var driversCtrl = $controller("driversCtrl", {
//   $scope: scope
// });


// httpMock.flush();
// }));

// it('should return a list with three drivers', function (){
//   expect(scope.driversList.length).toBe(3);
// });

// it('should retrieve the family names of the drivers', function (){
//   expect(scope.driversList[0].Driver.familyName).toBe('Vettel');
//   expect(scope.driversList[1].Driver.familyName).toBe('Alonso');
//   expect(scope.driversList[2].Driver.familyName).toBe('Webber');

// });

});



