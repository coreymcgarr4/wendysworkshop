angular.module('app')
.controller('messCtrl', function($scope, messService){

  $scope.showForm = true;

  $scope.addMessage = function(name, email, subject, message){
    $scope.showForm = false;
    messService.addMessage(name, email, subject, message).then(function(results){
     console.log(results);
	 $scope.sender = name;
    });
  };
});
