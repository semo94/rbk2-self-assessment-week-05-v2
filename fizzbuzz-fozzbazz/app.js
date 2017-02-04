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
      return cnt;
    }
  }
})
.controller('fizzbuzzCtrl', function($scope,counter){
  $scope.increment = function(){
    counter.increment();
    if(counter.cnt % 3 === 0 && counter.cnt % 5 ===0){
      $scope.display = "FizzBuzz";
    }else if(counter.cnt % 3 === 0){
      $scope.display = "Fizz";
    }else if(counter.cnt % 5 === 0){
      $scope.display = "Buzz";
    }
  }
})
.controller('fozzbazzCtrl', function($scope,counter){
  $scope.increment = function(){
    counter.increment();
    if(counter.cnt % 4 === 0 && counter.cnt % 6 ===0){
      $scope.display = "FozzBazz";
    }else if(counter.cnt % 4 === 0){
      $scope.display = "Fozz";
    }else if(counter.cnt % 6 === 0){
      $scope.display = "Bazz";
    }
  }
});
