/**
 * Auth Services
 */

angular.module('RDash')
    .service('Utils', ['md5', Utils]);

function Utils(md5) {
    this.generateHashPassword = function(password) {
        return md5.createHash(password);
    };
}
