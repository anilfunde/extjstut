Ext.define("Employee2", {
    config: {
        empName: '',
        empId: 0
    },
    constructor: function (config) {
        this.initConfig(config);
    },
    //class methods starts 
    getEmployeeDetails: function () {
        console.log("Name of employee is ", this.getEmpName());
        console.log("Id of employee is ", this.getEmpId());
    }

});

emp1 = Ext.create("Employee2",{
        'empName': 'anil funde',
        'empId': 738
       });

emp2 = Ext.create("Employee2");
Ext.define("Manager",{
    extend: 'Employee',
    config:{
        level: 1
    },
    getEmployeeDetails: function(){
        this.callParent(arguments);
        console.log("Name of employee is MGR-", this.getEmpName());
        console.log("Id of employee is MGR-", this.getEmpId());
    }
});

mgr = Ext.create("Manager");
mgr.getEmployeeDetails();

mgrKnown = Ext.create("Manager",{
    empName: "pramod",
    empId: 11,
    level: 2
});

mgrKnown.getEmployeeDetails();

console.log("");













