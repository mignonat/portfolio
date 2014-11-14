angular.module('experiences')

    .controller('experiencesController', ['$rootScope', 
        function($rootScope) {
            this.experiencesGroup = $rootScope.experiencesGroupData ;
        }
    ])
