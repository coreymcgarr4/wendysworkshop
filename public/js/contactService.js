angular.module('app')
.service('contactService', function ($http){

  this.postMessage = function(message){
    return $http.post('/complete', { message: message });
  }
});
