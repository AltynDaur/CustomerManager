(function (){
    angular.module("CustomerManager",['mainPage','ui.router']).config(CustomerManagerConfig);

    function CustomerManagerConfig($stateProvider,$urlRouterProvider){
        $stateProvider.state('mainPage',{
            url:'/',
            templateUrl: 'mainPage/mainPage.template.html'
        }).state('mainPage.customers',{
            views:{
                "mainPage":{
                    url:'/customers',
                    controller:'customersListController',
                    templateUrl:'/CustomerManager/customersList/customersList.template.html'
                },
                "":{}
            }

        }).state('mainPage.orders',{
            views:{
                "mainPage":{
                    url:'/orders',
                    controller:'ordersListController',
                    templateUrl:'/CustomerManager/ordersList/ordersList.template.html'
                },
                "":{}
            }

        }).state('mainPage.customers.orders',{
            views:{
                "mainPage":{
                    url:'/:custId/orders',
                    controller:'customerOrdersController',
                    template:'/CustomerManager/customerOrders/customerOrders.template.html'
                },
                "":{}
            }

        });
        $urlRouterProvider.otherwise('/');
    };
})();