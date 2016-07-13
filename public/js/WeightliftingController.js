angular.module('olympianApp').controller('WeightliftingController', function($scope, DataService){
  $scope.data=DataService.data;
  DataService.getLifter();
});
