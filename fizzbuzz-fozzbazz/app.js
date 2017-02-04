angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function(){
    return{
      cnt: 0,
      increment: function(){
        cnt+=1;
      }
    }
  })
  .controller('fizzbuzzCtrl', function($scope,counter){
    $scope.display = counter.cnt;
    
  })
  .controller('fozzbazzCtrl', function(){

  });
