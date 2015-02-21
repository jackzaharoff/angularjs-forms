angularFormsApp.controller("efController", function($scope, $window, $routeParams, DataService) {
    $scope.departments = ["Engineering", "Marketing", "Finance", "Administration"];
    if ($routeParams.id) {
        $scope.employee = DataService.getEmployee($routeParams.id);
    } else {
        $scope.employee = { id: 0 }
    }
    
    $scope.editableEmployee = angular.copy($scope.employee);
    $scope.submitForm = function () {

        if ($scope.editableEmployee.id == 0) {
            // insert new employee
            DataService.insertEmployee($scope.editableEmployee);
        }
        else {
            // update the employee
            DataService.updateEmployee($scope.editableEmployee);
        }

        $scope.employee = angular.copy($scope.editableEmployee);
        $window.history.back();
    };

    $scope.cancelForm = function() {
        $window.history.back();
    };
});