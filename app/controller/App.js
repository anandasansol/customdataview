Ext.define("CustomDataview.controller.App", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            // Container
            mainContainer: 'container[name="main_container"]',
            customDataview: 'dataview[name="custom_dataview"]'
        },
        control: {
            mainContainer: {
                initialize: function() {
                    var me = this;
                    me.mainPanel = Ext.ComponentQuery.query('container[name="main_container"]')[0];
                    
                    // Assigning the 'parentPanel' config of 'customdataview' with parent panel
                    me.getCustomDataview().config.parentPanel = me.mainPanel; 
                }
            }
        }
    }
});
