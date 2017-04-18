angular.module('app')
.service('shopService', function($http){

  // this.getProducts = function(){
  // return $http({
  //   method: 'GET',
  //   url: `http://webservices.amazon.com/onca/xml
  //         Service=AWSECommerceService&
  //         AWSAccessKeyId=AKIAJ3AGO5W5255FD2CA&
  //         AssociateTag=005282830887&
  //         Operation=ItemSearch&
  //         Brand=Lacoste&
  //         Availability=Available&
  //         SearchIndex=FashionWomen&
  //         Keywords=shirts
  //         &Timestamp=[YYYY-MM-DDThh:mm:ssZ]
  //         &Signature=[Request Signature]`
  //   });
  // };

  this.getSearch = function(query){

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/search/' + encodeURIComponent(query)
    })
  }
});
