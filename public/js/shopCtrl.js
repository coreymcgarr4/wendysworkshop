angular.module('app')
.controller('shopCtrl', function($scope, shopService){

  $scope.getProducts = function(){
    var promise = shopService.getProducts();

    promise.then(function(results){
      $scope.product = results;
      console.log(results);
    });
  }
});
