angular.module('skills.filters', ['sharedServices'])

    .filter('skillTitleByCategoryAndId', [ 'getSkillFromIdAndCategory', function(getSkillFromIdAndCategory) {
    
        return function(category, id) {
            
            var skill = getSkillFromIdAndCategory(category, id) ;
            
            if (typeof skill !== 'object') { return '' ; }
            
            return skill.title ;
            
        } ;
    }])

    //Return the glyphicon associated to the category
    .filter('skillCategoryGlyphicon', function(){ 
        return function(category) {
            switch (category) { 
                case 'projectSkills'    : return "glyphicon-list-alt" ;
                case 'frameworks'       : return "glyphicon-cog" ;
                case 'programmingTools' : return "glyphicon-wrench" ;
                case 'progLangages'     : return "glyphicon-comment" ;
                case 'apis'             : return "glyphicon-cog" ;
                case 'sgbdrs'           : return "glyphicon-floppy-disk" ;
                case 'misc'             : return "glyphicon-warning-sign" ;
                case 'appServers'       : return "glyphicon-refresh" ;
                case 'networks'         : return "glyphicon-globe" ;
                default                 : return 'glyphicon-ok';
            }
        }
    });