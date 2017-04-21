angular.module('app')
.service('messService', function($http){

  this.addMessage = function(name, email, subject, message){
    return $http({
      method: 'POST',
      url: 'http://138.68.244.0/api/messages' + '/' + name + '/' + email + '/' + subject + '/' + message
    })
  }


})
