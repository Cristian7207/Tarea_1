angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  //bottom

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs/tabs.html'
    })


      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('ingresar', {
    url: '/ingresar',
    templateUrl: 'templates/ingresar.html',
    controller: 'ingresarCtrl'
  })

  .state('singup', {
    url: '/registro',
    templateUrl: 'templates/singup.html',
    controller: 'singupCtrl'
  })

  .state('categories', {
    url: '/home',
    templateUrl: 'templates/categories.html',
    controller: 'categoriesCtrl'
  })

    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tabs/tab-about.html',
          controller: 'aboutCtrl'
        }
      }})
    .state('tab.categories', {
      url: '/categories',
      views: {
        'tab-categories': {
          templateUrl: 'templates/tabs/tab-categories.html',
          controller: 'categoriesCtrl'
        }
      }})



$urlRouterProvider.otherwise('/login')



});
