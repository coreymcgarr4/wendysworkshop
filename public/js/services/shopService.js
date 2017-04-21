angular.module('app')
.service('shopService', function($http){

this.getASIN = function(){
  return $http({
    method: 'GET',
    url: 'http://138.68.244.0/api/productasin'
  })
}

  this.getSearch = function(query){

    return $http({
      method: 'GET',
      url: 'http://138.68.244.0/api/search/' + encodeURIComponent(query)
    })
  }
});
