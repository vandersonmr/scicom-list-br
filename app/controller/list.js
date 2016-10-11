app.controller("ListController", ['$scope', 'podcasts', 'feed', function($scope, podcasts, feed){
  $scope.podcasts = {};
  $scope.loader = true;

  podcasts.list(function(res){
    $scope.podcasts = res.data;
  });
}]);
