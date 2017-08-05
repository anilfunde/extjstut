function Person(){
    this.name = 'anil';
    fname = 'funde';
}
function Person(aa){
    if(!(this instanceof Person)){
        return new Person(aa);
    }
    this.myname = 'anil';
    fname = 'funde';
}

var o = {};
var o2 = new Object();
var a =new Person("raju");
console.log(a); // {"barr": "bhava"}
var t = Person("bhau");


