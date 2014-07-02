
describe('Controller: driverCtrl', function () {

  // load the controller's module
  beforeEach(module('f1App'));

  var driverCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope, $httpBackend, $routeParams) {
    scope = $rootScope.$new();

    routeParams = $routeParams;
    routeParams.id = "vettel";

    httpMock = $httpBackend;

    httpMock.expectJSONP("http://ergast.com/api/f1/2013/drivers/vettel/driverStandings.json?callback=JSON_CALLBACK").respond(
      {"MRData": {"StandingsTable": {"StandingsLists" : [{"DriverStandings":[
        {
          "Driver": {
              "givenName": 'Sebastian',
              "familyName": 'Vettel'
          },
          "points": "397",
          "nationality": "German",
          "Constructors": [
              {"name": "Red Bull"}
          ]
        }
      ]}]}}}
    );

    httpMock.expectJSONP("http://ergast.com/api/f1/2013/drivers/vettel/results.json?callback=JSON_CALLBACK").respond(
      {"MRData": {"RaceTable": {"Races" : [
        {
          "season":"2013",
          "round":"1",
          "raceName":"Australian Grand Prix",
          "Circuit":"Albert Park"
        },
        {
          "season":"2013",
          "round":"2",
          "raceName":"Malaysian Grand Prix",
          "Circuit":"Sepang International Circuit"
        },{
          "season":"2013",
          "round":"3",
          "raceName":"Chinese Grand Prix",
          "Circuit":"Shanghai International Circuit"
        },
        {
          "season":"2013",
          "round":"4",
          "raceName":"Bahrain Grand Prix",
          "Circuit":"Bahrain International Circuit"
        }
      ]}}}
    );

    driverCtrl = $controller('driverCtrl', {
      $scope: scope,
      $routeParams: routeParams
    });

    httpMock.flush();
  }));

  it('should retrieve the nationality of the driver', function () {
    expect(scope.driver.nationality).toBe("German");
  });

  it('should retrieve the list of races of the current year', function (){
    expect(scope.races.length).toBe(4);
  });

  it('should retrieve the list of the races of the current year', function (){
    expect(scope.races[0].raceName).toBe("Australian Grand Prix");
    expect(scope.races[1].raceName).toBe("Malaysian Grand Prix");
    expect(scope.races[2].raceName).toBe("Chinese Grand Prix");
    expect(scope.races[3].raceName).toBe("Bahrain Grand Prix");
  })


});