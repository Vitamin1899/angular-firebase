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
    var login={};

    $scope.test = function(){
    login.loading = true;
    }

    $scope.login = login;
    $scope.SignIn = function(e) {
            login.loading = true;
            e.preventDefault(); // предотвращаем перезагрузку страницы
            var username = $scope.user.email;
            var password = $scope.user.password;
            loginObj.$authWithPassword({
                    email: username,
                    password: password
                })
                .then(function(user) {
                    login.loading = false;
                    // колбэк запустится при успешной аутентификации аутентификацииSuccess callback
                    console.log('Authentication successful');
                    CommonProp.setUser(user.password.email);
                    $location.path('/welcome');
                }, function(error) {
                    login.loading = false;
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
.directive('laddaLoading', [
    function() {
        return {
            link: function(scope, element, attrs) {
                var Ladda = window.Ladda;
                var ladda = Ladda.create(element[0]);
                // Watching login.loading for change
                scope.$watch(attrs.laddaLoading, function(newVal, oldVal) {
                    // if true show loading indicator
                    if (newVal) {
                        ladda.start();
                    } else {
                        ladda.stop();
                    }
                });
            }
        };
    }
]);
