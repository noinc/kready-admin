(function() {
/**
 * Master Route Config
 * 
 */
var kreadyRoute = angular.module('kreadyRoute', ['ngRoute']);

kreadyRoute.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/tenants', {
        templateUrl: 'modules/tenants/tenants.html'

      })
      .when('/assessments', {
        templateUrl: 'modules/assessments/assessments.html'

      });

  }]);


})();
