/**
 * Auth Services
 */

angular.module('RDash')
    .service('AuthServices', ['$http', AuthServices]);

function AuthServices($http) {
    this.authenticateUser = function(userData) {
        return $http.post('/users', userData)
            .success(function(data) {
                return data;
            }).error(function(error) {
                alert(error);
            });
    };

    this.addUser = function(userData) {
        return $http.post('/users/adduser', userData)
            .success(function(data) {
                return data;
            }).error(function(error) {
                //alert(error);
            });
    };

    this.getAllUser = function() {
        return $http.get('/users/getAllUser')
            .success(function(data) {
                return data;
            }).error(function(error) {
                //alert(error);
            });
    };
}
