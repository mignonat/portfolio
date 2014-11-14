angular.module('ue.directives', [])

    .directive('ue', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: $rootScope.urlRepAngular + 'ue/views/ue.html'
        };
    }])

    .directive('ues', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: $rootScope.urlRepAngular + 'ue/views/ues.html'
        };
    }]);