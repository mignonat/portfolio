angular.module('carousel', ['ui.bootstrap'])
    
    .directive('carouseltag', ['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: $rootScope.urlRepAngular + 'carousel/views/carouseltag.html'
        };
    }])

    .controller('carouselController', function () {

        this.intervall = 3000;

        this.slides = [
            {image: 'ressources/images/project/image1.jpg', text: 'Image 01'},
            {image: 'ressources/images/project/image2.jpg', text: 'Image 02'},
            {image: 'ressources/images/project/image3.jpg', text: 'Image 03'}
        ];
        
        this.init = function(slides) {
            this.slides = slides ;
        } ;
    }) ;