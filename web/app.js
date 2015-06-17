(function (){
    angular.module("CustomerManager",['mainPage','ui.router']).config(CustomerManagerConfig);

    function CustomerManagerConfig($stateProvider,$urlRouterProvider){
        $stateProvider.state('startPage',{
            url:'/',
            controller: '',
            templateUrl: ''
        });
        $urlRouterProvider.otherwise('/');
    };
})();