app.controller("GetController", ['$scope', 'podcasts', 'feed', '$routeParams', function($scope, podcasts, feed, $routeParams){
  $scope.podcasts = false;

  $scope.getEpisodes = function(urlRss){
    feed.list(urlRss, function(res){
      console.log(res);
    });
  };

  podcasts.get($routeParams.podcastSlug, function(res){
    $scope.podcast = res;
    if(res.rss_link){ $scope.getEpisodes(res.rss_link); }
  });
}]);
