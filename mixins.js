/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define("P1", {
    name : "anil",
    printmsg: function(){
        console.log("P1 ..");
    }
});

Ext.define("P2", {
    lastname : "funde",
    printmsg2: function(){
        console.log("  P2 ..");
    }
});


Ext.define("sub",{
    mixins: ["P1", "P2"]
});

var obj = Ext.create("sub");
console.log("name - ", obj.name);
console.log("lastname - ", obj.lastname);
obj.printmsg();
obj.printmsg2();
