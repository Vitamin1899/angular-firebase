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
['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
    var firebaseObj = new Firebase("https://blinding-torch-7780.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);

    $scope.user = {};
    $scope.SignIn = function(event) {
            event.preventDefault(); // предотвращаем перезагрузку страницы
            var username = $scope.user.email;
            var password = $scope.user.password;
            loginObj.$authWithPassword({
                    email: username,
                    password: password
                })
                .then(function(user) {
                    // колбэк запустится при успешной аутентификации аутентификацииSuccess callback
                    console.log('Authentication successful');
                    CommonProp.setUser(user.password.email);
                    $location.path('/welcome');
                }, function(error) {
                    console.log('Authentication failure');
                });
        // логика авторизации
        }
}])

.service('CommonProp', function() {
    var user = '';

    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
});
