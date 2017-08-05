Ext.define('Book', {
    config: {
        width: 250,
        length: 0,
        height: 300
    },
    area: 1000,
    rate: 2500,
    floorRise: 50,
    constructor: function (w, h) {
        this.rate = 450;
        floorRise = 11;
        // as call to constructor via "create" method sent standalone values 20, 30 
        // sp we need to form JSON compitable with config above i.e. 
        // JSON with 'height' , 'widht' keys
        this.initConfig({'height': h, 'width': w, 'noconfig': 0});
    }
});

var bk = Ext.create('Book', 20, 30);
console.log(bk.width);

bk.hasOwnProperty('width');
bk.hasOwnProperty('height');
bk.hasOwnProperty('length');
bk.hasOwnProperty('rate');
bk.hasOwnProperty('floorRise');
