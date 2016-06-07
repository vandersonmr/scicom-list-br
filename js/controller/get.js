app.controller("GetController", ['$scope', 'podcasts', 'feed', '$routeParams', function($scope, podcasts, feed, $routeParams){
  $scope.podcasts = false;
  podcasts.get($routeParams.podcastSlug, function(res){
    $scope.podcast = res;
    console.log(res.name);
  });
}]);
