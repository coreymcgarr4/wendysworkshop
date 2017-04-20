angular.module('app')
.service('messService', function($http){

  this.addMessage = function(name, email, subject, message){
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/messages' + '/' + name + '/' + email + '/' + subject + '/' + message
    })
  }


})
