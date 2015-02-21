angularFormsApp.factory("DataService", function() {
    return {
        employee: {
            fullName: "John Doe",
            notes: "The ideal employee. Just don't touch his red stapler.",
            department: "Administration",
            perkCar: true,
            perkStock: false,
            perkSixWeeks: true,
            payrollType: "none"
        }
    }
});