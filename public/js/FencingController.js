angular.module('olympianApp').controller('FencingController', function($scope, DataService){
  $scope.data=DataService.data;
  DataService.getFencing();
});
