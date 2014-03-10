Ext.define('CustomDataview.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
    'Ext.TitleBar', 'Ext.data.Store'
    ],
    config: {
        scrollable: true,
        cls: 'main',
        name: 'main_container',
        items: [{
            xtype: 'toolbar',
            title: 'Dataview without parent page scrolling',
            docked: 'top'
        }, {
            xtype: 'customdataview',
            name: 'custom_dataview',
            itemTpl: '{text}',
            height: 200,
            data: (function(){
                var count, data = [];
                for(count = 1; count <=25; count++) {
                    data.push({text: "Custom Dataview"});
                }
                return data;
            })()
            
        }, {
            xtype: 'toolbar',
            title: 'Dataview with parent page scrolling',
            height: 25
        }, {
            xtype: 'dataview',
            itemTpl: '{text}',
            height: 200,
            data: (function(){
                var count, data = [];
                for(count = 1; count <=25; count++) {
                    data.push({text: "Sencha Dataview"});
                }
                return data;
            })()
        }]
    }
});