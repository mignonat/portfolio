angular.module('ue')

    .controller('ueController', ['$rootScope', 
        function($rootScope) {
            this.ues = $rootScope.uesData ;
        }
    ]) ;