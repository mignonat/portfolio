angular.module('diploma')

    .controller('diplomaController', ['$rootScope', function($rootScope) {
        this.diploma = $rootScope.diplomaData ;
    }]);