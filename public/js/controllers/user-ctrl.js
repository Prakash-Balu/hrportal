/**
 * User Controller
 */

angular.module('RDash')
  .controller('UserCtrl', ['$scope', '$location', 'AuthServices', UserCtrl]);

function UserCtrl($scope, $location, AuthServices) {
  $scope.users = [];

  $scope.init = function() {
    $scope.getAllUser();
  };

  $scope.getAllUser = function() {
    AuthServices.getAllUser()
    .success(function(data){
      console.log(data);
      $scope.users = data.userdata
    }).error(function(error){
    	alert(error);
    });
  };

  //Call function initialization
  $scope.init();
}
