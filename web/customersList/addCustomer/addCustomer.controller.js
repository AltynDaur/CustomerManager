(function(){
    angular.module('addCustomer').controller('addCustomerController',addCustomerController);

    function addCustomerController ($scope){
        function addCustomer(){
            $scope.newCustomer.id = $scope.customers.length;
            $scope.customers.push($scope.newCustomer);
        };
    };

})();