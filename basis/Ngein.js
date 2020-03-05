
/** api: constructor
 *  .. class:: LayerNodeMenuItem.LayerInfo(options)
 *
 *  A context menu item to show info and metadata of a Layer.
 */
 /*
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
		var metadata = "";
        
        // RD november 2019 ALTIJD naar metadata service, omdat client side debugger
        // webatlas geen weet (meer) heeft van of er metadata is voor een laag
        $.ajax({
            async: false,
            url: "/metadata/detail2/"+layer.name,
            statusCode: {
                401: function() {
                    alert( "Mmm, geen metadata..." );
                }
            }
            }).done(function(data) {
                metadata = data
            });        
		if (metadata == ''){
			metadata = '<br/><p>Nog geen metadata beschikbaar...</p><p><a href="/metadata/edit/'+layer.name+'" target="_blank">(beheer)</p>';
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
            maxWidth: 300,
            width: 300
        });
    }
});
*/

/** api: xtype = hr_layernodemenulayermetadata */
/*
Ext.reg('hr_layernodemenulayermetadata', Heron.widgets.LayerNodeMenuItem.LayerMetadata);
*/

// var test = {
// var point = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(position.lon,position.lat));
// var result = new OpenLayers.Layer.Vector('pdokResult');
// result.addFeatures([point]);
// Heron.App.getMap().addLayer(result);
// }