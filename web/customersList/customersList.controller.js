(function(){
    angular.module('customersList').controller('customersListController',CustomersListController);

    function CustomersListController($scope){
        $scope.customers = [
            {
                'id':'1',
                'firstName':'John',
                'lastName':'McLeine',
                'city':'Karaganda',
                'orders':[
                    {
                        'product':'M9 Beretta',
                        'quantity': 1,
                        'price': 100.00
                    }
                ]
            }
        ];
    };
})();