/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Author: Eddy Scheper, ARIS B.V./OGG
 * Author: Richard Duivenvoorde, Zuidt/OGG
 */

/** api: example[fixedpanelslayout]
 *  FixedPanelsLayout
 *  -----------------
 *  An application with an alternative layout containing a fixed height
 *  LayerPanel and LegendPanel.
 */

// Define Heron namespaces.
Ext.namespace("Heron.options");
Ext.namespace("Heron.options.map");
Ext.namespace("Heron.options.layertree");
Ext.namespace("Heron.ngein");
Ext.namespace("Heron.PDOK");

/*****************************************************************************
 * OPENLAYER SETTINGS
 *****************************************************************************/

OpenLayers.Util.onImageLoadErrorColor = "transparent";
OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
OpenLayers.DOTS_PER_INCH = 25.4 / 0.28;

/*****************************************************************************
 * NIEUWEGEIN URL SETTINGS
 *****************************************************************************/

// Define the base urls for the layers.
Heron.ngein.urls = {
    NGEIN: 'http://gng-ap713.nieuwegein.nl',
	NGEINLINUX: 'http://gng-ap855.linux.nieuwegein.nl',
    PDOK : 'http://geodata.nationaalgeoregister.nl',
    OPENBASISKAART_TMS: 'http://openbasiskaart.nl/mapcache/tms'
};

// Define the PDOK urls for the layers, based
Heron.PDOK.urls = {
    NGEINGEOSERVER: Heron.ngein.urls.NGEIN + '/geoserver/wms',
	NGEINLINUXGEOSERVER: Heron.ngein.urls.NGEINLINUX + '/geoserver/wms',
	NGEINGEOSERVERWFS: Heron.ngein.urls.NGEIN + '/geoserver/wfs',
    NGEINMAPPROXY: Heron.ngein.urls.NGEIN + '/mapproxy/service',
    PDOKTMS: Heron.ngein.urls.PDOK + '/tms/',
    PDOKWMTS: Heron.ngein.urls.PDOK + '/tiles/service/wmts/'
};

/*****************************************************************************
 * EXTJS SETTINGS
 *****************************************************************************/

Ext.BLANK_IMAGE_URL = 'http://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';

/*****************************************************************************
 * LAYERTREE
 * - With toggle hidden baselayer container.
 *****************************************************************************/

Heron.options.layertree = {
    border: false,
    tree: [
        {
            nodeType: "gx_baselayercontainer",
            text: "Achtergrond lagen",
            expanded: true,
            //hidden: true
            hidden: false
        },
        {
            nodeType: "gx_overlaylayercontainer",
            text: "Thema's",
            expanded: true
        }
    ]
};

 /** Create a config for the search panel. This panel may be embedded into the accordion
 * or bound to the "find" button in the toolbar. Here we use the toolbar button.
 */
