/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function RegularClass(){
    
}
Ext.define("PropertyCheck",{
    fname: "anil",
    lname: "funde",
    nowhereToObj : "nowhere",
    constructor: function(){
        console.log(arguments);
        this.fname = arguments[0];
        this.lname = arguments[1];
        this.newPropertyViaConstructor = "notFromClassTempateProperties";
    }
},function(){
    // callBack called when all dependent classes are loaded and class oitself is fully created
    console.log("class created ..");
});

var obj1 = Ext.create("PropertyCheck", "rajya", "phunde");
var obj2 = Ext.create("PropertyCheck");
 console.log("arguments");