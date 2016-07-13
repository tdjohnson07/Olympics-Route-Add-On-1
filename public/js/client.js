var app = angular.module('olympianApp', ['ngRoute']);

angular.module('olympianApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/weightlifting', {
      templateUrl: 'views/weightlifting.html',
      controller: 'LiftingController'
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

  var configAthletes = {
    method: 'GET',
    url: ''
  };
  function handleFailure(response){
    console.log('fail');
  };


  angular.module('olympianApp').controller('LiftingController', function($scope, $http){
    configAthletes.url = '/olympics/weightlifting';
    $http(configAthletes).then(function(response){
      $scope.athlete = response.data;
    }, handleFailure);
  });

  angular.module('olympianApp').controller('ArcheryController', function($scope, $http){
    configAthletes.url = '/olympics/archery';
    $http(configAthletes).then(function(response){
      $scope.athlete = response.data;
    }, handleFailure);
    });

  angular.module('olympianApp').controller('BoxingController', function($scope, $http){
    configAthletes.url = '/olympics/boxing';
    $http(configAthletes).then(function(response){
      $scope.athlete = response.data;
    }, handleFailure);


  });

  angular.module('olympianApp').controller('TriathlonController', function($scope, $http){
    configAthletes.url = '/olympics/triathlon';
    $http(configAthletes).then(function(response){
      $scope.athlete = response.data;
    }, handleFailure);

  });

  angular.module('olympianApp').controller('FencingController', function($scope, $http){
    configAthletes.url = '/olympics/fencing';
    $http(configAthletes).then(function(response){
      $scope.athlete = response.data;
    }, handleFailure);

  });
