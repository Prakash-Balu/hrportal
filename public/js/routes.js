'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
			.state('login', {
				cache: false,
                url: '/',
                templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
            })
			.state('register', {
				cache: false,
                url: '/register',
                templateUrl: 'templates/register.html',
				controller: 'RegisterCtrl'
            })
			.state('admin', {
				cache: false,
                url: '/admin',
                templateUrl: 'templates/admin/home.html',
				controller: 'MasterCtrl'
            })
			.state('admin.dashboard', {
				cache: false,
                url: '/dashboard',
                templateUrl: 'templates/admin/dashboard.html',
                data : { pageTitle: 'Dashboard' }
            })
            .state('admin.tables', {
				cache: false,
                url: '/tables',
                templateUrl: 'templates/admin/tables.html',
                data : { pageTitle: 'Tables' }
            })
            .state('admin.users', {
				cache: false,
                url: '/users',
                templateUrl: 'templates/admin/users.html',
                controller: 'UserCtrl',
                data : { pageTitle: 'Users' }
            })
			.state('users', {
				cache: false,
                url: '/users',
                templateUrl: 'templates/users/home.html',
				controller: 'MasterCtrl'
            })
			.state('users.dashboard', {
				cache: false,
                url: '/dashboard',
                templateUrl: 'templates/users/dashboard.html',
				controller: 'MasterCtrl'
            })
			.state('users.tables', {
				cache: false,
                url: '/tables',
                templateUrl: 'templates/users/tables.html',
				controller: 'MasterCtrl'
            });
    }
]);
