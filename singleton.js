Ext.define("SingleTon",{
    singleton: true,
    config: {
        myname: 'myname'
    },
    sayHello: function(){
        console.log("Said Hello .. returning back... \n");
    }
});
Ext.create('SingleTon');
console.log();