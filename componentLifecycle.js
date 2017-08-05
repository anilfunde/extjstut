Ext.onReady(function () {
    var pnl = Ext.create("Ext.panel.Panel", {
        items: [
            Ext.create("Ext.Component", {
                html: "Raw Component",
                itemId: "rawcomp1",
                listeners: {
                    activate: function () {
                        console.log("activate")
                    },
                    added: function () {
                        console.log("added")
                    },
                    afterrender: function () {
                        console.log("afterrender")
                    },
                    beforeactivate: function () {
                        console.log("beforeactivate")
                    },
                    beforedeactivate: function () {
                        console.log("beforedeactivate")
                    },
                    beforerender: function () {
                        console.log("beforerender")
                    },
                    beforeshow: function () {
                        console.log("beforeshow")
                    },
                    beforedestroy: function () {
                        console.log("beforedestroy")
                    },
                    destroy: function () {
                        console.log("destroy")
                    },
                    render: function () {
                        console.log("render")
                    },
                    show: function () {
                        console.log("show")
                    },
                    beforehide: function () {
                        console.log("beforehide")
                    },
                    hide: function () {
                        console.log("hide")
                    },
                    enable: function () {
                        console.log("enable")
                    },
                    disable: function () {
                        console.log("disable")
                    },
                    removed: function () {
                        console.log("removed")
                    }
                }
            })
        ],
        listeners: {
            activate: function () {
                console.log("PP_activate")
            },
            added: function () {
                console.log("PP_added")
            },
            afterrender: function () {
                console.log("PP_afterrender")
            },
            beforeactivate: function () {
                console.log("PP_beforeactivate")
            },
            beforedeactivate: function () {
                console.log("PP_beforedeactivate")
            },
            beforerender: function () {
                console.log("PP_beforerender")
            },
            beforeshow: function () {
                console.log("PP_beforeshow")
            },
            beforedestroy: function () {
                console.log("PP_beforedestroy")
            },
            destroy: function () {
                console.log("PP_destroy")
            },
            render: function () {
                console.log("PP_render")
            },
            show: function () {
                console.log("PP_show")
            },
            beforehide: function () {
                console.log("PP_beforehide")
            },
            hide: function () {
                console.log("PP_hide")
            },
            enable: function () {
                console.log("PP_enable")
            },
            disable: function () {
                console.log("PP_disable")
            },
            removed: function () {
                console.log("PP_removed")
            }
        },
        renderTo: Ext.getBody()
    });
    console.log("******Calling disable");
    pnl.getComponent("rawcomp1").disable();
    console.log("******Calling enable");
    pnl.getComponent("rawcomp1").enable();
    console.log("******Calling hide");
    pnl.getComponent("rawcomp1").hide();
    console.log("******Calling show");
    pnl.getComponent("rawcomp1").show();
    console.log("******Calling destroy");
    pnl.getComponent("rawcomp1").destroy();
});