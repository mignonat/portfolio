angular.module('diploma.directives', [])

    .directive('graduate', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: $rootScope.urlRepAngular + 'diploma/views/graduate.html'
        };
    }])

    .directive('diploma', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: $rootScope.urlRepAngular + 'diploma/views/diploma.html'
        };
    }]);