Heron.options.searchPanelConfig = {
    xtype: 'hr_multisearchcenterpanel',
    height: 600,
    hropts: [

        // Zoeken op Adressen uit MOR_GEOCODER tabel
        {
            searchPanel: {
                xtype: 'hr_formsearchpanel',
                name: 'Zoek op adres',
                header: false,
                protocol: new OpenLayers.Protocol.WFS({
                    version: "1.1.0",
                    url: Heron.PDOK.urls.NGEINGEOSERVERWFS,
                    srsName: "EPSG:28992",
                    featureType: "MOR_GEOCODER",
                    // featureNS: "http://www.nieuwegein.nl"
                    featurePrefix: 'nieuwegein'
                }),
                downloadFormats: [
                     {
                         name: 'CSV',
                         outputFormat: 'csv',
                         fileExt: '.csv'
                     }
                 ],
                items: [
                    {
                        xtype: "textfield",
                        name: "ADDRESS__like",  // ADDRESS or STREET
                        value: 'Koolmees',
                        fieldLabel: "  Adres"
                    },
                    {
                        xtype: "label",
                        id: "helplabel",
                        html: 'Zoek op adres of straatnaam <br/>gebruik * als wildcard<br/>b.v. koolm*15 om te zoeken naar Koolmees 15',
                        style: {
                            fontSize: '10px',
                            color: '#AAAAAA'
                        }
                    }
                ],
                hropts: {
                    onSearchCompleteZoom: 10,
                    autoWildCardAttach: true,
                    caseInsensitiveMatch: true,
                    logicalOperator: OpenLayers.Filter.Logical.AND
                    //logicalOperator: OpenLayers.Filter.Logical.OR
                }
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                columns: [
                    {header: "Straat", width: 120, dataIndex: "STREET"},
                    {header: "Huisnummer", width: 120, dataIndex: "BUILDING_NUMBER"},
                    {header: "Toevoeging", width: 120, dataIndex: "BUILDING_SUBDIVISION"}
                ],
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8
                }
            }
        }
	
        // Zoeken op Postcode 6
        ,
		{
            searchPanel: {
                xtype: 'hr_formsearchpanel',
                name: 'Zoek op postcode',
                header: false,
                protocol: new OpenLayers.Protocol.WFS({
                    version: "1.1.0",
					url: Heron.PDOK.urls.NGEINGEOSERVERWFS,
                    srsName: "EPSG:28992",
                    featureType: "pc6esri2015r1",
                    // featureNS: "http://www.nieuwegein.nl"
                    featurePrefix: 'nieuwegein'
                }),
                downloadFormats: [
                     {
                         name: 'CSV',
                         outputFormat: 'csv',
                         fileExt: '.csv'
                     }
                 ],
                items: [
                    {
                        xtype: "textfield",
                        name: "POSTCODE__like",
                        value: '3438RR',
                        fieldLabel: "  Postcode"
                    },
                    {
                        xtype: "label",
                        id: "helplabel",
                        html: 'Zoeken op postcode, zonder spatie, bv "3438RR"<br/>gebruik * als wildcard<br/>b.v. "3438R*" of "3438*"',
                        style: {
                            fontSize: '10px',
                            color: '#AAAAAA'
                        }
                    }
                ],
                hropts: {
                    onSearchCompleteZoom: 10,
                    autoWildCardAttach: false, // !! false omdat anders de query wordt 'like *1234*', veeeeel langzamer dan 'like 1234*'
                    caseInsensitiveMatch: false
                    //,logicalOperator: OpenLayers.Filter.Logical.AND
                }
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                columns: [
                    {
                        header: "Postcode",
                        width: 100,
                        dataIndex: "POSTCODE"
                    }
                    ,
                    {
                        header: "Desc",
                        width: 200,
                        dataIndex: "cmt"
                    }
                ],
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8
                }
            }
        },
        
        // Zoeken op perceelnummers uit GM_SP_KAD_GRONDPERCEEL
        {
            searchPanel: {
                xtype: 'hr_formsearchpanel',
                name: 'Zoek kadastraal perceel ',
                header: false,
                protocol: new OpenLayers.Protocol.WFS({
                    version: "1.1.0",
                    url: Heron.PDOK.urls.NGEINGEOSERVERWFS,
                    srsName: "EPSG:28992",
                    featureType: "GM_SP_KAD_GRONDPERCEEL",
                    // featureNS: "http://www.nieuwegein.nl"
                    featurePrefix: 'nieuwegein'
                }),
                downloadFormats: [
                     {
                         name: 'CSV',
                         outputFormat: 'csv',
                         fileExt: '.csv'
                     }
                 ],
                items: [
				/* WORKING
                    {
                        xtype: "textfield",
                        name: "PERC_ID__like",
                        value: 'JPS00B 11070G0000',
                        fieldLabel: "  Kad.Nr"
                    },
				*/
				/*
					{
                    xtype: "combo",
                        name: "PERC_ID",
						store:['JPS00A','JPS00B','JPS00C'],
                        fieldLabel: "  Gemeente en Sectie"
                    },
                    {
                        xtype: "textfield",
                        name: "PERC_ID",
                        //value: 'JPS00B 11070G0000',
						value: '11070G0000',
                        fieldLabel: "  Kad.Nr"
                    },
				*/
					{
                    xtype: "combo",
                        name: "GEM_CODE",
						store:['JPS00','VWK00'],
                        fieldLabel: "  Gemeentecode"
                    },
					{
                    xtype: "combo",
                        name: "SECTIE",
						store:['A','B','C','D','E','G'],
                        fieldLabel: "  Sectie"
                    },
                    {
                        xtype: "textfield",
                        name: "PERC_NR__like",
						value: '',
                        fieldLabel: "  Perceelnr."
                    },
                    {
                        xtype: "label",
                        id: "helplabel",
                        html: 'Zoeken op kadastraal perceelnummer<br/>Kies Gemeentecode en Sectie<br/> en voer perceelnummer in (11070).<br/>',
                        style: {
                            fontSize: '10px',
                            color: '#AAAAAA'
                        }
                    }
                ],
                hropts: {
                    onSearchCompleteZoom: 10,
                    autoWildCardAttach: true,
                    caseInsensitiveMatch: true,
                    logicalOperator: OpenLayers.Filter.Logical.AND
                },
				layerOpts: [
					// name of layer to make visible after search
                	{ layerOn: 'BRK', layerOpacity: 1.0 }
                ]
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                columns: [
                    { header: "PERC_ID", width: 200, dataIndex: "PERC_ID" }
                    /*,
                    {
                        header: "Desc",
                        width: 200,
                        dataIndex: "cmt"
                    }*/
                ],
                exportFormats: ['XLS', 'WellKnownText'],
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8
                }
            }
        }
		
		// zoeken via het tekenen van een geometrie
        ,
        {
            searchPanel: {
                xtype: 'hr_searchbydrawpanel',
                name: 'Zoeken door een vlak of punt te tekenen',
                header: false,				
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                autoConfig: true,
                autoConfigMaxSniff: 100,
                exportFormats: ['XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
                gridCellRenderers: Heron.options.gridCellRenderers,
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: false
                }
            }
        }
        
		// zoeken op basis van de wfs in een andere laag
        /*,
        {
            searchPanel: {
                xtype: 'hr_searchbyfeaturepanel',
                name: __('Search by Feature Selection'),
                description: 'Select feature-geometries from one layer and use these to perform a spatial search in another layer.',
                header: false,
                border: false,
                bodyStyle: 'padding: 6px',
                style: {
                    fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
                    fontSize: '12px'
                }
            },
            resultPanel: {
                xtype: 'hr_featuregridpanel',
                id: 'hr-featuregridpanel',
                header: false,
                border: false,
                autoConfig: true,
                exportFormats: ['XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
                gridCellRenderers: Heron.options.gridCellRenderers,
                hropts: {
                    zoomOnRowDoubleClick: true,
                    zoomOnFeatureSelect: false,
                    zoomLevelPointSelect: 8,
                    zoomToDataExtent: false
                }
            }
        }*/

    ]
};

