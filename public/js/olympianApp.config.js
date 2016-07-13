angular.module('olympianApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/weightlifting', {
      templateUrl: 'views/weightlifting.html',
      controller: 'WeightliftingController'
    })
    .when('/archery', {
      templateUrl: 'views/archery.html',
      controller: 'ArcheryController'
    })
    .when('/boxing', {
      templateUrl: 'views/boxing.html',
      controller: 'BoxingController'
    })
    .when('/triathlon', {
      templateUrl: 'views/triathlon.html',
      controller: 'TriathlonController'
    })
    .when('/fencing', {
      templateUrl: 'views/fencing.html',
      controller: 'FencingController'
    })
    $locationProvider.html5Mode(true);
  });
