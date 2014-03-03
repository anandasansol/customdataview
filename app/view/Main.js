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
            height: 25
        }, {
            xtype: 'customdataview',
            height: 200,
            cls: 'number-btns-cont',
            selectedCls: 'change-background',
            name: 'custom_dataview',
            itemTpl: '{text}',
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
            height: 200,
            cls: 'number-btns-cont',
            selectedCls: 'change-background',
            name: 'lorem_dataview',
            itemTpl: '{text}',
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