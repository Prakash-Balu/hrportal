/**
 * Login Controller
 */

angular.module('RDash')
    .controller('LoginCtrl', ['$scope', '$location', 'AuthServices', '$http', 'toaster', 'Utils', LoginCtrl]);

function LoginCtrl($scope, $location, AuthServices, $http, toaster, Utils) {
    $scope.users = [];

    $scope.init = function() {
        $scope.user = {
            name: '',
            password: ''
        };
    };

    $scope.loginUser = function(userData) {
        if( userData.name == '' || userData.password == '' ) {
            toaster.pop({
                type: 'error',
                body: 'Please fill out all fields!...',
                timeout: 1000
            });
        } else {
            var userInfo = {
                username: userData.name,
                password: Utils.generateHashPassword(userData.password)
            };
            AuthServices.authenticateUser(userInfo)
                .success(function(data) {
                    if ( data.code == 200 ) {
                      if( data.userdata.role_name == 'admin' ) {
                          $location.path('/admin/dashboard');
                        } else if( data.userdata.role_name == 'user' ) {
                            $location.path('/users/dashboard');
                        }
                    } else {
                        toaster.pop({
                            type: 'error',
                            body: data.message,
                            timeout: 1000
                        });
                    }
                }).error(function(error) {
                    console.log(error);
                });
        }

    };

    //Call function initialization
    $scope.init();
}
