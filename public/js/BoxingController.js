angular.module('olympianApp').controller('BoxingController', function($scope, DataService){
  $scope.data=DataService.data;
  DataService.getBoxing();
});
