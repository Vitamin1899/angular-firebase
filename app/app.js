'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.register',
    'myApp.welcome',
    'myApp.addPost'
]).
config(['$routeProvider', function($routeProvider) {
    // назначаем представление по умолчанию
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