/*****************************************************************************
 * MAP - GENERAL SETTINGS
 *****************************************************************************/

Heron.options.map.settings = {
    projection: 'EPSG:28992',
    units: 'm',
    resolutions: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105, 0.0525],
    maxExtent: '-285401.920, 22598.080, 595401.920, 903401.920',
    //maxExtent: '128253,445498,141747,453226',
    //center: '155000,463000',
    restrictedExtent: new OpenLayers.Bounds(130000,445000,140000,455000),
    center: '134000,450000',
    xy_precision: 0,
    //zoom: 2,
    zoom: 9,
    theme: null,
    // Custom formatting of x coordinate text.
    formatX: function (lon, precision) {
        var s = '';
        if (precision > 0)
            s = ',' + '000000000000000000'.slice(0, precision);
        return 'x: ' + Ext.util.Format.number(lon, '0.000' + s + '/i');
    },
    // Custom formatting of y coordinate text.
    formatY: function (lat, precision) {
        var s = '';
        if (precision > 0)
            s = ',' + '000000000000000000'.slice(0, precision);
        return 'y: ' + Ext.util.Format.number(lat, '0.000' + s + '/i') + ' m.';
    },

    // Useful to always have permalinks enabled. Default is enabled with these settings.
    // MapPanel.getPermalink() returns current permalink.
    permalinks: {
        // The prefix to be used for parameters, e.g. map_x, default is 'map'.
        paramPrefix: 'map',
        // Encodes values of permalink parameters ? default false.
        encodeType: false,
        // Use Layer names i.s.o. OpenLayers-generated Layer Id's in Permalinks.
        prettyLayerNames: true
    }
};

