angularFormsApp.controller("efController", function ($scope, efService) {
    $scope.departments = ["Engineering", "Marketing", "Finance", "Administration"];
    $scope.employee = efService.employee;
})