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

// define the urls for the services
// these are defined in:
//		Heron.ngein.urls
// but:
// IMPORTANT: the url's are moved to Config.js, to make it easier to edit the LayerConfig.js

// Define the layers.
Heron.ngein.layermap = {

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
     * Wijkgrenzen Nieuwegein
     * ------------------------------ */
    wijken: new OpenLayers.Layer.WMS("Wijken",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_WIJKEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       //,alpha: true, opacity: 0.7
       //minScale:5000
      }
    ),

    /* ------------------------------
     * PC4
     * ------------------------------*/
    pc4: new OpenLayers.Layer.WMS("Postcode 4",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:pc4esri2015r1", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, 
	   featureInfoFormat: "application/vnd.ogc.gml"
	   //featureInfoFormat: "application/json"
      }
    ),

    /* ------------------------------
     * PC6
     * ------------------------------ */
    pc6: new OpenLayers.Layer.WMS("Postcode 6",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:pc6esri2015r1", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, 
	   featureInfoFormat: "application/vnd.ogc.gml",
	   //featureInfoFormat: "application/json",
       minScale:30000,
       metadata:{
                    wfs: {
                        protocol: 'fromWMSLayer',
                        featurePrefix: 'pc6esri2015r1',
                        srsName: "EPSG:28992",
                    }
                }
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
    ),

    /*
     * GBA Migratie 2011
     * ------------------------------ */
    gbamigratie2011: new OpenLayers.Layer.WMS("GBA Migratie 2011",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:gba_migratie_per_jaar',
		  viewparams:'jaar:2011',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  
		   visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		 
      }
    ),

    /*
     * GBA Migratie 2012
     * ------------------------------ */
    gbamigratie2012: new OpenLayers.Layer.WMS("GBA Migratie 2012",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:gba_migratie_per_jaar',
		  viewparams:'jaar:2012',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
      }
    ),

    /*
     * GBA Migratie 2013
     * ------------------------------ */
    gbamigratie2013: new OpenLayers.Layer.WMS("GBA Migratie 2013",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:gba_migratie_per_jaar',
		  viewparams:'jaar:2013',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
      }
    ),

    /*
     * Vervuiling
     * ------------------------------ */
    vervuiling: new OpenLayers.Layer.WMS("Vervuiling",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_CRM_SM_VV',
		  //viewparams:'jaar:2013',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
			, visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de vervuiling vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Vervuiling">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
    /*
     * GM_SP_CRM_SM_BBB_EMIG_TR 
	 * vertrekkers
     * ------------------------------ */
    vertrekkers: new OpenLayers.Layer.WMS("Vertrekkers",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_CRM_SM_BBB_EMIG_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
			, visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		   ,metadata:{
					
					html: 'Meer informatie over de Vertrekkers vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Vertrekkers">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),

	/**
	* GM_SP_SM_SK_SIGN                      
	* signaleringsocialekwetsbaarheid
	**/
    signaleringsocialekwetsbaarheid: new OpenLayers.Layer.WMS("Signalering sociale kwetsbaarheid",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_SK_SIGN',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  //, diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de signalering sociale kwetsbaarheid vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Signalering_SK">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/**
	* GM_SP_SM_SK_IMB_TR                      
	* inkomenenminimabeleid
	* jaar,maand,waarde,value
	* 2015,1,13,-1, 2015,2,10,-1, 2015,3,8,-1, 2015,4,3,-1
	**/
    inkomenenminimabeleid: new OpenLayers.Layer.WMS("Inkomen- en minimabeleid",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_SK_IMB_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over het inkomen en minimabeleid vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Inkomen_en_minimabeleid">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/**
	* GM_SP_SM_SK_WMO_TR
	* wmoverstrekkingen
	* jaar,maand,waarde,value
	* "2015,2,374,1, 2015,3,235,-1"
	**/
    wmoverstrekkingen: new OpenLayers.Layer.WMS("Aantal WMO verstrekkingen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_SK_WMO_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de wmo verstrekkingen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Aantal_wmo_verstrekkingen">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),	
	
	/**
	* GM_SP_SM_SK_WMO_TR
	* schuldhulpverlening
	* jaar,maand,waarde,value
	* "2015,2,374,1, 2015,3,235,-1"
	**/
    schuldhulpverlening: new OpenLayers.Layer.WMS("Schuldhulpverlening",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_SK_SHV_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de schuldhulpverlening vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Schuldhulpverlening">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),		
	
	/**
	* 
	* GM_SP_SM_VEO_OV_TR
	* overlast meldingen
	* jaar,maand,waarde,value
	* "2015,2,374,1, 2015,3,235,-1"
	**/
    overlastmeldingen: new OpenLayers.Layer.WMS("Jeugdoverlast",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_VEO_OV_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over jeugdoverlast vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Jeugdoverlast">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),

	/**
	 * GM_SP_SM_VEO_AI_TR
     * Autoinbraken
	 * jaar,maand,waarde,value
	 * 2016,01,0,N, 2016,02,0,N
     **/
    autoinbraken: new OpenLayers.Layer.WMS("Autoinbraken",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_VEO_AI_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over auto-inbraken vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Auto_inbraken">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),

	/**
	 * GM_SP_SM_VEO_WI_TR
     * Woninginbraken
	 * jaar,maand,waarde,value
	 * 2016,01,0,N, 2016,02,0,N,2016, 03,0,N
     **/	 
    woninginbraken: new OpenLayers.Layer.WMS("Woninginbraken",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_VEO_WI_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over woninginbraken vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Woninginbraken">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),	
	
	/**
	* 
	* GM_SP_SM_VEO_PO_TR
	* parkeeroverlast
	* 
	* 
	**/
    parkeeroverlast: new OpenLayers.Layer.WMS("Parkeeroverlast",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_VEO_PO_TR',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over parkeeroverlast vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Parkeeroverlast">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/**
	* GM_SP_SM_VEO_SIGN                      
	* signaleringveiligheidenoverlast
	**/
    signaleringveiligheidenoverlast: new OpenLayers.Layer.WMS("Signalering veiligheid en overlast",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_VEO_SIGN',
		  //layers: 'nieuwegein:kaas',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  //, diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de signalering veiligheid en overlast vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Signalering_veo">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/**
	* GM_SP_SM_BBB_SIGN
	* signaleringbetrokkenheidbijbuurt
	* GEEN TIJDREEKS!
	**/
    signaleringbetrokkenheidbijbuurt: new OpenLayers.Layer.WMS("Signalering betrokkenheid bij buurt",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_BBB_SIGN',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  //, featureInfoFormat: "application/vnd.ogc.gml"
		  //, diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de signalering betrokkenheid bij buurt vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Signalering_bbb">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),	
	
	/**
	* GM_SP_SM_IE_BBB_ZAP
	* zwerfafvalpakkers
	* GEEN TIJDREEKS!
	**/
    zwerfafvalpakkers: new OpenLayers.Layer.WMS("Zwerfafvalpakkers",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_IE_BBB_ZAP',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  //, featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de zwerfafvalpakkers vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Zwerfafvalpakkers">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	
	/**
	* GM_SP_SM_IE_BBB_ZBG
	* zelfbeheergroen
	* GEEN TIJDREEKS!	
	**/
    zelfbeheergroen: new OpenLayers.Layer.WMS("Zelfbeheergroen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_IE_BBB_ZBG',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  //, featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de zelfbeheergroen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Zelfbeheergroen">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),	
	
	/**
	* GM_SP_SM_BBB_IE
	* Betrok_inwonersenquete
	* GEEN TIJDREEKS!
	**/
    betrok_inwonersenquete: new OpenLayers.Layer.WMS("Betrok_inwonersenquete",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_BBB_IE',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true
		  , visibility: false
		  //, featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de betrokkenheid inwonersenquete vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Betrokkenheid_IE">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/*
     * Belevingswereld
     * ------------------------------ */
    belevingswereld: new OpenLayers.Layer.WMS("Belevingswereld",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:belevingswereld',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false, opacity: 0.5
		  ,
            metadata: {
                legend: {
                    // Use a fixed URL as legend
                    legendURL: 'img/belevingswereldlegenda.png',
                    hideInLegend: false
                }
            }
      }
    ),	
    
    
	/*
     * Belevingswereldpergemwijkbuurt
     * ------------------------------ */
    belevingswereldpergemwijkbuurt: new OpenLayers.Layer.WMS("Belevingswereld per gem/wijk/buurt",
      'http://gng-ap713.nieuwegein.nl/qgis/qgis_mapserv.fcgi.exe?service=WMS&map=\\\\nieuwegein\\shared\\geo\\GIS_Consultancy\\2017\\Betere_buurten\\QGIS\\beterebuurten.qgs',
      {
		  layers: 'belevingswerelden_pol,belevingswerelden_gem,belevingswerelden_wijk,belevingswerelden_brt',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,
            metadata: {
                legend: {
                    // Use a fixed URL as legend
                    legendURL: 'img/belevingswereldlegenda.png',
                    hideInLegend: false
                }
            }
      }
    ),	
	/*
    
     * Inwoners per wijk
     
     LET OP, deze gebruikt als style 'inwoners_per_wijk'
     Dit is een query laag omdat deze records geen geom hebben
     select * from gm_sp_gba_bag_bev_dichtheid_2 where zoom = 30  == wijknivo
     20161102: in vngt zitten er in die rijen geen geometrie
     Je moet de TOTAAL_PER_WIJK records hebben!    
     * ------------------------------ */
    inwoners_per_wijk: new OpenLayers.Layer.WMS("Inwoners per wijk",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:inwoners_per_wijk',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),
		
	/*
     * Leegstand woningen
     * ------------------------------ */
    leegstand_woningen: new OpenLayers.Layer.WMS("Leegstand woningen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_DIV_LEEGSTAND,nieuwegein:GM_SP_DIV_LEEGSTAND',
		  styles: 'leegstand,leegstand_woning_sp',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  //,featureInfoFormat: "application/vnd.ogc.gml"
		  ,metadata:{
					
					html: 'Meer informatie over de leegstand woningen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#leegstand_woningen">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
			
	/* ------------------------------------------------
     * Projectenkaart 2017
     * ------------------------------------------------ */
    projectenkaart2017: new OpenLayers.Layer.WMS("Projectenkaart 2017",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:projectenkaart2017", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       legendURL: "//gng-ap532.nieuwegein.nl/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=projectenkaart2017"
      }
    ),  
	
	/*
     * Oppervlakte per inwoner
     * ------------------------------ */
    oppervlakte_per_inwoner: new OpenLayers.Layer.WMS("Woonoppervlakte per inwoner",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_BAGGBA_SM_BEW_INW_PER_OP',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  //,featureInfoFormat: "application/vnd.ogc.gml"
		  ,metadata:{
					
					html: 'Meer informatie over de woonoppervlakte per inwoner vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#woonoppervlakte_per_inwoner">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),	
	
	/*
     * Veiligheidsgevoel_inwonersenquete
     * ------------------------------ */
    veiligheid_inwonerenquete: new OpenLayers.Layer.WMS("Veiligheid_inwonersenquete",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_SM_VEO_IE',
		  format: "image/png", 
		  transparent: true,
		  viewparams:'periodestart:1;periodeeind:13;'
	  },
      {	  
	  isBaseLayer: false, singleTile: true,  visibility: false
	  ,metadata:{
					
					html: 'Meer informatie over het veiligheidsgevoel uit de inwonersenquete vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Veiligheid_IE">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),	
	
	
	/*
     * nieuwegein:bevolkingsdichtheid_0_tot_4
     * ------------------------------ */
    bevolkingsdichtheid_0_tot_4: new OpenLayers.Layer.WMS("Bevolkingsdichtheid 0 tot 4 jaar",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:bevolkingsdichtheid_0_tot_4',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		   ,metadata:{
					
					html: 'Meer informatie over de bevolkingsdichtheid vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Bevolkingsdichtheid">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	
	/*
     * nieuwegein:bevolkingsdichtheid_4_tot_12
     * ------------------------------ */
    bevolkingsdichtheid_4_tot_12: new OpenLayers.Layer.WMS("Bevolkingsdichtheid 4 tot 12 jaar",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:bevolkingsdichtheid_4_tot_12',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de bevolkingsdichtheid vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Bevolkingsdichtheid">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),

	/*
     * nieuwegein:bevolkingsdichtheid_12_tot_18
     * ------------------------------ */
    bevolkingsdichtheid_12_tot_18: new OpenLayers.Layer.WMS("Bevolkingsdichtheid 12 tot 18 jaar",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:bevolkingsdichtheid_12_tot_18',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de bevolkingsdichtheid vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Bevolkingsdichtheid">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),

	/*
     * nieuwegein:bevolkingsdichtheid_18_tot_25
     * ------------------------------ */
    bevolkingsdichtheid_18_tot_25: new OpenLayers.Layer.WMS("Bevolkingsdichtheid 18 tot 25 jaar",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:bevolkingsdichtheid_18_tot_25',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de bevolkingsdichtheid vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Bevolkingsdichtheid">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),

	/*
     * nieuwegein:bevolkingsdichtheid_70_EN_OUDER
     * ------------------------------ */
    bevolkingsdichtheid_70_en_ouder: new OpenLayers.Layer.WMS("Bevolkingsdichtheid 70 en ouder",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:bevolkingsdichtheid_70_en_ouder',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  , featureInfoFormat: "application/vnd.ogc.gml"
		  , diagramgroup:true // only ONE layer per diagram group can generate graphics
		  ,metadata:{
					
					html: 'Meer informatie over de bevolkingsdichtheid vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Bevolkingsdichtheid">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/*
     * Buurten geo informatie
     * ------------------------------ */
    buurten_geo_informatie: new OpenLayers.Layer.WMS("Buurten geo informatie",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:buurten_geo_informatie',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),
	
	/*
	 * Sociale huurwoningen: Mitros Juthpaas en Portaal
	 * Heron.ngein.layermap.socialehuurwoningen
	 */ 
    socialehuurwoningen: new OpenLayers.Layer.WMS("Sociale huurwoningen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:Mitros,nieuwegein:Portaal,nieuwegein:Jutphaas',
		  format: "image/png", 
		  transparent: true
	  },
      {	  	isBaseLayer: false, singleTile: true,  visibility: false
			,featureInfoFormat: "application/vnd.ogc.gml"
			,metadata:{
					
					html: 'Meer informatie over de Sociale huurwoningen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Sociale_huurwoningen">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/*
	 * WOZ waarden van woningen
	 */
	wozwaarden: new OpenLayers.Layer.WMS("WOZ waarden woningen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:woz_gegevens',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
		  ,metadata:{
					
					html: 'Meer informatie over de WOZ waarde woningen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#WOZ_waarde_woningen">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/*
	 * Koop en huurwoningen
	 * Heron.ngein.layermap.koopenhuurwoningen
	 */
	koopenhuurwoningen: new OpenLayers.Layer.WMS("Koop en huurwoningen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:GM_SP_KOOP_HUURWONINGEN',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
		   ,metadata:{
					
					html: 'Meer informatie over de Koop en huurwoningen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Koop_en_huurwoningen">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
	
	/*
	 * Woningen van 250m oppervlakte en groter
	 * Woningen GM_SP_BAG_GEOOBJK_VBO_PLUS >250m opp en GEBRUIK = 'woonfunctie'
	 */
	woningen250eg: new OpenLayers.Layer.WMS("Woningen >250 m2",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {
		  layers: 'nieuwegein:woningen250eg',
		  format: "image/png", 
		  transparent: true
	  },
      {	  isBaseLayer: false, singleTile: true,  visibility: false
		  ,featureInfoFormat: "application/vnd.ogc.gml"
		   ,metadata:{
					
					html: 'Meer informatie over de woningen groter dan 250m2 vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Woningen_gt_250m2">hier</a>' // metadata as html (will be place between <p></p>)		   
				}
      }
    ),
    
    /*
	 * Supermarkten op basis van provinciaal arbeidsregister
	 */
	supermarkten: new OpenLayers.Layer.WMS("Supermarkten",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:supermarkten_wa',
		  format: "image/png", 
		  transparent: true, 
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de supermarkten vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Supermarkten">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
    
     /*
	 * Buurthuizen uit gemeentegids
	 */
	buurthuizen: new OpenLayers.Layer.WMS("Buurthuizen",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:buurthuizen_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de buurthuizen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Buurthuizen">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
     /*
	 * Wijk ontmoetingsplek aangeleverd door SMO
	 */
	wijk_ontmoetingsplekken: new OpenLayers.Layer.WMS("Wijk ontmoetingsplek",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:wijk_ontmoetingsplek_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de wijk ontmoetingsplekken vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Wijk_ontmoetingsplekken">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
     /*
	 * Huisartsen op basis van gemeentegids
	 */
	huisartsen: new OpenLayers.Layer.WMS("Huisartsen",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:huisartsen_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de wijk ontmoetingsplekken vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Huisartsen">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ), 
     /*
	 * Huisartsen op basis van gemeentegids
	 */
	fysiotherapie: new OpenLayers.Layer.WMS("Fysiotherapie",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:fysiotherapie_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over Fysiotherapie vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Fysiotherapie">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
       /*
	 * Ziekenhuis op basis van gemeentegids
	 */
	ziekenhuis: new OpenLayers.Layer.WMS("Ziekenhuis",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:ziekenhuis_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over het ziekenhuis vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Ziekenhuis">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
       /*
	 * Basisscholen op basis van DUO
	 */
	basisscholen: new OpenLayers.Layer.WMS("Basisschool",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:basisscholen_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de basisscholen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Basisscholen">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
     /*
	 * Middelbare scholen op basis van DUO
	 */
	middelbare_scholen: new OpenLayers.Layer.WMS("Middelbare school",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:middelbare_scholen_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de middelbare scholen vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Middelbare_scholen">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
      /*
	 * Buitenschoolse opvang op basis van landelijk register kinderopvang LRK
	 */
	buitenschoolse_opvang: new OpenLayers.Layer.WMS("Buitenschoolse Opvang",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:buitenschoolse_opvang_bso_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de buitenschoolse opvang vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Buitenschoolse_opvang">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
     /*
	 * Kinderdagverblijven op basis van landelijk register kinderopvang LRK
	 */
	kinderdagverblijven: new OpenLayers.Layer.WMS("Kinderdagverblijf",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:kinderdagverblijf_kdv_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de kinderdagverblijven opvang vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Kinderdagverblijven">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    ),
     /*
	 * Gastouder opvang op basis van landelijk register kinderopvang LRK
	 */
	gastouder_opvang: new OpenLayers.Layer.WMS("Gastouder opvang",
      Heron.PDOK.urls.NGEINGEOSERVERNEW,
      {
		  layers: 'nieuwegein_wa:gastouder_opvang_vgo_wa',
		  format: "image/png", 
		  transparent: true
	  },
      {	    isBaseLayer: false, singleTile: true,  visibility: false
            ,featureInfoFormat: "application/vnd.ogc.gml"
            ,metadata:{		
					html: 'Meer informatie over de kinderdagverblijven opvang vind je: <a target="nwwindow" href="./metadata/Metadata_Stadsmonitor.htm#Gastouder_opvang">hier</a>' // metadata as html (will be place between <p></p>)		   
            }
      }
    )
    
    
    
};

/**
 * Now add the default baselayers from basis/Config.js, defined in Heron.ngein.baselayers
 **/
for (var baselayer in Heron.ngein.baselayers) {
    if (Heron.ngein.baselayers.hasOwnProperty(baselayer)) {
			Heron.ngein.layermap[baselayer] = Heron.ngein.baselayers[baselayer]
	}
};

//http://heron-mc.org/lib/Heron/jst/widgets/search/FeatureInfoPanel.html
Heron.options.map.gridcolumns = [ 
    {
	}
]


/*
 * 'gridcolumns' define which columns will be visible in the featureinfo panel
 * it is also possible to 'rename' column names
 * OR change a column to be an image or clickable link.
 *
 * To make the maintenance/beheer easier, we define the this in the 'options' 
 * of a layer, and collect them here in the actual 
 * Heron.options.map.gridcolumns variable
 *
*/
Heron.options.map.gridcolumns = []
for (var name in Heron.ngein.layermap){
	var layer = Heron.ngein.layermap[name];
	if (layer && layer.options && layer.options.gridcolumns ){
		Array.prototype.push.apply(Heron.options.map.gridcolumns, layer.options.gridcolumns);
	}
}
// some examples below
// see http://heron-mc.org/lib/Heron/jst/widgets/search/FeatureInfoPanel.html
/*
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
    ,
	{  
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
    }
]*/


// Create list of layers
// LET OP 1: Een laag MOET hier aanwezig zijn om in de viewer te kunnen gebruiken
// LET OP 2: NET ANDERSOM DAN IN DE VIEWER !!! Dus onderaan de vlakkenlagen.
// BOVENAAN IS ONDERAAN !!!
Heron.options.map.layers = [

    // The baselayers.
    Heron.ngein.layermap.openbasiskaart_osm,
    Heron.ngein.layermap.pdok_brtachtergrondkaart,
    Heron.ngein.layermap.pdok_brtachtergrondkaart_pastel,
	Heron.ngein.layermap.opentopoachtergrondkaart,
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
	//Heron.ngein.layermap.wijken,
    //Heron.ngein.layermap.pc4,
    //Heron.ngein.layermap.pc6,
	
	Heron.ngein.layermap.socialehuurwoningen,
	Heron.ngein.layermap.wozwaarden,
	Heron.ngein.layermap.koopenhuurwoningen,
	Heron.ngein.layermap.woningen250eg,
	Heron.ngein.layermap.oppervlakte_per_inwoner,
	Heron.ngein.layermap.leegstand_woningen,
	Heron.ngein.layermap.projectenkaart2017,	
	Heron.ngein.layermap.bevolkingsdichtheid_0_tot_4,
	Heron.ngein.layermap.bevolkingsdichtheid_4_tot_12,
	Heron.ngein.layermap.bevolkingsdichtheid_12_tot_18,
	Heron.ngein.layermap.bevolkingsdichtheid_18_tot_25,
	Heron.ngein.layermap.bevolkingsdichtheid_70_en_ouder,
    
    //Voorzieningen
    Heron.ngein.layermap.supermarkten,
    Heron.ngein.layermap.buurthuizen,
    Heron.ngein.layermap.wijk_ontmoetingsplekken,
    Heron.ngein.layermap.huisartsen,
    Heron.ngein.layermap.fysiotherapie,
    Heron.ngein.layermap.ziekenhuis,
    Heron.ngein.layermap.basisscholen,
    Heron.ngein.layermap.middelbare_scholen,
    Heron.ngein.layermap.buitenschoolse_opvang,
    Heron.ngein.layermap.kinderdagverblijven,
    Heron.ngein.layermap.gastouder_opvang,
	
	// Vervuiling
	Heron.ngein.layermap.vervuiling,
	
	// Betrokkenheid bij buurt
	/*Heron.ngein.layermap.gbamigratie2011,
	Heron.ngein.layermap.gbamigratie2012,
	Heron.ngein.layermap.gbamigratie2013,*/
	Heron.ngein.layermap.signaleringbetrokkenheidbijbuurt,
	Heron.ngein.layermap.vertrekkers,
	Heron.ngein.layermap.zelfbeheergroen,
	Heron.ngein.layermap.zwerfafvalpakkers,
	Heron.ngein.layermap.betrok_inwonersenquete,
	
	// SK sociale kwetsbaarheid
	Heron.ngein.layermap.signaleringsocialekwetsbaarheid,
	Heron.ngein.layermap.wmoverstrekkingen,
	Heron.ngein.layermap.inkomenenminimabeleid,
	Heron.ngein.layermap.schuldhulpverlening,
	
	// Veiligheid en overlast
	Heron.ngein.layermap.overlastmeldingen,
	Heron.ngein.layermap.signaleringveiligheidenoverlast,
	Heron.ngein.layermap.parkeeroverlast,
	Heron.ngein.layermap.autoinbraken,
	Heron.ngein.layermap.woninginbraken,
	Heron.ngein.layermap.veiligheid_inwonerenquete,
	
	// Wijken en buurten
	Heron.ngein.layermap.inwoners_per_wijk,
	Heron.ngein.layermap.buurten_geo_informatie,
    
    // Belevingswereld
    Heron.ngein.layermap.belevingswereld,
    Heron.ngein.layermap.belevingswereldpergemwijkbuurt
    
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
				{nodeType: "gx_layer", layer: Heron.ngein.layermap.opentopoachtergrondkaart.name },				
				{nodeType: "gx_layer", layer: Heron.ngein.layermap.blanco.name }
            ]
    },
    {
        text:"Thema's", expanded: true, children:
            [
                {
                    text:'Algemeen', expanded: true, children:
                        [
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.socialehuurwoningen.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.wozwaarden.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.koopenhuurwoningen.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.woningen250eg.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.bevolkingsdichtheid_0_tot_4.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.bevolkingsdichtheid_4_tot_12.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.bevolkingsdichtheid_12_tot_18.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.bevolkingsdichtheid_18_tot_25.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.bevolkingsdichtheid_70_en_ouder.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.oppervlakte_per_inwoner.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.leegstand_woningen.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.projectenkaart2017.name },
                                {
                                    text:'Voorzieningen', expanded: true, children:
                                    [
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.supermarkten.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.buurthuizen.name }, 
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.wijk_ontmoetingsplekken.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.huisartsen.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.fysiotherapie.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.ziekenhuis.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.basisscholen.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.middelbare_scholen.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.buitenschoolse_opvang.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.kinderdagverblijven.name },
                                        {nodeType: "gx_layer", layer: Heron.ngein.layermap.gastouder_opvang.name }
                                    ]
                                }
                                
                                        
                            /*{nodeType: "gx_layer", layer: Heron.ngein.layermap.pc4.name   },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.pc6.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.wijken.name }*/
                        ]
                }
				,
                {
                    text:'Vervuiling', expanded: true, children:
                        [
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.vervuiling.name }
                        ]
                }				
                ,
                {
                    text:'Betrokkenheid bij buurt', expanded: true, children:
                        [
							/*{nodeType: "gx_layer", layer: Heron.ngein.layermap.gbamigratie2011.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.gbamigratie2012.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.gbamigratie2013.name }*/
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.signaleringbetrokkenheidbijbuurt.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.vertrekkers.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.zelfbeheergroen.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.zwerfafvalpakkers.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.betrok_inwonersenquete.name }
                        ]
                }
                ,
                {
                    text:'Sociale kwetsbaarheid', expanded: true, children:
                        [
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.signaleringsocialekwetsbaarheid.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.wmoverstrekkingen.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.inkomenenminimabeleid.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.schuldhulpverlening.name }
                        ]
                }								
				,
                {
                    text:'Veiligheid en overlast', expanded: true, children:
                        [
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.signaleringveiligheidenoverlast.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.overlastmeldingen.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.parkeeroverlast.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.autoinbraken.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.woninginbraken.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.veiligheid_inwonerenquete.name }
                        ]
                }
				,
                {
                    text:'Belevingswereld', expanded: true, children:
                        [
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.belevingswereld.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.belevingswereldpergemwijkbuurt.name }
                        ]
                }                
				,				
                {
                    text:'Wijken en buurten', expanded: false, children:
                        [
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.inwoners_per_wijk.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.buurten_geo_informatie.name }
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
