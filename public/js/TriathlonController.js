angular.module('olympianApp').controller('TriathlonController', function($scope, DataService){
  $scope.data=DataService.data;
  DataService.getTriathlete();
});
