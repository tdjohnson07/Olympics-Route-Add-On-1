angular.module('olympianApp').factory('DataService', function($http){
  var data={};
  function handleSuccess(response){
    data.athlete = response.data;
  }
  function handleFailure(response){
    console.log("failed");
  }
  function getArchery(){
    $http.get('/olympics/archery').then(handleSuccess, handleFailure);
  }
  function getBoxing(){
    $http.get('/olympics/boxing').then(handleSuccess, handleFailure);
  }
  function getFencing(){
    $http.get('/olympics/fencing').then(handleSuccess, handleFailure);
  }
  function getTriathlete(){
    $http.get('/olympics/triathlon').then(handleSuccess, handleFailure);
  }
  function getLifter(){
    $http.get('/olympics/weightlifting').then(handleSuccess, handleFailure);
  }
  return{
    data: data,
    getArchery: getArchery,
    getBoxing: getBoxing,
    getFencing: getFencing,
    getTriathlete: getTriathlete,
    getLifter: getLifter
  }
});
