app.controller("GetController", ['$scope', 'podcasts', 'feed', '$routeParams', function($scope, podcasts, feed, $routeParams){
  $scope.podcasts = false;
  $scope.feedlist = [];
  $scope.getTime = function(mydate){
    var d = new Date(mydate);
    return d.getTime();
  }

  $scope.getEpisodes = function(urlRss){
    feed.list(urlRss, function(res){
      $scope.feedlist = res.responseData.feed.entries.slice(0, 9);
    });
  };

  podcasts.get($routeParams.podcastSlug, function(res){
    $scope.podcast = res;
    if(res.rss_link){ $scope.getEpisodes(res.rss_link); }
  });
}]);
