(function(){
    angular.module('addCustomer').directive('addCustomer',addCustomerDirective);

    function addCustomerDirective(){
        return {
            restrict:'E',
            controller:'addCustomerController',
            templateUrl:'/CustomerManager/customersList/addCustomer/addCustomer.template.html'
        };
    };
})();