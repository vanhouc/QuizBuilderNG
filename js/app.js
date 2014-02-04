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
  $routeProvider.when('/default', {templateUrl: 'partials/default.html', controller: 'defaultCtrl'}).
  when('/logout', {templateUrl: 'partials/logout.html', controller: 'logoutCtrl'}).
  when('/admin_home', {templateUrl: 'partials/admin_home.html', controller: 'adminHomeCtrl'}).
  when('/user_home', {templateUrl: 'partials/user_home.html', controller: 'userHomeCtrl'}).
  when('/admin_users', {templateUrl: 'partials/admin_users.html', controller: 'adminUsersCtrl'}).
  when('/users_quizzes', {templateUrl: 'partials/users_quizzes.html', controller: 'usersQuizzesCtrl'}).
  otherwise({redirectTo: '/default'});
}]);
