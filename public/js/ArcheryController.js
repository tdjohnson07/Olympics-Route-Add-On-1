angular.module('olympianApp').controller('ArcheryController', function($scope, DataService){
  $scope.data=DataService.data;
  DataService.getArchery();
});
