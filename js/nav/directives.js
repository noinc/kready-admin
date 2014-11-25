(function () {
    angular.module('kready')
            /**
             * Left Navigation Directive
             */
            .directive('kreadyLeftNav', function () {
                return {
                    restrict: "E",
                    templateUrl: "html/nav/left-nav.html",
                    controller: "LeftNavCtrl"                    
                };
            })
            /**
             * Top Navigation Directive
             */
            .directive('kreadyTopNav', function () {
                return {
                    restrict: "E",
                    templateUrl: "html/nav/top-nav.html"
                };
            });

})();