/*****************************************************************************
 * MAP TOOLBAR
 * - FeatureInfo - only Grid panel, no export.
 *****************************************************************************/

// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well.

// richard
// set the default number of maxfeatures here, OR in the featureInfoPanel object
//Heron.widgets.ToolbarBuilder.defs.featureinfo.options.controlDefaults.maxFeatures=25;

Heron.options.map.toolbar = [
    // Save map/add bookmarks
    {type: "addbookmark", options: {
        tooltip: "Kaart opslaan"
    }},
    {type: "-"},
    // Identify
    {type: "featureinfo", options: {
        tooltip: "Informatie uit de kaart opvragen",
        hover: false,
        pressed: true,
        drillDown: true,
        controlDefaults: {
            maxFeatures: 400
        },
        popupWindow: {
            width: 600,
            height: 300,
            featureInfoPanel: {
                showTopToolbar: true,
                displayPanels: ['Table'],
                // Should column-names be capitalized? Default true.
                columnCapitalize: true,
                hideColumns: ['objectid', 'gid'],
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                // exportFormats: ['CSV', 'XLS'],
                // In case that the same layer would be requested more than once: discard the styles
                discardStylesForDups: true,
                // Export to download file. Option values are 'CSV', 'XLS', or a Formatter object (see FeaturePanel) , default is no export (results in no export menu).
                exportFormats: ['CSV', 'XLS', 'GMLv2', 'Shapefile',
                    {
                        name: 'Esri Shapefile (WGS84)',
                        formatter: 'OpenLayersFormatter',
                        format: 'OpenLayers.Format.GeoJSON',
                        targetFormat: 'ESRI Shapefile',
                        targetSrs: 'EPSG:4326',
                        fileExt: '.zip',
                        mimeType: 'application/zip'
                    },
                    {
                        // Try this with PDOK Streekpaden and Fietsroutes :-)
                         name: 'GPS File (GPX)',
                         formatter: 'OpenLayersFormatter',
                         format: 'OpenLayers.Format.GeoJSON',
                         targetSrs: 'EPSG:4326',
                         targetFormat: 'GPX',
                         fileExt: '.gpx',
                         mimeType: 'text/plain'
                     },
                    {
                        name: 'OGC GeoPackage (EPSG:28992)',
                        formatter: 'OpenLayersFormatter',
                        format: 'OpenLayers.Format.GeoJSON',
                        targetFormat: 'GPKG',
                        fileExt: '.gpkg',
                        mimeType: 'application/binary'
                    },
                    {
                        name: 'OGC GeoPackage (WGS84)',
                        formatter: 'OpenLayersFormatter',
                        format: 'OpenLayers.Format.GeoJSON',
                        targetFormat: 'GPKG',
                        targetSrs: 'EPSG:4326',
                        fileExt: '.gpkg',
                        mimeType: 'application/binary'
                    },
                    'GeoJSON', 'WellKnownText'
                ]
            }
        }
    }},
    {type: "-"},
    {type: "pan", options: {pressed: false}},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "scale"},    
    {type: "-"},
    // Measure
    // Use "geodesic: true" for non-linear/Mercator projections like Google, Bing etc.
    {type: "measurelength", options: {geodesic: false}},
    {type: "measurearea", options: {geodesic: false}},
    {type: "-"},
    // tooltips
    {type: "tooltips", options: {
        // Pressed cannot be true when anchored is true!
        pressed: false,
		getfeatureControl: {
			hover: true,
			drillDown: false
		},
		popupWindow: {
			title: "Information",
			hideonmove: false,
            anchored: true,
            width: 180,
            height: 120,
			featureInfoPanel: {
                // Option values are 'Table', 'Grid', 'Tree' and 'XML', default is 'Grid' (results in no display menu)
                displayPanels: ['Table'],
                showTopToolbar: false
			}
		}
	}},
    // Options for SearchPanel window
    {type: "searchcenter", options: {
        show: true,
        searchWindow: {
            title: __('Multiple Searches'),
            x: 100,
            y: undefined,
            width: 360,
            height: 440,
            items: [
                Heron.options.searchPanelConfig
            ]
        }
    }},
    // PrintDialog
    {type: "printdialog", options: {
        url: 'http://gng-apo088.linux.nieuwegein.nl:8080/print-servlet-2.1.0/pdf'
        , tooltip: "Printen"
        , windowWidth: 360
        //, mapPrintLayout: "A4" // MapFish - 'name' entry of the 'layouts' array or Null (=> MapFish default)
        // , showTitle: true
        //, mapTitle: 'My Header - Print Dialog'
        // , mapTitleYAML: "mapTitle"             // MapFish - field name in config.yaml - default is: 'mapTitle'
        // , showComment: true
        //, mapComment: 'My Comment - Print Dialog'
        // , mapCommentYAML: "mapComment"       // MapFish - field name in config.yaml - default is: 'mapComment'
        // , showFooter: true
        // , mapFooter: 'My Footer - Print Dialog'
        // , mapFooterYAML: "mapFooter"       // MapFish - field name in config.yaml - default is: 'mapFooter'
        // , printAttribution: true           // Flag for printing the attribution
        // , mapAttribution: null             // Attribution text or null = visible layer attributions
        // , mapAttributionYAML: "mapAttribution" // MapFish - field name in config.yaml - default is: 'mapAttribution'
        , showOutputFormats: true
        // , showRotation: true
        , showLegend: false
        // , showLegendChecked: true
        // , mapLimitScales: false
        , mapPreviewAutoHeight: true // Adapt height of preview map automatically, if false mapPreviewHeight is used.
        // , mapPreviewHeight: 400
    }},
    // Editor
    {type: "oleditor", options: {
        pressed: false,
        olEditorOptions: {
          /*
          activeControls: [
                           'UploadFeature', 'DownloadFeature', 'Separator', 
                           'Navigation', 'SnappingSettings', 'CADTools', 
                           'Separator', 'DeleteAllFeatures', 'DeleteFeature', 
                           'DragFeature', 'SelectFeature', 'Separator', 
                           'DrawHole', 'ModifyFeature', 'Separator'
          ],
          */
          activeControls: [
                             //'SelectFeature', 'DeleteFeature', 'Separator', 'DragFeature', 'SelectFeature', 'Separator' 
                            'DragFeature', 'SelectFeature', 'Separator', 'DeleteFeature', 'StyleFeature'
          ],
          options: {
                StyleFeature: {
                    pageX: 200,
                    pageY: 100
                }},
          featureTypes: ['text', 'point', 'path', 'polygon', 'regular'],
          language: 'nl',
          DownloadFeature: {
            url: Heron.globals.serviceUrl,
            formats: [
              {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
              {name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: new OpenLayers.Format.GML.v2({featureType: 'oledit', featureNS: 'http://geops.de'})},
              {name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
              {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326')},
              {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')},
              {name: 'ESRI Shapefile (zipped, Google projection)', fileExt: '.zip', mimeType: 'application/zip', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'ESRI Shapefile', fileProjection: new OpenLayers.Projection('EPSG:900913')},
              {name: 'ESRI Shapefile (zipped, WGS84)', fileExt: '.zip', mimeType: 'application/zip', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'ESRI Shapefile', fileProjection: new OpenLayers.Projection('EPSG:4326')},
              {name: 'OGC GeoPackage (Google projection)', fileExt: '.gpkg', mimeType: 'application/binary', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'GPKG', fileProjection: new OpenLayers.Projection('EPSG:900913')},
              {name: 'OGC GeoPackage (WGS84)', fileExt: '.gpkg', mimeType: 'application/binary', formatter: 'OpenLayers.Format.GeoJSON', targetFormat: 'GPKG', fileProjection: new OpenLayers.Projection('EPSG:4326')}
            ],
            // For custom projections use Proj4.js
            fileProjection: new OpenLayers.Projection('EPSG:4326')
          },
          UploadFeature: {
            url: Heron.globals.serviceUrl,
            formats: [
              {name: 'Well-Known-Text (WKT)', fileExt: '.wkt', mimeType: 'text/plain', formatter: 'OpenLayers.Format.WKT'},
              {name: 'Geographic Markup Language - v2 (GML2)', fileExt: '.gml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GML'},
              {name: 'GeoJSON', fileExt: '.json', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON'},
              {name: 'GPS Exchange Format (GPX)', fileExt: '.gpx', mimeType: 'text/xml', formatter: 'OpenLayers.Format.GPX', fileProjection: new OpenLayers.Projection('EPSG:4326')},
              {name: 'Keyhole Markup Language (KML)', fileExt: '.kml', mimeType: 'text/xml', formatter: 'OpenLayers.Format.KML', fileProjection: new OpenLayers.Projection('EPSG:4326')},
              {name: 'CSV (with X,Y in WGS84)', fileExt: '.csv', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')},
              {name: 'ESRI Shapefile (zipped, Google projection)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:900913')},
              {name: 'ESRI Shapefile (zipped, WGS84)', fileExt: '.zip', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')},
              {name: 'OGC GeoPackage (Google projection)', fileExt: '.gpkg', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:900913')},
              {name: 'OGC GeoPackage (1 layer, WGS84)', fileExt: '.gpkg', mimeType: 'text/plain', formatter: 'OpenLayers.Format.GeoJSON', fileProjection: new OpenLayers.Projection('EPSG:4326')}
            ],
            // For custom projections use Proj4.js
            fileProjection: new OpenLayers.Projection('EPSG:4326')
          }
        }
      }
    },
    // Cyclomedia
    {
        create: function (mapPanel, options) {
            var map = mapPanel.getMap();

            CyclomediaControl = OpenLayers.Class(OpenLayers.Control, {
                defaultHandlerOptions: {
                    'single': true,
                    'double': false,
                    'pixelTolerance': 0,
                    'stopSingle': false,
                    'stopDouble': false
                },

                initialize: function(options) {
                    this.handlerOptions = OpenLayers.Util.extend(
                        {}, this.defaultHandlerOptions
                    );
                    OpenLayers.Control.prototype.initialize.apply(
                        this, arguments
                    ); 
                    this.handler = new OpenLayers.Handler.Click(
                        this, {
                            'click': this.trigger
                        }, this.handlerOptions
                    );
                }, 

                trigger: function(e) {
                    var position = map.getLonLatFromPixel(e.xy);
                    var cwindow = window.open("http://gng-ap527.nieuwegein.nl/globespotter/3.0/viewer/index.html?posx="+position.lon.toFixed(0)+"&posy="+position.lat.toFixed(), "globespotter");
                    cwindow.focus();
                }
            }); 

            return new GeoExt.Action({
                text: "Cyclomedia",
                map: map,
                toggleGroup: "toolGroup",
                allowDepress: false,
                tooltip: "Open cyclorama",
                group: "cyclomedia",
                control: new CyclomediaControl()
            });
        }
    },
    // Obliek
    {
        create: function (mapPanel, options) {
            var map = mapPanel.getMap();

            ObliekControl = OpenLayers.Class(OpenLayers.Control, {
                defaultHandlerOptions: {
                    'single': true,
                    'double': false,
                    'pixelTolerance': 0,
                    'stopSingle': false,
                    'stopDouble': false
                },

                initialize: function(options) {
                    this.handlerOptions = OpenLayers.Util.extend(
                        {}, this.defaultHandlerOptions
                    );
                    OpenLayers.Control.prototype.initialize.apply(
                        this, arguments
                    ); 
                    this.handler = new OpenLayers.Handler.Click(
                        this, {
                            'click': this.trigger
                        }, this.handlerOptions
                    );
                }, 

                trigger: function(e) {
                    var position = map.getLonLatFromPixel(e.xy);
                    var cwindow = window.open("http://viewer.slagboomenpeeters.com/?dataset=Nieuwegein&pos="+position.lon.toFixed(0)+"_"+position.lat.toFixed(0)+"&tab=oblique&richting=NOORD&zl=10&renderer=2d&srid=EPSG:28992", "obliek");
                    cwindow.focus();
                }
            }); 

            return new GeoExt.Action({
                text: "Obliek",
                map: map,
                toggleGroup: "toolGroup",
                allowDepress: false,
                tooltip: "Open obliek fotos",
                group: "obliek",
                control: new ObliekControl()
            });
        }
    },	
    {
        type: "namesearch",
        // Optional options, see OpenLSSearchCombo.js
        options : {
            xtype : 'hr_openlssearchcombo',
            id: "pdoksearchcombo",
            width: 280,
            listWidth: 400,
            minChars: 5,
            queryDelay: 400,
            zoom: 12,
            emptyText: __('Search PDOK'),
            tooltip: __('Search PDOK'),
            url: 'http://geodata.nationaalgeoregister.nl/geocoder/Geocoder?max=5',
            queryParam: 'zoekterm'
        }
    }



];

/*****************************************************************************
 * MAP STATUSBAR
 * - hide default mappanel bottom status bar.
 *****************************************************************************/

Heron.options.map.statusbar = null;

/*****************************************************************************
 * BOOKMARKS
 * - Define default bookmarks.
 *****************************************************************************/

//Heron.options.bookmarks = [];
Heron.options.bookmarks = [
    {
        id: 'ngein',
        name: 'Nieuwegein',
        desc: 'De basis kaart',
        layers: ['OpenBasisKaart OSM', 'Natura 2000'],
        x: 133867,
        y: 449832,
        zoom: 10
    }
];
        
/*****************************************************************************
 * MAIN LAYOUT
 * - custom title bar with help link.
 * - fixed height LayerPanel.
 * - fixed height LegendPanel.
 * - alternative status bar.
 *****************************************************************************/

/**
 * Defines the entire layout of a Heron webapp using ExtJS-style.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) components.
 * Each component is either a container of components (xtype: 'panel', i.e. an ExtJS Panel)
 * or a specific leaf component like a map panel (xtype: 'hr_mappanel') or simple HTML
 * panel (xtype: 'hr_htmlpanel'). Each component has a 'xtype' string and component-specific options.
 * The 'xtype' defines the component widget class .
 * For a container-type (xtype: 'panel') the options should include a 'layout' (like 'border' or 'card',
 * and an array of 'items' with each element being a component (another container or a leaf widget component).
 *
 * In order to distinguish ExtJS-specific config options from those that are Heron-specific,
 * the later are prefixed with "hr". These are defined outside this file to allow quick custimization.
 *
 * Specific config options for ExtJS components can be found in the API docs:
 * http://docs.sencha.com/ext-js/3-4/#!/api
 *
 **/

Heron.layout = {
    xtype: 'panel',

    id: 'hr-container-main',
    layout: 'border',
    border: true,

    items: [
        {
            // Top panel.
            xtype: 'panel',
            region: "north",
            height: 50,
            layout: 'hbox',
            layoutConfig: {
                align: 'stretch',
                pack: 'start'
            },
            items: [
                {
                    // Logo.
                    xtype: 'panel',
                    width: 60,
                    border: false,
                    html: '<img  id="viewer_north_img" src="../basis/resources/logo.png" alt="Heron-mc"/>'
                },
                {
                    // Title.
                    xtype: 'panel',
                    flex: 1,
                    border: false,
                    html: '<div id="viewer_north_text">Nieuwegein - Geo</div>'
                }
				/*,
                {
                    // Help link.
                    xtype: 'panel',
                    flex: 1,
                    border: false,
                    html: '<a href="#" id="viewer_north_help" onclick="App.btn_HelpClicked()">Help</a>'  // in app help
					html: '<a href="../basis/help.html" id="viewer_north_help" target="_blank">Help</a>' // external window
                }*/
            ]
        },
        {
            // Left panel.
            xtype: 'panel',
            id: 'hr-menu-left-container',
            layout: 'vbox',
            margins: '0',
            region: "west",
            width: 240,
			collapsible: true,
            border: false,
            items: [
                { xtype: "panel",
                    flex: 1,
                    title: "&nbsp;",
                    layout: 'vbox',
                    width: "100%",
                    border: false,
                    items: [
                        {
                            // LayerTree.
                            xtype: 'hr_layertreepanel',
                            contextMenu: [
                                {
                                    xtype: 'hr_layernodemenulayermetadata'
                                },
								/*{
                                    xtype: 'hr_layernodemenulayerinfo'
                                },*/
                                {
                                    xtype: 'hr_layernodemenuzoomextent'
                                },
                                {
                                    xtype: 'hr_layernodemenuopacityslider'
                                }
                            ],
                            region: 'north',
                            title: "Kaart thema's",
                            flex: 1,
                            width: "100%",
                            border: false,
                            // Optional, use internal default if not set.
                            hropts: Heron.options.layertree
                        }
                    ]
                }
            ]
        },
        {
            // Center panel.
            xtype: 'panel',
            id: 'hr-map-and-info-container',
            layout: 'border',
            region: 'center',
            width: '100%',
            collapsible: false,
            split: false,
            border: false,
            items: [
                {
                    // Map.
                    xtype: 'hr_mappanel',
                    id: 'hr-map2',
                    title: '&nbsp;',
                    region: 'center',
                    collapsible: false,
                    border: false,
                    hropts: Heron.options.map
                }
            ]
        },
        {
            // Bottom panel.
            xtype: 'panel',
            id: 'hr-menu-south-container',
            region: 'south',
            border: false,
            bodyStyle: (Ext.isIE) ? 'display:none;' : '',
            bbar: {
                xtype: 'toolbar',
                items: [
                    '->',
                    {
                        // Measure
                        xtype: "tbtext",
                        id: "bbar_measure",
                        text: ""
                    }, {   
                        type: "-"
                    }, {
                        // X coordinate.
                        xtype: 'tbtext',
                        id: 'x-coord',
                        text: 'x: 0',
                        width: 60
                    }, {
                        // Y coordinate.
                        xtype: 'tbtext',
                        id: 'y-coord',
                        text: 'y: 0 m.',
                        width: 80
                    }, {
                        // Use a dummy text item due to the resize-handle in FF.
                        xtype: 'tbtext',
                        width: 10,
                        text: '&nbsp; &nbsp;'
                    }
                ]
            }
        },
        {
            // Right panel.
            xtype: 'panel',
            id: 'hr-menu-right-container',
            layout: 'vbox',
            margins: '0',
            region: "east",
            width: 240,
			collapsible: true,
            border: false,
            items: [
                { xtype: "panel",
                    flex: 1,
                    title: "&nbsp;",
                    layout: 'vbox',
                    width: "100%",
                    border: false,
                    items: [
                        {
                            // Legend.
                            xtype: 'hr_layerlegendpanel',
                            region: 'center',
                            flex: 1,
                            width: "100%",
                            id: 'hr-layerlegend-panel',
                            border: false,
                            defaults: {
                                useScaleParameter: true,
                                baseParams: {
                                    FORMAT: 'image/png'
                                }
                            },
                            hropts: {
                                // Preload Legends on initial startup.
                                // Will fire WMS GetLegendGraphic's for WMS Legends.
                                // Otherwise Legends will be loaded only when Layer.
                                // becomes visible. Default: false.
                                prefetchLegends: false
                            }
                        },
                        {
                            // Bookmarks.
                            xtype: 'hr_bookmarkspanel',
                            title: 'Beschikbare kaarten',
                            region: 'south',
                            flex: 1,
                            width: "100%",
                            id: 'hr-bookmarks',
                            border: false,
                            // The map contexts to show links for in the BookmarksPanel. 
                            hropts: Heron.options.bookmarks
                        }
                    ]
                }
            ]
        },

    ]
};