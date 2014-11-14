angular.module('sharedServices', [])

    .factory('objectById', function() {
        return function(sourceArray, objectId) {
            for (var i=0; i< sourceArray.length; i++) {
                if (sourceArray[i].id ==objectId) {
                    return sourceArray[i] ;
                }
            }
            return null ;
        }
    })
    
    //Translate the field into the right langage
    .factory('factLangTranslate', ['$http', '$rootScope', function($http, $rootScope) {
        $rootScope.langagesData = null ;

        //langages.json
        $http.get($rootScope.urlFileLangages)
         .success(function(data, status) {
             $rootScope.langagesData = data ; console.log($rootScope.urlFileLangages + " loaded successfully");
         })
         .error(function(data, status) {
             console.log($rootScope.urlFileLangages + " => Get error => http statut " + status);
         });
         
        return function (fieldToTranslate) {
            if ($rootScope.langagesData===null) { return '' ; }
            var langageDatas = $rootScope.langagesData[$rootScope.currentLang] ;
            return langageDatas[fieldToTranslate] || ("Factory langTranslate : " + fieldToTranslate + " unknow !") ;
        } ;
    }])

    //Load the file 'fileName' into the rootScope variable 'rootVariableName'
    .factory('fileData', ['$http', '$rootScope', function($http, $rootScope) {
        return function(rootVariableName, fileName) {
            
            var fileUrl = $rootScope.urlDataRep + $rootScope.currentLang + "/" + fileName ;
        
            $http.get(fileUrl)
             .success(function(data, status) {
                 console.log(fileUrl + " loaded successfully");
                 $rootScope[rootVariableName] = data ; 
             })
             .error(function(data, status) {
                 console.log(fileUrl + " => Get error => http statut " + status);
                 $rootScope[rootVariableName] = [] ; 
             });
        } ;
        
    }])

    .factory('factDuration', function() {
        return function(begin, end) {
            var d1 = new Date(begin);
            var d2 = new Date(end);
            var miliseconds = d2 - d1;
            var seconds = miliseconds / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var month = days / 30.4;
            return parseInt(month) ;
        };
    }) ;