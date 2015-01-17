angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  angular.extend($scope, Links);
  $scope.data = {};
  $scope.getLinks().then(function(data) {
    $scope.data.links = data;
  });
});
