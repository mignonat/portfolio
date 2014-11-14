angular.module('skills')

    .controller('skillsController', ['$rootScope', 
        function($rootScope) {
            this.skillCategories = $rootScope.skillCatData ;
            
            this.skillStarArray0 = [ ] ;
            this.skillStarArray1 = [ 1 ] ;
            this.skillStarArray2 = [ 1, 2 ] ;
            this.skillStarArray3 = [ 1, 2, 3 ] ;
            this.skillStarArray4 = [ 1, 2, 3, 4 ] ;
            this.skillStarArray5 = [ 1, 2, 3, 4, 5 ] ;
            this.skillStarArray6 = [ 1, 2, 3, 4, 5, 6 ] ;
            this.skillStarArray7 = [ 1, 2, 3, 4, 5, 6, 7 ] ;
            this.skillStarArray8 = [ 1, 2, 3, 4, 5, 6, 7, 8 ] ;
            this.skillStarArray9 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ;
            this.skillStarArray10 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ;
            
            this.getArraySkill = function(nbStar) {
                return this['skillStarArray'+nbStar] ;
            }
        }
    ]) ;
