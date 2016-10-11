app.controller("GetController", ['$scope', 'podcasts', 'feed', '$routeParams', 'ngMeta',
  function($scope, podcasts, feed, $routeParams, ngMeta){

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
    //set page title
    ngMeta.setTitle($scope.podcast.name);

    if(res.rss_link){ $scope.getEpisodes(res.rss_link); }
  });
}]);
