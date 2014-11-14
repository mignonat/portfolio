angular.module('educations.directives', [])

    .directive('graduate', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: $rootScope.urlRepAngular + 'educations/views/graduate.html'
        };
    }])

    .directive('educations', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: $rootScope.urlRepAngular + 'educations/views/educations.html'
        };
    }]);