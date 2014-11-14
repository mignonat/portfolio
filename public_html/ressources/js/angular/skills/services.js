angular.module('skills.services', ['sharedServices'])

    .factory('getSkillFromIdAndCategory', ['$rootScope', 'objectById', 
        function($rootScope, objectById) {
            
            return function(choosenCat, skillId) {
                
                var datas = $rootScope['skillCatData'] ;
                
                for (var i=0 ; i< datas.length ; i++) {
                    var category = datas[i] ;
                    if (category.category === choosenCat) {
                        return objectById(category.skills, skillId) ;
                    }
                }
                
                return cat + " not found !" ;
                
            } ;
        }
    ]);
    