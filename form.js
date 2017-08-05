Ext.onReady(function () {
    Ext.create("Ext.form.Panel", {
        title: "Controls",
        renderTo: Ext.getBody(),
        url: "http://localhost/extjs/ExtJs/public_html/data.json",
        //standardSubmit : true,
        items: [
            {
                xtype: "radiogroup",
                fieldLabel: "Title",
                vertical: true, columns: 1,
                items: [
                    {boxLabel: "Mr", name: "title", xtype: "radiofield"},
                    {boxLabel: "Ms", name: "title"}
                ]
            },
            {
                xtype: "textfield",
                fieldLabel: "Name"
            },
            {
                xtype: "datefield",
                msgTarget: "side",
                fieldLabel: "Date of birth"
            },
            {
                xtype: "textfield",
                fieldLabel: "Blog"
            },
            {
                xtype: "numberfield",
                fieldLabel: "Years of experience",
                //minValue: 5,
                msgTarget : "side",
                
            },
            {
                xtype: "textarea",
                fieldLabel: "Address"
            },
            {
                xtype: "button",
                text: "Submit",
                listeners:{
                    click: function(btnObj, e, eOpts){
                        btnObj.up("form").submit({
                            success:function(form, action){
                                console.log(action);
                            },
                            failure: function(form, action){
                                console.log(action);
                            }
                        });
                    }
                }
            }
        ],
    });

});