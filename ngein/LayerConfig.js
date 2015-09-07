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
 */

// Define the base urls for the layers.
Heron.ngein.urls = {
    NGEIN: 'http://gng-ap713.nieuwegein.nl',
    PDOK : 'http://geodata.nationaalgeoregister.nl',
    OPENBASISKAART_TMS: 'http://openbasiskaart.nl/mapcache/tms'
};

// Define the PDOK urls for the layers.
Heron.PDOK.urls = {
    NGEINGEOSERVER: Heron.ngein.urls.NGEIN + '/geoserver/wms',
    NGEINMAPPROXY: Heron.ngein.urls.NGEIN + '/mapproxy/service',
    PDOKTMS: Heron.ngein.urls.PDOK + '/tms/',
    PDOKWMTS: Heron.ngein.urls.PDOK + '/tiles/service/wmts/'
};

// Define the layers.
Heron.ngein.layermap = {

    /* ------------------------------
     * BRT
     * ------------------------------ */
    pdok_brtachtergrondkaart: new OpenLayers.Layer.TMS("BRT Achtergrondkaart",
            Heron.PDOK.urls.PDOKTMS,
            {layername: 'brtachtergrondkaart',
                type: "png",
                isBaseLayer: true,
                transparent: true,
                bgcolor: "0xffffff",
                visibility: false,
                singleTile: false,
                alpha:true,
                opacity: 1.0,
                attribution: "Bron: BRT Achtergrondkaart, <a href='http://openstreetmap.org/'>OpenStreetMap</a> <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-By-SA</a>",
                transitionEffect: 'resize'}),

    /* ------------------------------
     * BRT Pastel
     * ------------------------------ */
    pdok_brtachtergrondkaart_pastel: new OpenLayers.Layer.TMS("BRT Achtergrondkaart pastel",
            Heron.PDOK.urls.PDOKTMS + '1.0.0/brtachtergrondkaartpastel@EPSG:28992@png8',
            {layername: 'brtachtergrondkaartpastel',
                type: "png",
                isBaseLayer: true,
                transparent: true,
                bgcolor: "0xffffff",
                visibility: false,
                singleTile: false,
                alpha:true,
                opacity: 1.0,
                attribution: "Bron: BRT Achtergrondkaart, <a href='http://openstreetmap.org/'>OpenStreetMap</a> <a href='http://creativecommons.org/licenses/by-sa/2.0/'>CC-By-SA</a>",
                transitionEffect: 'resize'}),

    /* ------------------------------
     * OpenBasisKaart
     * ------------------------------ */
    openbasiskaart_osm: new OpenLayers.Layer.TMS("OpenBasisKaart OSM",
      Heron.ngein.urls.OPENBASISKAART_TMS,
      {layername: 'osm@rd',
          type: "png",
          isBaseLayer: true,
          transparent: true,
          bgcolor: "0xffffff",
          visibility: false,
          singleTile: false,
          alpha: true,
          opacity: 1.0,
          attribution: "(C) <a href='http://openbasiskaart.nl'>OpenBasisKaart</a><br/>Data <a href='http://www.openstreetmap.org/copyright'>CC-By-SA</a> <a href='http://openstreetmap.org/'>OpenStreetMap</a> ",
          transitionEffect: 'resize'}),

    /* ------------------------------
     * Nieuwegein Luchtfoto
     * ------------------------------ */
    ngein_luchtfoto: new OpenLayers.Layer.WMS("Nieuwegein Luchtfoto",
            Heron.PDOK.urls.NGEINMAPPROXY,
            {'layers': 'basisluchtfoto', 'format': 'image/jpeg', transparent: false},
            {'isBaseLayer': true, singleTile: false,
             visibility: false
    }),
    
    /* -------------------------------
     * GBKNI
     * ------------------------------ */
    gbkni: new OpenLayers.Layer.WMS("GBKNI",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_GBKNI_LIJNEN,nieuwegein:GM_SP_GBKNI_CELLEN,nieuwegein:GM_SP_GBKNI_TEKST", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
	   minScale:6000
      }
    ),
             
    /*----------------
     * BGT lijngericht
     ----------------- */
    bgtlijn: new OpenLayers.Layer.WMTS(
        {
            name: 'BGT (lijngericht)',
            url: Heron.PDOK.urls.PDOKWMTS,
            layer: 'bgtlijngericht',
            style: 'default',
            matrixSet: 'EPSG:28992:16',
            matrixIds: ['EPSG:28992:16:0','EPSG:28992:16:1','EPSG:28992:16:2','EPSG:28992:16:3','EPSG:28992:16:4','EPSG:28992:16:5','EPSG:28992:16:6',
                'EPSG:28992:16:7','EPSG:28992:16:8','EPSG:28992:16:9','EPSG:28992:16:10','EPSG:28992:16:11','EPSG:28992:16:12','EPSG:28992:16:13',
                'EPSG:28992:16:14','EPSG:28992:16:15','EPSG:28992:16:16','EPSG:28992:16:17','EPSG:28992:16:18','EPSG:28992:16:19','EPSG:28992:16:20'],
            format: 'image/png8',
            visibility: false,
            isBaseLayer: false,
            attribution: 'Kadaster',
            minScale:5000
        }
    ),
    
    /*----------------
     * BGT standaard
     ----------------- */
    bgtstandaard: new OpenLayers.Layer.WMTS(
        {
            name: 'BGT (standaard)',
            url: Heron.PDOK.urls.PDOKWMTS,
            layer: 'bgtstandaard',
            style: 'default',
            matrixSet: 'EPSG:28992:16',
            matrixIds: ['EPSG:28992:16:0','EPSG:28992:16:1','EPSG:28992:16:2','EPSG:28992:16:3','EPSG:28992:16:4','EPSG:28992:16:5','EPSG:28992:16:6',
                'EPSG:28992:16:7','EPSG:28992:16:8','EPSG:28992:16:9','EPSG:28992:16:10','EPSG:28992:16:11','EPSG:28992:16:12','EPSG:28992:16:13',
                'EPSG:28992:16:14','EPSG:28992:16:15','EPSG:28992:16:16','EPSG:28992:16:17','EPSG:28992:16:18','EPSG:28992:16:19','EPSG:28992:16:20'],
            format: 'image/png8',
            visibility: false,
            isBaseLayer: false,
            attribution: 'Kadaster',
            minScale:5000
        }
    ),
    
    /*----------------
     * BGT achtergrond
     ----------------- */
    bgtachtergrond: new OpenLayers.Layer.WMTS(
        {
            name: 'BGT (achtergrond)',
            url: Heron.PDOK.urls.PDOKWMTS,
            layer: 'bgtstandaard',
            style: 'default',
            matrixSet: 'EPSG:28992:16',
            matrixIds: ['EPSG:28992:16:0','EPSG:28992:16:1','EPSG:28992:16:2','EPSG:28992:16:3','EPSG:28992:16:4','EPSG:28992:16:5','EPSG:28992:16:6',
                'EPSG:28992:16:7','EPSG:28992:16:8','EPSG:28992:16:9','EPSG:28992:16:10','EPSG:28992:16:11','EPSG:28992:16:12','EPSG:28992:16:13',
                'EPSG:28992:16:14','EPSG:28992:16:15','EPSG:28992:16:16','EPSG:28992:16:17','EPSG:28992:16:18','EPSG:28992:16:19','EPSG:28992:16:20'],
            format: 'image/png8',
            visibility: false,
            isBaseLayer: false,
            attribution: 'Kadaster',
            minScale:5000
        }
    ),       

    /* ------------------------------
     * Nieuwegein Kaart
     * ------------------------------ */
    ngein_kaart: new OpenLayers.Layer.WMS("Nieuwegein Kaart",
            Heron.PDOK.urls.NGEINMAPPROXY,
            {'layers': 'basistopo', 'format': 'image/jpeg', transparent: false},
            {'isBaseLayer': true, singleTile: false,
             visibility: true
    }),

    /* ------------------------------
     * Blanco kaart
     * ------------------------------ */
    blanco: new OpenLayers.Layer.Image("Blanco",
        Ext.BLANK_IMAGE_URL,
        OpenLayers.Bounds.fromString(Heron.options.map.settings.maxExtent),
        new OpenLayers.Size(10, 10),
        { resolutions: Heron.options.map.settings.resolutions, 
            isBaseLayer: true, 
            visibility: false, 
            displayInLayerSwitcher: true, 
            transitionEffect: 'resize'
    }),
        
    /* ------------------------------
     * Panden
     * ------------------------------ */
    panden: new OpenLayers.Layer.WMS("Panden (BAG)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BAG_PANDEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml", 
       alpha: true, opacity: 0.7,
       minScale:5000
      }
    ),
    
    /* ------------------------------
     * Hoofdgebouwen (bron GBKN)
     * ------------------------------ */
    hoofdgebouw: new OpenLayers.Layer.WMS("Panden (GBKN)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_GEOOBJ_HOOFDGEBOUW", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml", 
       alpha: true, opacity: 0.7,
       minScale:5000
      }
    ),

    /* ------------------------------
     * Grondpercelen
     * ------------------------------ */
    grondpercelen: new OpenLayers.Layer.WMS("Grondpercelen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_KAD_GRONDPERCEEL", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       //,alpha: true, opacity: 0.7
       minScale:10000
      }
    ),

    
    /* ------------------------------
     * Perceeleigenaren
     * ------------------------------ */
    perceeleigenaren: new OpenLayers.Layer.WMS("Perceeleigenaren",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_KAD_PERCEELEIGENAREN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       //,alpha: true, opacity: 0.7
       minScale:5000
      }
    ),


    /* ------------------------------
     * Gemeentelijk eigendom
     * ------------------------------ */
    gemeentelijkeigendom: new OpenLayers.Layer.WMS("Gemeentelijk eigendom",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_DGN_GEM_EIGENDOM", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:15000
      }
    ),

    /* ------------------------------
     * Grondgebruik
     * ------------------------------ */
    grondgebruik: new OpenLayers.Layer.WMS("Grondgebruik",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_DGN_GRONDGEBRUIK", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:15000
      }
    ),

    /* ------------------------------
     * Grondverhuur
     * ------------------------------ */
    grondverhuur: new OpenLayers.Layer.WMS("Grondverhuur",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_DGN_GRONDVERHUUR", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:15000
      }
    ),

    /* ------------------------------
     * Grasvelden
     * ------------------------------ 
    grasvelden: new OpenLayers.Layer.WMS("Beheer grasvelden",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_GROENBEHEER_MAAIVELDEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
       //,alpha: true, opacity: 0.7
      }
    ),

    /* ------------------------------
     * Verblijfsobjecten
     * ------------------------------ */
    verblijfsobjecten: new OpenLayers.Layer.WMS("Verblijfsobjecten",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BAG_GEOOBJK_VBO_PLUS", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: true, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:15000
      }
    ),

    /* ------------------------------
     * Standplaatsen
     * ------------------------------ */
    standplaatsen: new OpenLayers.Layer.WMS("Standplaatsen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BAG_STANDPLAATSEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: true, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:15000
      }
    ),

    /* ------------------------------
     * Ligplaatsen
     * ------------------------------ */
    ligplaatsen: new OpenLayers.Layer.WMS("Ligplaatsen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BAG_LIGPLAATSEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: true, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:15000
      }
    ),

    /* ------------------------------
     * Rioolbeheer
     * ------------------------------ */
    rioolbeheer: new OpenLayers.Layer.WMS("Rioolbeheer",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_RIOOL_LEIDING", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),
    
    /* ------------------------------
     * Peilgebieden
     * ------------------------------ */
    peilgebieden: new OpenLayers.Layer.WMS("Peilbesluit 2014",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_PEILGEBIEDEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),
    
    /* ------------------------------
     * Persleiding
     * ------------------------------ */
    persleiding: new OpenLayers.Layer.WMS("Persleidingen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_PERSLEIDING", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),
    
    /* ---------------------------------------
     * beheergrens Bestuursregio Utrecht (BRU)
     * --------------------------------------- */
    bru: new OpenLayers.Layer.WMS("Beheergrens BRU",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_DGN_BRU", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),

    /* ------------------------------
     * Waterhuishouding
     * ------------------------------ */
    waterhuishouding: new OpenLayers.Layer.WMS("Waterhuishouding",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_RIOOL_WATERAA,nieuwegein:GM_SP_RIOOL_WATERH,nieuwegein:GM_SP_RIOOL_WATER", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),

    /* ------------------------------
     * Groenbeheer
     * ------------------------------ */
    groenbeheer: new OpenLayers.Layer.WMS("Groenbeheer",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_GROENBEHEER3", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),

    /* ------------------------------
     * Wegbeheer
     * ------------------------------ */
    wegbeheer: new OpenLayers.Layer.WMS("Wegbeheer",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_WEGBEHEER2", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
       }
    ),
    /* ------------------------------
     * Groenbomen
     * ------------------------------ 
    groenbomen: new OpenLayers.Layer.WMS("Groenbeheer bomen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_GROENBEHEER_BOMEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),*/

    /* ------------------------------
     * Flora en fauna
     * ------------------------------ */
    florafauna: new OpenLayers.Layer.WMS("Flora en fauna",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_FLORAFAUNA", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),

    /* ---------------------------------------------------------
     * Overige kabels en Leidingen in beheer Gemeente Nieuwegein
     * --------------------------------------------------------- */
    glasvezel: new OpenLayers.Layer.WMS("overige K&L Ngein",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_K_L_GEMEENTE", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),

    /*
     * PC4
     * ------------------------------
    pc4: new OpenLayers.Layer.WMS("Postcode 4",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:pc4esri2015r1", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),*/

    /* ------------------------------
     * PC6
     * ------------------------------ */
    pc6: new OpenLayers.Layer.WMS("Postcode 6",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:pc6esri2015r1", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),

    /* ------------------------------------------------
     * Komgrens in het kader van de Wegen Verkeers Wet
     * ------------------------------------------------ */
    komgrens: new OpenLayers.Layer.WMS("Komgrens volgen WVW",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_DGN_KOMGRENS", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),

    /* -------------------------------
     * komgrens in het kader van de Boswet
     * ------------------------------ */
    boswet: new OpenLayers.Layer.WMS("Komgrens volgens Boswet",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_DGN_BOSWET", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),
    
    /* ------------------------------
     * Lufo 2015
     * ------------------------------ */
    lufo2015: new OpenLayers.Layer.WMS("Luchtfoto 2015",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2015", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
      }
    ),

    /* ------------------------------
     * Lufo 2014
     * ------------------------------ */
    lufo2014: new OpenLayers.Layer.WMS("Luchtfoto 2014",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2014", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
      }
    ),

    /*
     * Lufo 2013
     * ------------------------------ */
    lufo2013: new OpenLayers.Layer.WMS("Luchtfoto 2013",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2013", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
      }
    ),

    /*
     * Lufo 2012
     * ------------------------------ */
    lufo2012: new OpenLayers.Layer.WMS("Luchtfoto 2012",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2012", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
      }
    ),

    /*
     * Lufo 2011
     * ------------------------------ */
    lufo2011: new OpenLayers.Layer.WMS("Luchtfoto 2011",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2011", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
      }
    )

};

//http://heron-mc.org/lib/Heron/jst/widgets/search/FeatureInfoPanel.html
Heron.options.map.gridcolumns = [ 
    {  
        featureType:'GM_SP_WEGBEHEER2', 
        columns: [ 
            // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
            // ID, NUMMER_WVW, OMSCHRIJVING, BESLUITDATUM
            { dataIndex: "STRAATNAAM", header: 'Straatnaam' },
            { dataIndex: "WEGVAKONDERDEEL", header: 'Wegvakonderdeel' },
            { dataIndex: "WEGFUNCTIE", header: 'Wegfunctie' },
            { dataIndex: "WEGTYPE", header: 'Wegtype' },
            { dataIndex: "VERHARDINGSOORT", header: 'Verhardingssoort' },
            { dataIndex: "ONDERHOUDSPLICHTIGE", header: 'Onderhoudsplichtige' },
            { dataIndex: "HOEVEELHEID", header: 'Oppervlakte' }
        ] 
    },
    {  
		featureType:'GM_SP_GBKNI_CELLEN', 
		columns: [ { dataIndex: "IGDS_LEVEL_COMMENT", header: 'Object', width: 160 } ] 
	},
    {  
		featureType:'GM_SP_GBKNI_LIJNEN', 
		columns: [ { dataIndex: "IGDS_LEVEL_COMMENT", header: 'Object', width: 160 } ] 
	},
    {  
		featureType:'GM_SP_GBKNI_TEKST', 
		columns: [ { dataIndex: "IGDS_LEVEL_COMMENT", header: 'Object', width: 160 } ] 
	}
    
    /*
    ,{  
        featureType:'GM_SP_DGN_KOMGRENS', 
        columns: [ 
            // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
            // ID, NUMMER_WVW, OMSCHRIJVING, BESLUITDATUM
            { dataIndex: "OMSCHRIJVING", header: 'Omschrijving', width: 120 },
            { dataIndex: "BESLUIT_DATUM", header: 'Datum besluit', width: 120 },
            { header: "More Info", width: 150,
              renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                  var template = '<a target="_new" href="http://en.wikipedia.org/wiki/{OMSCHRIJVING}">Wikipedia Info</a>';
                  var options = {attrNames: ['OMSCHRIJVING']};
                  return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
              }
            },
            { header: "More Info", width: 150,
              renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                  var template = '<a href="http://localhost/{OMSCHRIJVING}.png" target="foo"><img height=40 src="http://localhost/{OMSCHRIJVING}.png"/></a>';
                  //var template = '<img height=40 src="http://localhost/{OMSCHRIJVING}.png"/>';
                  var options = {attrNames: ['OMSCHRIJVING','OMSCHRIJVING']};
                  return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
              }
            }           
        ] 
    }*/
]

// Create list of layers
// LET OP 1: Een laag MOET hier aanwezig zijn om in de viewer te kunnen gebruiken
// LET OP 2: NET ANDERSOM DAN IN DE VIEWER !!! Dus onderaan de vlakkenlagen.
// BOVENAAN IS ONDERAAN !!!
Heron.options.map.layers = [

    // The baselayers.
    Heron.ngein.layermap.openbasiskaart_osm,
    Heron.ngein.layermap.pdok_brtachtergrondkaart,
    Heron.ngein.layermap.pdok_brtachtergrondkaart_pastel,
    Heron.ngein.layermap.ngein_luchtfoto,
    Heron.ngein.layermap.ngein_kaart,
    Heron.ngein.layermap.blanco,

    // Theme layers.
    // vlakdekkend
    Heron.ngein.layermap.lufo2011,
    Heron.ngein.layermap.lufo2012,
    Heron.ngein.layermap.lufo2013,
    Heron.ngein.layermap.lufo2014,
    Heron.ngein.layermap.lufo2015,
    // polygonen
    Heron.ngein.layermap.panden,
    Heron.ngein.layermap.grondpercelen,
    Heron.ngein.layermap.perceeleigenaren,
    Heron.ngein.layermap.gemeentelijkeigendom,
    Heron.ngein.layermap.grondgebruik,
    Heron.ngein.layermap.grondverhuur,
    //Heron.ngein.layermap.grasvelden,
    Heron.ngein.layermap.verblijfsobjecten,
    Heron.ngein.layermap.standplaatsen,
    Heron.ngein.layermap.ligplaatsen,
    Heron.ngein.layermap.hoofdgebouw,
    Heron.ngein.layermap.bgtachtergrond,
    Heron.ngein.layermap.bgtstandaard,
    Heron.ngein.layermap.bgtlijn,
    Heron.ngein.layermap.gbkni,
    Heron.ngein.layermap.bru,
    Heron.ngein.layermap.groenbeheer,
    Heron.ngein.layermap.wegbeheer,
    Heron.ngein.layermap.persleiding,
    Heron.ngein.layermap.peilgebieden,
    Heron.ngein.layermap.rioolbeheer,
    Heron.ngein.layermap.waterhuishouding,
    Heron.ngein.layermap.glasvezel,
    //Heron.ngein.layermap.groenbomen,
    Heron.ngein.layermap.florafauna,
    //Heron.ngein.layermap.pc4,
    Heron.ngein.layermap.pc6,
    Heron.ngein.layermap.komgrens,
    Heron.ngein.layermap.boswet
];

// In Heron the first element in the layers-array will be the last in the legend
// Reverse the array above... werk niet!!! Print gebruikt ook bovenstaande array
// Heron.options.map.layers.reverse();


/*

// mapje luchtfotos, net andersom
// mapje algemeen pc bag etc
// mapje eigendom (kadaster), grond t/m grondpercelen
// mapje beheerthema's boswet, kommgrens, florafauna, *beheer,
    
*/
// Hier kun je mapjes aanmaken
// LET OP 1: en hier is de volgorde WEL precies zoals je het aanmaakt
// je gebruikt de ID zoals die hierboven staat + .name erachter
var treeTheme = [
    {
        text:'Achtergrondlagen', expanded: false, children:
            [
                {nodeType: "gx_layer", layer: Heron.ngein.layermap.ngein_kaart.name },
                {nodeType: "gx_layer", layer: Heron.ngein.layermap.ngein_luchtfoto.name },
                {nodeType: "gx_layer", layer: Heron.ngein.layermap.pdok_brtachtergrondkaart.name },
                {nodeType: "gx_layer", layer: Heron.ngein.layermap.pdok_brtachtergrondkaart_pastel.name },
                {nodeType: "gx_layer", layer: Heron.ngein.layermap.openbasiskaart_osm.name },
		{nodeType: "gx_layer", layer: Heron.ngein.layermap.blanco.name }
            ]
    },
    {
        text:"Thema's", expanded: true, children:
            [
                {
                    text:'Algemeen', expanded: false, children:
                        [
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.pc4.name   },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.pc6.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.panden.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.hoofdgebouw.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.verblijfsobjecten.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.standplaatsen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.ligplaatsen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.gbkni.name },                            
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bgtlijn.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bgtstandaard.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bgtachtergrond.name }
                        ]
                }
                ,
                {
                    text:'Kadaster', expanded: true, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondpercelen.name   },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.perceeleigenaren.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.gemeentelijkeigendom.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondgebruik.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondverhuur.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bru.name }
                        ]
                }
                ,
                {
                    text:'Beheer', expanded: true, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.komgrens.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.boswet.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.rioolbeheer.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.persleiding.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.waterhuishouding.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.glasvezel.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.groenbeheer.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.wegbeheer.name },
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.grasvelden.name },
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.groenbomen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.peilgebieden.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.florafauna.name }
                        ]
                }
                ,
                {
                    text:"Luchtfoto's", expanded: false, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2015.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2014.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2013.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2012.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2011.name}
                        ]
                }
                

            ]
    }
];
// Replace default layer browser DefaultConfig.js
// Pass our theme tree config as an option
Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = treeTheme;
