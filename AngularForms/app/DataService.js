﻿angularFormsApp.factory("DataService", function() {
    var getEmployee = function(id) {
        if (id == 123) {
            return {
                fullName: "John Doe",
                notes:
                    "The ideal employee. Just don't touch his red stapler.",
                department:
                    "Administration",
                perkCar:
                    true,
                perkStock:
                    false,
                perkSixWeeks:
                    true,
                payrollType:
                    "none"
            }
        } else {
            return undefined;
        }
    };
    var insertEmployee = function (newEmployee) {
            return true;
        };

    var updateEmployee = function (employee) {
            return true;
        };
    return {
        insertEmployee: insertEmployee,
        updateEmployee: updateEmployee,
        getEmployee: getEmployee
    }
});