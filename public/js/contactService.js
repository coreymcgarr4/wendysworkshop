angular.module('app')
.service('contactService', function ($http){

  this.postMessage = function(newMessage){
    return $http.post('/complete', { message: message });
  }
});
