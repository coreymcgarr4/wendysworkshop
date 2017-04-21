angular.module('app')
.service('subService', function($http){

  this.addSubscriber = function(name, email){
    return $http({
      method: 'POST',
      url: 'http://138.68.244.0/api/subscribers' + '/' + name + '/' + email
    })
  }
})
