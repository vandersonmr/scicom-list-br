app.factory('feed', function($http){
  return {
    list: function(url, callback){
      $http({
        method: 'GET',
        url: url,
        timeout: 10000,
        params: {}
      }).success(function(data){
        console.log(data);
        callback(data);
      }).error(function(){
        console.warn("error feed");
        callback(false);
      });
    }
  };
});