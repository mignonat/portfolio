var app = angular.module('app', ['ngRoute', 'ngAnimate' , 'sharedServices', 'sharedFilter', 'educations', 'ue', 'skills', 'experiences', 'projects']) ;

// configure our routes
app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
    
    $routeProvider
        .when('/', {
                templateUrl : 'pages/home.html'
        })
        .when('/langage/:lang', {
                templateUrl : 'pages/home.html',
                controller : 'langageCtrl'
        })
        .when('/educations', {
                templateUrl : 'pages/educations.html'
        })
        .when('/nightschool', {
                templateUrl : 'pages/nightschool.html'
        })
        .when('/skills', {
                templateUrl : 'pages/skills.html'
        })
        .when('/experiences', {
                templateUrl : 'pages/experiences.html'
        })
        .when('/portfolio', {
                templateUrl : 'pages/portfolio.html'
        })
        .when('/project/:projectId', {
                templateUrl : 'pages/project.html',
                controller : 'projectIdController'
        })
        .when('/project/:projectId/:fmExp', {
                templateUrl : 'pages/project.html',
                controller : 'projectIdController'
        });
        
    $locationProvider.html5Mode(true);
}]);

//Global variables
app.run(['$rootScope', 'fileData', function($rootScope, fileData) {
    
    var ressource = "ressources/" ;
    
    $rootScope.currentLang = "en";
    $rootScope.urlRepRessource = "ressources/";
    $rootScope.urlRepAngular = ressource + "js/angular/" ;
    $rootScope.urlFileLangages = ressource + "json/langages.json";
    $rootScope.urlFileConfig = ressource + "json/config.json";
    $rootScope.urlDataRep = ressource + "json/data-" ;
    $rootScope.educationsData = [] ;
    $rootScope.uesData = [] ;
    $rootScope.ueCatData = [] ;
    $rootScope.skillCatData = [] ;
    $rootScope.experiencesGroupData = [] ;
    $rootScope.projectsData = [] ;
    
    //Load file diploma.json into $rootScope variable diplomaData
    fileData("uesData", "ues.json") ;
    fileData("ueCatData", "ueCategories.json") ;
    fileData("educationsData", "educations.json") ; 
    fileData("skillCatData", "skills.json") ;
    fileData("experiencesGroupData", "experiences.json") ;
    fileData("projectsData", "projects.json") ;
    
}])

.controller('imgLangageController', ['$rootScope', 
    function($rootScope){
        this.getInverseLangage = function() {
            return (($rootScope.currentLang === 'fr')? 'en' : 'fr') ;
        } ;
    }
])

.controller('langageCtrl', [ '$rootScope', '$routeParams', 'fileData', 
    function ($rootScope, $routeParams, fileData) {
        if ($routeParams.lang) {

            $rootScope.currentLang = $routeParams.lang ;

            //Load file diploma.json into $rootScope variable diplomaData
            fileData("uesData", "ues.json") ;
            fileData("ueCatData", "ueCategories.json") ;
            fileData("educationsData", "educations.json") ; 
            fileData("skillCatData", "skills.json") ;
            fileData("experiencesGroupData", "experiences.json") ;
            fileData("projectsData", "projects.json") ;
            
            console.log("Langage switched to " + $rootScope.currentLang);
        }
    }
]) 

// For view project.html
.controller('projectIdController', ['$routeParams', 
    function($routeParams) {
        this.projectId = $routeParams.projectId ;
        this.fromExperience = (typeof $routeParams.fmExp == 'undefined')? 0 : 1 ;
    }
])

/* Bug interference between ui.boostrap & ngAnimate
 * Carousel strange transition [bootstrap 3] #1350 */
.directive('disableAnimation', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    }
});

//No ng-app directive needed in html
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});