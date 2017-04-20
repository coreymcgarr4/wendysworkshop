angular.module('app')
.controller('subCtrl', function($scope, subService){

  $scope.showForm = true;

  $scope.addSubscriber = function(name, email){
    $scope.showForm = false;
    subService.addSubscriber(name, email).then(function(results){
      $scope.subscriber = results.data[0].name;
      console.log($scope.subscriber);
    });
  };
});
