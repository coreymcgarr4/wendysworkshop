angular.module('app')
.controller('mainCtrl', function($scope, mainService){

  $scope.getProducts = function(){
    var promise = mainService.getProducts();

    promise.then(function(results){
      $scope.product = results;
      console.log(results);
    });
  }
});
