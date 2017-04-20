angular.module('app')
.service('shopService', function($http){

this.getASIN = function(){
  return $http({
    method: 'GET',
    url: 'http://localhost:3000/api/productasin'
  })
}

  this.getSearch = function(query){

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/search/' + encodeURIComponent(query)
    })
  }
});
