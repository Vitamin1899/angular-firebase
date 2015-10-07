'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home' // подключаем новый модуль
    'myApp.register'  // Newly added register route
    'myApp.welcome'   // Newly added module
]).
config(['$routeProvider', function($routeProvider) {
    // назначаем представление по умолчанию
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
