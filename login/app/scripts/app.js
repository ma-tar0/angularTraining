'use strict';

var app = angular
  .module('loginApp', [
    'ngRoute'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
