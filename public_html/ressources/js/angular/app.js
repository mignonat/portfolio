var app = angular.module('app', ['ngRoute', 'ngAnimate' , 'sharedServices', 'sharedFilter', 'diploma', 'ue', 'skills', 'experiences', 'projects']) ;

// configure our routes
app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
    
    $routeProvider
        .when('/', {
                templateUrl : 'pages/home.html'
        })
        .when('/diploma', {
                templateUrl : 'pages/diploma.html'
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
    $rootScope.urlFileLanguages = ressource + "json/langages.json";
    $rootScope.urlFileConfig = ressource + "json/config.json";
    $rootScope.urlDataRep = ressource + "json/data-" ;
    $rootScope.diplomaData = [] ;
    $rootScope.uesData = [] ;
    $rootScope.ueCatData = [] ;
    $rootScope.skillCatData = [] ;
    $rootScope.experiencesGroupData = [] ;
    $rootScope.projectsData = [] ;
    
    //Load file diploma.json into $rootScope variable diplomaData
    fileData("uesData", "ues.json") ;
    fileData("ueCatData", "ueCategories.json") ;
    fileData("diplomaData", "diploma.json") ; 
    fileData("skillCatData", "skills.json") ;
    fileData("experiencesGroupData", "experiences.json") ;
    fileData("projectsData", "projects.json") ;
    
}])

//Management of the languages
.controller('languagesController', [ '$rootScope', '$route', '$routeParams', 'fileData', 
    function ($rootScope, $route, $routeParams, fileData) {
        
        if ($routeParams.lang) {
            this.changeLanguage($routeParams.lang) ;
        }
        
        this.getCurrentLanguage = function() {
            return $rootScope.currentLang ;
        }
        
        this.getInverseLanguage = function() {
            return (($rootScope.currentLang === 'fr')? 'en' : 'fr') ;
        }
        
        this.getTitleMessage = function() {
            return (($rootScope.currentLang === 'fr')? 'Display the portfolio in English' : 'Afficher le portfolio en Français') ;
        }
        
        this.changeLanguage = function(lang) {
            
            console.log("Switching language from " + $rootScope.currentLang + " to "+ lang);
            
            $rootScope.currentLang = lang ;

            //Load file diploma.json into $rootScope variable diplomaData
            fileData("uesData", "ues.json") ;
            fileData("ueCatData", "ueCategories.json") ;
            fileData("diplomaData", "diploma.json") ; 
            fileData("skillCatData", "skills.json") ;
            fileData("experiencesGroupData", "experiences.json") ;
            fileData("projectsData", "projects.json", function() { 
                console.log("Switching to language "+ lang + " finished") ; 
                $route.reload() ; 
            }) ;
            
        }
    }
])

//Use for passing the id of the project to the view project.html
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

//We first load the language files before loading the app
//In this way, no ng-app directive is needed in html
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});