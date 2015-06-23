(function(){
    angular.module('customersList').directive('customersList',CustomersListDirective);

    function CustomersListDirective(){
        return{
            restrict:'E',
            controller:'customersListController',
            templateUrl:'/CustomerManager/customersList/customersList.template.html'
        };
    };
})();