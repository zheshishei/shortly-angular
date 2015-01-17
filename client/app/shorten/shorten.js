angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  angular.extend($scope, Links);

  $scope.submitLink = function(link) {
    $scope.addLink(link);
    $scope.link = '';
  }
});
