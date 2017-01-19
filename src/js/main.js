'use strict';

var angular = require('angular');
require('angular-route');

var firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCittNEnyew7n3TEB9RKKdCsHynlV6dO1M",
  authDomain: "myfinance-kpi-dashboard.firebaseapp.com",
  databaseURL: "https://myfinance-kpi-dashboard.firebaseio.com",
  storageBucket: "myfinance-kpi-dashboard.appspot.com",
  messagingSenderId: "510199120451"
};
firebase.initializeApp(config);

var app = angular.module('dashboard', [
  'ngRoute'
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
