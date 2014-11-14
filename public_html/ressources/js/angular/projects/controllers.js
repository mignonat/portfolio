angular.module('projects')

    .controller('projectController', ['$rootScope', 'getSkillFromIdAndCategory', 'objectById', '$location', 
        function($rootScope, getSkillFromIdAndCategory, objectById, $location) {
            
            this.init = function(idProject) {
                if (!idProject) { 
                    this.project = null ; 
                } else {
                    this.project = objectById($rootScope.projectsData, idProject) ;
                }
                console.log("projectController init "+idProject) ;
            } ;
            
            this.getCategoryList = function() {
                return ['progLangages', 'frameworks', 'apis', 'programmingTools', 'appServers', 'sgbdrs', 'networks', 'misc'] ;
            }
            
            this.getSkillById = function(choosenCategory, skillId) {
                return getSkillFromIdAndCategory(choosenCategory, skillId) ;
            } ;
            
            this.previous = function() {
                $location.path('achievements') ;
            } ;
            
        }
    ])
    
    .controller('projectsController', ['$scope', '$rootScope', '$location', 'getSkillFromIdAndCategory',
        function($scope, $rootScope, $location, getSkillFromIdAndCategory) {
                        
            this.projects = $rootScope.projectsData ;
            
            this.getSkillById = function(choosenCategory, skillId) {
                return getSkillFromIdAndCategory(choosenCategory, skillId) ;
            } ;
            
            this.goToProject = function(id) {
                $location.path('project/'+id) ;
            } ;
        }
    ]) ;
    
    
