angular.module('sharedFilter', ['sharedServices'])

    .filter('translate', [ 'factLangTranslate', function(factLangTranslate) {
        return function(fieldToTranslate) {
            return factLangTranslate(fieldToTranslate) ;
        };
    }])

    .filter('dateTranslate', [ '$rootScope', function($rootScope) {
    
        return function(date) {
            
            if (!date) { return ""; } 
            
            switch ($rootScope.currentLang) {
                case 'fr' : return date.substring(3,5) + "/" + date.substring(0,2) + "/" + date.substring(6, date.length) ;
                default : return date ;
            }
            
        } ;
    }]) ;