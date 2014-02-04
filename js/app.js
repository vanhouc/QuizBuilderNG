'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/default', {templateUrl: 'partials/default.html', controller: 'defaultCtrl'});
  $routeProvider.when('/logout', {templateUrl: 'partials/logout.html', controller: 'logoutCtrl'});
  $routeProvider.otherwise({redirectTo: '/default'});
}]);
