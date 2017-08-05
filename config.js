Ext.define('SmartPhone', {
    config: {
        hasTouchScreen: false,
        operatingSystem: 'Other',
        price: 500
    },
    constructor: function (cfg) {
        this.initConfig(cfg);
    }
});

var iPhone = new SmartPhone({
    hasTouchScreen: true,
    operatingSystem: 'iOS'
});

iPhone.getPrice(); // 500;
iPhone.getOperatingSystem(); // 'iOS'
iPhone.getHasTouchScreen(); // true;