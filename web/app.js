(function (){
    angular.module("CustomerManager",['mainPage','ui.router']).config(CustomerManagerConfig);

    function CustomerManagerConfig($stateProvider,$urlRouterProvider){
        $stateProvider.state('mainPage',{
            url:'/',
            templateUrl: 'mainPage/mainPage.template.html'
        }).state('customers',{
            url:'/customers',
            controller:'',
            templateUrl:''
        }).state('orders',{
            url:'/orders',
            controller:'',
            templateUrl:''
        }).state('customer.orders',{
            url:'/customer/:custId/orders',
            controller:'',
            templateUrl:''
        });
        $urlRouterProvider.otherwise('/');
    };
})();