app.controller("ListController", ['$scope', 'podcasts', 'feed', function($scope, podcasts, feed){
  $scope.podcasts = {};
  $scope.loader = true;
  $scope.searchform = {};

  (function(){
    var f = localStorage.getItem('searchform');
    if(f){
      $scope.searchform = JSON.parse(f);
    }
  })();

  $scope.$watch("searchform", function(){
    localStorage.setItem('searchform', JSON.stringify($scope.searchform));
  }, true);


  podcasts.list(function(res){
    $scope.podcasts = res.data;
  });
}]);
