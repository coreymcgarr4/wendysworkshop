angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    templateUrl: '../views/home.html',
    url: '/'
  })
  .state('shop', {
    templateUrl: '../views/shop.html',
    url: '/shop',
    // controller: 'shopCtrl'
  })
  .state('about', {
    templateUrl: '../views/about.html',
    url: '/about'
  })
  .state('contact', {
    templateUrl: '../views/contact.html',
    url: '/contact',
    controller: 'messCtrl'
  })
  .state('cart', {
    templateUrl: '../views/cart.html',
    url: '/cart'
  })
  .state('contact-complete', {
    templateUrl: '../views/contact-complete.html',
    url: '/complete'
  })
  .state('subscribe', {
    templateUrl: '../views/subscribe.html',
    url: '/subscribe',
    controller: 'subCtrl'
  });

  $urlRouterProvider.otherwise('/');

});
