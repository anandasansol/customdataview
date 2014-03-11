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
                    // Assigning the 'parentPanel' config of 'customdataview' with parent panel
                    this.getCustomDataview().config.parentPanel = this.getMainContainer(); 
                }
            }
        }
    }
});
