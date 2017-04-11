angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    templateUrl: '../views/home.html',
    url: '/'
  })
  .state('shop', {
    templateUrl: '../views/shop.html',
    url: '/shop'
  })
  .state('about', {
    templateUrl: '../views/about.html',
    url: '/about'
  })
  .state('contact', {
    templateUrl: '../views/contact.html',
    url: '/contact'
  })
  .state('cart', {
    templateUrl: '../views/cart.html',
    url: '/cart'
  })
  .state('contact-complete', {
    templateUrl: '../views/contact-complete.html',
    url: '/complete'
  });

  $urlRouterProvider.otherwise('/');

});
