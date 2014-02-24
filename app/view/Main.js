Ext.define('CustomDataview.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
    'Ext.TitleBar', 'Ext.data.Store'
    ],
    config: {
        scrollable: true,
        name: 'main_container',
        items: [{
                xtype: 'toolbar',
                title: 'Dataview without parent page scrolling',
                cls: 'title'
        }, {
            xtype: 'customdataview',
            height: 200,
            cls: 'number-btns-cont',
            selectedCls: 'change-background',
            name: 'custom_dataview',
            itemTpl: '{text}',
            data: [{
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }, {
                text: "Custom Dataview"
            }]
        }, {
                xtype: 'toolbar',
                title: 'Dataview with parent page scrolling',
                cls: 'title'
        }, {
            xtype: 'dataview',
            height: 200,
            cls: 'number-btns-cont',
            selectedCls: 'change-background',
            name: 'lorem_dataview',
            itemTpl: '{text}',
            data: [{
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }, {
                text: "Sencha Dataview"
            }]
        }]
    }
});