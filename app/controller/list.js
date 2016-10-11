app.controller("ListController", ['$scope', 'podcasts', 'feed', 'ngMeta', function($scope, podcasts, feed, ngMeta){

  ngMeta.setTitle('Lista de Podcasts');
  ngMeta.setTag('description', 'Encontre podcasts focados em programação, tecnologia, ciências da computação e entretenimento geek.');

  $scope.podcasts = {};
  $scope.loader = true;
  $scope.searchform = {};

  (function(){
    var f = localStorage.getItem('searchform');
    if(f){
      $scope.searchform = JSON.parse(f);
    }
  })();

  $scope.stripTags = function(text){
    var regex = /(<([^>]+)>)/ig,
        result = text.replace(regex, "");
        return result;
  };

  $scope.$watch("searchform", function(){
    localStorage.setItem('searchform', JSON.stringify($scope.searchform));
  }, true);

  podcasts.list(function(res){
    $scope.podcasts = res.data;
  });

}]);
