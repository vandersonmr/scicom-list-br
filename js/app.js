var app = angular.module("devListPodcast", ["ngRoute","ui.bootstrap"]);

app.filter('normalizeWord', function(){
    return function (source) {
        if(!angular.isDefined(source)){ return; }
        var accent = [
            /[\300-\306]/g, /[\340-\346]/g, // A, a
            /[\310-\313]/g, /[\350-\353]/g, // E, e
            /[\314-\317]/g, /[\354-\357]/g, // I, i
            /[\322-\330]/g, /[\362-\370]/g, // O, o
            /[\331-\334]/g, /[\371-\374]/g, // U, u
            /[\321]/g, /[\361]/g, // N, n
            /[\307]/g, /[\347]/g, // C, c
        ],
        noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

        for (var i = 0; i < accent.length; i++){
            source = source.replace(accent[i], noaccent[i]);
        }
        console.log(source);
        return source;
    };
});

app.factory('podcasts', function($http){
  return {
    list: function(callback){
      $http.get('./podcasts.json?'+Date.now()).success(callback);
    }
  };
});

app.controller("ListController", ['$scope', 'podcasts', function($scope, podcasts){
  $scope.podcasts = {};

  podcasts.list(function(res){
    $scope.podcasts = res;
  });

}]);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'views/list.html',
      controller : 'ListController'
    })
    .when('/podcast/:podcastSlug', {
      templateUrl : 'views/get.html',
      controller : 'GetController'
    })
    .otherwise ({ redirectTo: '/' });
}]);