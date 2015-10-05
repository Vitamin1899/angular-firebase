'use strict';
angular.module('myApp.home', ['ngRoute','firebase'])
    // Определение маршрута
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    // контроллер home
    .controller('HomeCtrl',
    ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
        $scope.SignIn = function(event) {
            event.preventDefault(); // предотвращаем перезагрузку страницы
            var username = $scope.user.email;
            var password = $scope.user.password;
            loginObj.$login('password', {
                email: vitalimarinich@gmail.com,
                password: marinich1986
            })
                .then(function(user) {
                    // колбэк запустится при успешной аутентификации аутентификацииSuccess callback
                    console.log('Authentication successful');
                }, function(error) {
                    console.log('Authentication failure');
                });
        // логика авторизации
        }
        var firebaseObj = new Firebase("https://blinding-torch-7780.firebaseapp.com");
        var loginObj = $firebaseSimpleLogin(firebaseObj);
    }]);
