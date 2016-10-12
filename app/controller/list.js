app.controller("ListController", ['$scope', 'podcasts', 'feed', 'ngMeta', function($scope, podcasts, feed, ngMeta){

  ngMeta.setTitle('Lista de Podcasts');

  $scope.podcasts = [];
  $scope.loaded = false;
  $scope.searchform = {};

  (function(){
    var f = localStorage.getItem('searchform');
    if(f){ $scope.searchform = JSON.parse(f); }
  })();

  $scope.stripTags = function(text){
    var regex = /(<([^>]+)>)/ig,
        result = text.replace(regex, "");
        return result;
  };

  $scope.clearQuery = function(){
    localStorage.removeItem('searchform');
    $scope.searchform = {};
    console.log('cleaned');
  };

  $scope.$watchGroup('searchform', function(){
    console.log($scope.searchform);
    localStorage.setItem('searchform', JSON.stringify($scope.searchform));
  }, true);

  podcasts.list(function(res){
    if(res.data){ $scope.podcasts = res.data; $scope.loaded = true; }
  });

}]);
