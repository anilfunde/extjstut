Ext.onReady(function () {
    Ext.create(Ext.panel.Panel,{
        title: 'Accordian layout',
        width: 300,
        height: 300,
        defaults:{
            bodystyle: 'padding:15px'
        },
        layout: {
            type: 'accordion',
            titleCollapse: true,
            activeOnTop: true,
            animate: false
        },
        items:[
            {
                title: 'Panel 1',
                html: 'Panel 1 content'
            },
            {
                title: 'Panel 2',
                html: 'Conent 2'
            },
            {
                title: 'Panel 3',
                html: 'Conent 333333333333333333'
            },
            {
                title: 'Panel 4',
                html: 'Conent 44444444444'
            }
        ],
        renderTo: Ext.getBody()
    })
    
    
});