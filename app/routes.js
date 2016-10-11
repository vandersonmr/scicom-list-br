app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'app/views/list.html',
      controller : 'ListController'
    })
    .when('data/podcast/:podcastSlug', {
      templateUrl : 'views/get.html',
      controller : 'GetController'
    })
    .otherwise ({ redirectTo: '/' });
}]);