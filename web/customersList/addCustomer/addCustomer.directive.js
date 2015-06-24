(function(){
    angular.module('addCustomer').directive('addCustomer',addCustomerDirective);

    function addCustomerDirective(){
        return {
            restrict:'E',
            templateUrl:'/CustomerManager/customersList/addCustomer/addCustomer.template.html',
            controller:'addCustomerController'

        };
    };
})();