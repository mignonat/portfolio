angular.module('educations')

    .controller('educationsController', ['$rootScope', function($rootScope) {
        this.educations = $rootScope.educationsData ;
    }]);