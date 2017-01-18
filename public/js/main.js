/**
 * Main AngularJS Web Application
 */
var app = angular.module('dashboard', [
  ngRoute
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: 'partials/home.html', controller: 'DashboardController'})
    .otherwise({redirectTo: '/'});
}]);

app.controller('DashboardController', function (/* $scope, $location, $http */) {
  console.log("Dashboard Controller reporting for duty.");
});
