angular.module('app')
.controller('shopCtrl', function($scope, shopService){

  $scope.showError = true;
  $scope.error = "Unfortunately your search did not return any results within Wendy's Workshop.";

  $scope.getSearch = function(query){
    var promise = shopService.getSearch(query);
    promise.then(function(results){
      if (results.data[0].Error){
        $scope.showError = false;
      } else {
        $scope.items = results.data;
	$scope.showError= true;
        console.log(results.data);
        $scope.showError = true;
      }
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
