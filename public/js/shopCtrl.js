angular.module('app')
.controller('shopCtrl', function($scope, shopService){

  $scope.getSearch = function(query){
    var promise = shopService.getSearch(query);
    promise.then(function(results){
      $scope.items = results.data;
      console.log(results.data);
    });
  };

  $scope.getDefaultProducts = function(){
    shopService.getASIN().then(function(results){
      $scope.items = results.data;
      console.log($scope.items);
    });
  };

  $scope.getDefaultProducts();
});
