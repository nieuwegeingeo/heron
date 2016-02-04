
/** api: constructor
 *  .. class:: LayerNodeMenuItem.LayerInfo(options)
 *
 *  A context menu item to show info and metadata of a Layer.
 */
Heron.widgets.LayerNodeMenuItem.LayerMetadata = Ext.extend(Heron.widgets.LayerNodeMenuItem, {

    //text: __('Get Layer information'),
	text: __('Metadata voor deze laag'),
    iconCls: "icon-information",

    initComponent: function () {
        Heron.widgets.LayerNodeMenuItem.LayerInfo.superclass.initComponent.call(this);
    },

    handler: function (menuItem, event) {
        var node = menuItem.ownerCt.contextNode;
        if (!node || !node.layer) {
            return;
        }
		
        var layer = node.layer;
		var metadata = ""
		if (layer.metadata && layer.metadata.html){
			metadata += '<br/><p>'+layer.metadata.html+'</p>';
		}
		if (layer.metadata && layer.metadata.url){
			metadata += '<br/><p><a href="" target="_blank" >online metadata</a></p>';
		}
		if (metadata == ''){
			metadata = "<br/><p>Geen metadata beschikbaar...</p>";
		}
		
        Ext.MessageBox.show({
            title: String.format('Metadata voor "{0}"', layer.name),
			msg: metadata,
            buttons: Ext.Msg.OK,
            fn: function (btn) {
                if (btn == 'ok') {
                }
            },
            icon: Ext.MessageBox.INFO,
            maxWidth: 300
        });
    }
});

/** api: xtype = hr_layernodemenulayermetadata */
Ext.reg('hr_layernodemenulayermetadata', Heron.widgets.LayerNodeMenuItem.LayerMetadata);