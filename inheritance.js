Ext.require('Employee2');
Ext.define("Employee",{
    require: ['Employee2'],
    extend: 'Employee2',
    config: {
        empId : '',
        empName : '',
        salary : 0
    },
    constructor: function(data){
        this.initConfig(data);
    },
    setEmpName: function(val){
        this.empName = "ParentName " + val;
    },
    work: function(param){
        console.log("Employee " + this.getEmpName() + " is working - " + param);
    }
});

var obj = Ext.create("Employee",{
    empId : "52",
    empName : "anil"
});


obj.work();
obj.setEmpName("raju");
obj.work();


Ext.define("Sub", {
    extend: 'Employee',
    config:{
        level: 1    
    },
    constructor: function(data){
        this.initConfig(data);
    },
    work: function(param){
        //this.callParent(arguments);
        console.log("Employee " + this.getEmpName() + " is Owner - " + param);
    }
});

var subObj = Ext.create("Sub",{
    empName: "mahi"
});
// try console.dir(SubObj), then look for SubObj.superclass for superclass details
// to get superclass anem - Sub.superclass.$className
subObj.work("pappa");


