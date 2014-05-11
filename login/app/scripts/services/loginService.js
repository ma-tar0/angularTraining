'use strict';

app.factory('loginService',function($http){
    return{
        login:function(user, scope){
            var $promise = $http.post('/api/login.php', user) // call login api
            $promise.then(function(msg){
                if(msg.data = 'success') scope.msgtxt = 'login success';
                else scope.msgtxt = 'login fail';
            })
        }
    }
});