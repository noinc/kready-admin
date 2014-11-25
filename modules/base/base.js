/**
 * Base Module
* Description: This is for generic ui elements such as navigation
 */
(function () {
    var kreadyBase = angular.module('kreadyBase', []);

    /**
     * Left Navigation Directive
     */
    kreadyBase.directive('kreadyLeftNav', function () {
        return {
            restrict: "E",
            templateUrl: "modules/base/left-nav.html"
        };
    });

    /**
     * Top Navifation Directive
     */
    kreadyBase.directive('kreadyTopNav', function () {
        return {
            restrict: "E",
            templateUrl: "modules/base/top-nav.html"
        };
    });

})();
