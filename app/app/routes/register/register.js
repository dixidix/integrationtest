function registerController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$http','$state'];

    function registerCtrl($http,$state) {
        var self = this; //jshint ignore:line
        function register(){
            $http.post('http://localhost:1337/user/create?username='+self.user.username+'&password='+ self.user.password)
            .success(function(response){
                $state.go('users');
            })
            .error(function(error){
                console.log(error);
            });
        }
        function init() {
            self.user = {};
            self.register = register;

        }
        init();
    }
}
module.exports = registerController;