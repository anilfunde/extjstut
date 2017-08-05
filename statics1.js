//Statics scope
Ext.define('My.Cat', {
    statics: {
        totalCreated: 0,
        speciesName: 'Cat24' // My.Cat.speciesName = 'Cat'
    },
    constructor: function () {
        var statics = this.statics();
        console.log(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to
        // equivalent to: My.Cat.speciesName
        console.log(this.self.speciesName);   // dependent on 'this'
        statics.totalCreated++;
    },
    clone: function () {
        var cloned = new this.self;                      // dependent on 'this'
        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName
        return cloned;
    }
});
Ext.define('My.SnowLeopard', {
    extend: 'My.Cat',
    statics: {
        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'
    },
    constructor: function () {
        this.callParent();
    }
});
var cat = new My.Cat();                 // console.logs 'Cat', then console.logs 'Cat'
var snowLeopard = new My.SnowLeopard(); // console.logs 'Cat', then console.logs 'Snow Leopard'
var clone = snowLeopard.clone();
console.log(Ext.getClassName(clone));         // console.logs 'My.SnowLeopard'
console.log(clone.groupName);                 // console.logs 'Cat'
console.log(My.Cat.totalCreated);             // console.logs 3