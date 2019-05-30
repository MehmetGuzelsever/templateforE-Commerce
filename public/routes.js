var app = angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/home', {
        templateUrl: '/views/pages/home.html'
    })
    
    .when('/login', {
        templateUrl: '/views/pages/admin/login.html',
    })

    .otherwise({ redirectTo: '/' });

    $locationProvider

    .html5Mode({
        enabled: true,
        requireBase: false
    })

    .hashPrefix("");   
});


