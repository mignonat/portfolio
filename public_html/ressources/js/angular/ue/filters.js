angular.module('ue.filters', ['sharedServices'])
    
    .filter('score', [ 'factLangTranslate', function(factLangTranslate) {
        return function(score, scoreMax) {
            if (score == 0) {
                return factLangTranslate('notYetObtained')
            }
            return ( score + " / " + scoreMax ) ;
        };
    }])

    .filter('ueCatById', [ '$rootScope', 'objectById', function($rootScope, objectById) {
    
        return function(idCategory) {
            return objectById($rootScope["ueCatData"], idCategory).title ;
        } ;
        
    }]) ;