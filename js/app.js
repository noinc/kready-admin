/* 
 * No.1nc 2014 - www.noinc.com
 * App Kernel - Load All Dependencies Here
 */

(function() {
angular.module('kready', ['ngRoute'])
            .config(['$routeProvider', '$locationProvider',
                function ($routeProvider, $locationProvider) {
                    $routeProvider
                            .when('/tenants', {
                                templateUrl: 'html/tenants/tenants.html'

                            })
                            .when('/assessments', {
                                templateUrl: 'html/assessments/assessments.html'

                            });

                }]);
    
})();
