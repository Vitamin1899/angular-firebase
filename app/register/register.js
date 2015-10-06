'use strict';

angular.module('myApp.register', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

// Register controller
.controller('RegisterCtrl', ['$scope',function($scope) {
        $scope.mesg = 'Hello';
        console.log('me in hello');
}]);
