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
    
    //Translate the field into the right language
    .factory('factLangTranslate', ['$http', '$rootScope', function($http, $rootScope) {
        $rootScope.languagesData = null ;

        //langages.json
        $http.get($rootScope.urlFileLanguages)
         .success(function(data, status) {
             $rootScope.languagesData = data ; console.log($rootScope.urlFileLanguages + " loaded successfully");
         })
         .error(function(data, status) {
             console.log($rootScope.urlFileLanguages + " => Get error => http statut " + status);
         });
         
        return function (fieldToTranslate) {
            if ($rootScope.languagesData===null) { return '' ; }
            var languageDatas = $rootScope.languagesData[$rootScope.currentLang] ;
            return languageDatas[fieldToTranslate] || ("Factory langTranslate : " + fieldToTranslate + " unknow !") ;
        } ;
    }])

    //Load the file 'fileName' into the rootScope variable 'rootVariableName'
    .factory('fileData', ['$http', '$rootScope', function($http, $rootScope) {
        return function(rootVariableName, fileName, callbackReloadPage) {
            
            var fileUrl = $rootScope.urlDataRep + $rootScope.currentLang + "/" + fileName ;
        
            $http.get(fileUrl)
                .success(function(data, status) {
                    $rootScope[rootVariableName] = data ; 
                    console.log(fileUrl + " loaded successfully");
                    if (callbackReloadPage) { 
                        callbackReloadPage() ; 
                        console.log('Current page reloaded') ;
                    }
                })
                .error(function(data, status) {
                    $rootScope[rootVariableName] = [] ; 
                    console.log(fileUrl + " => Get error => http statut " + status);
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