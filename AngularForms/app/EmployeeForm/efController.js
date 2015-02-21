angularFormsApp.controller("efController", function($scope, $window, DataService) {
    $scope.departments = ["Engineering", "Marketing", "Finance", "Administration"];
    $scope.employee = DataService.employee;
    $scope.editableEmployee = angular.copy($scope.employee);
    $scope.submitForm = function() {
        $scope.employee = angular.copy($scope.editableEmployee);
        $window.history.back();
    };
    $scope.cancelForm = function() {
        $window.history.back();
    };
});