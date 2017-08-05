// Define a person class
Ext.define('Training.class.Person', {
    // list of properties, setter and getter of all the property will
    // be available on instantiation.
    config:{
        firstname:'',
        lastname:'',
        age:'',
        city:'',
        country:''
    },
    constructor:function (config) {
        this.initConfig(config);

    },
    applyFirstname:function (value) {
        return value.toUpperCase();
    },

    getLongName:function () {
        return this.firstname + "," + this.lastname;
    },
    statics:{
        count:'',
        getCount:function () {
            return this.count;
        },
        increment:function () {
            this.count++;
        }
    },

    // refer the static property by this.statics().count

    getOuterCount:function () {
        return this.statics().count;
    }
});

var init = function () {
    var newPerson = Ext.create('Training.class.Person', {
        firstname:'John'
    });

    // Setting count value
    Training.class.Person.count = 10;
    Training.class.Person.increment();
    console.log("Count after increment is " + Training.class.Person.getCount());
    console.log("Count from method " + newPerson.getOuterCount());

};
Ext.onReady(init);