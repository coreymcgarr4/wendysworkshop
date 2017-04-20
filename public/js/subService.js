angular.module('app')
.service('subService', function($http){

  this.addSubscriber = function(name, email){
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/subscribers' + '/' + name + '/' + email
    })
  }


})
