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

    /* -------------------------------
     * GBKNI
     * ------------------------------ */
    gbkni: new OpenLayers.Layer.WMS("GBKNI",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_GBKNI_LIJNEN,nieuwegein:GM_SP_GBKNI_CELLEN,nieuwegein:GM_SP_GBKNI_TEKST", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
	   minScale:6000,
	   gridcolumns: [
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
	   ]
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
       minScale:10000,
       metadata:{
                    wfs: {
                        protocol: 'fromWMSLayer',
                        featurePrefix: 'GM_SP_KAD_GRONDPERCEEL',
                        srsName: "EPSG:28992"
                    }
                }
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
     * BRK
     * ------------------------------ */
    brk: new OpenLayers.Layer.WMS("Kadaster (BRK)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BRK_HERON", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
			visibility: false, 
			featureInfoFormat: "application/vnd.ogc.gml",
			alpha: true, opacity: 0.7,
			//minScale:5000
			gridcolumns: [
				{  
					featureType:'GM_SP_BRK_HERON', 
					columns: [ 
						// LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
						{ dataIndex: "PERC_ID", header: 'Perceel id', width: 120 },
						{ dataIndex: "OPPERVLAKTE", header: 'Oppervlakte', width: 80 },
						{ dataIndex: "SRT_WAARDE", header: 'Toelichting', width: 80 },
						{ dataIndex: "AANDEEL", header: 'Aandeel', width: 50 },
						{ dataIndex: "GERECHTIGDE", header: 'Gerechtigde', width: 200 },
						{ dataIndex: "OMSCHRIJVING_ZAKELIJKRECHT", header: 'Omschrijving Zakelijkrecht', width: 150 },
						{ dataIndex: "BEPERKEND_ZAKELIJKRECHT", header: 'Beperkend Zakelijkrecht', width: 150 },						
						//{ dataIndex: "GEBOORTEDATUM", header: 'Geboortedatum', width: 100 },
						//{ dataIndex: "DATUMOVERLIJDEN", header: 'Overlijdensdatum', width: 100 },
						{ dataIndex: "KOOPSOM", header: 'Koopsom', width: 80 },
						{ dataIndex: "KOOPJAAR", header: 'Koopjaar', width: 80 },
						{ dataIndex: "STATUTAIREZETEL", header: 'Statutaire zetel', width: 100 },
						{ dataIndex: "KVKNUMMER", header: 'KvK-nummer', width: 100 },
						
					] 
				}
			]
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
     * Verblijfsobjecten
     * ------------------------------ */
    verblijfsobjecten: new OpenLayers.Layer.WMS("Verblijfsobjecten",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BAG_GEOOBJK_VBO_PLUS", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:15000,
	   metadata:{
                    wfs: {
                        protocol: 'fromWMSLayer',
                        featurePrefix: 'GM_SP_BAG_GEOOBJK_VBO_PLUS',
                        srsName: "EPSG:28992"
                    }
                }
      }
    ),

    /* ------------------------------
     * Standplaatsen
     * ------------------------------ */
    standplaatsen: new OpenLayers.Layer.WMS("Standplaatsen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BAG_STANDPLAATSEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
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
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
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
     * ------------------------------*/
    groenbeheer: new OpenLayers.Layer.WMS("Groenbeheer",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_GROENBEHEER", format: "image/png", transparent: true},
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
       minScale:5000,
	   gridcolumns: [
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
			}	
		]
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
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
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
     * Lufo 2016
     * ------------------------------ */
    lufo2016: new OpenLayers.Layer.WMS("Luchtfoto 2016",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2016,nieuwegein:straatnamenshp", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
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
	 * KLIC lagen
	 */
	
	// Gevaarlijke Inhoud
    klic_gevaarlijke_inhoud: new OpenLayers.Layer.WMS("KLIC Gevaarlijke Inhoud (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{ layers: "klic2:nov_2015_LG_buisleiding_gevaarlijke_inhoud_DPO,klic2:nov_2015_LG_buisleiding_gevaarlijke_inhoud_gasuniewest", format: "image/png", transparent: true},
	  {layers: "klic:nov_2015_GEVAAR", format: "image/png", transparent: true},
      { isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_gevaarlijke_inhoud.png', hideInLegend: false}}
	  }
    )
	,
	// Datatransport
    klic_datatransport: new OpenLayers.Layer.WMS("KLIC Datatransport (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{layers: "klic2:nov_2015_LG_datatransport_BT_Nederland,klic2:nov_2015_LG_datatransport_EuNetworks_BV,klic2:nov_2015_LG_datatransport_Eurofiber,klic2:nov_2015_LG_datatransport_Hydreco,klic2:nov_2015_LG_datatransport_KPN,klic2:nov_2015_LG_datatransport_Level3_Communications_BV,klic2:nov_2015_LG_datatransport_Reggefiber,klic2:nov_2015_LG_datatransport_Rocateq_Europe_BV,klic2:nov_2015_LG_datatransport_Tele2,klic2:nov_2015_LG_datatransport_VW_Telecom,klic2:nov_2015_LG_datatransport_VerizonNederlandBV,klic2:nov_2015_LG_datatransport_Vitens,klic2:nov_2015_LG_datatransport_Ziggo_BV,klic2:nov_2015_LG_datatransport_cif-bv,klic2:nov_2015_LG_datatransport_enecowarmte,klic2:nov_2015_LG_datatransport_fokus,klic2:nov_2015_LG_datatransport_gemnieuwegein,klic2:nov_2015_LG_datatransport_rwswaterutrecht,klic2:nov_2015_LG_datatransport_rwswegoostnl,klic2:nov_2015_LG_datatransport_rwswegutrecht,klic2:nov_2015_LG_datatransport_smallconnection,klic2:nov_2015_LG_datatransport_stedin,klic2:nov_2015_LG_datatransport_upc,klic2:nov_2015_LG_datatransport_utrecht,klic2:nov_2015_LG_datatransport_vdbcngnet,klic2:nov_2015_LG_datatransport_vdbenecowind", format: "image/png", transparent: true},
	  {layers: "klic:nov_2015_DATA", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_datatransport.png', hideInLegend: false}}
	  }
    )
	,
	// Gas
    klic_gas: new OpenLayers.Layer.WMS("KLIC Gas (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{layers: "klic2:nov_2015_LG_gas_hoge_druk_stedin,klic2:nov_2015_LG_gas_hoge_druk_vdbcngnet,klic2:nov_2015_LG_gas_lage_druk_BP_Nederland_,klic2:nov_2015_LG_gas_lage_druk_Primagaz_Nederland_BV,klic2:nov_2015_LG_gas_lage_druk_enecowarmte,klic2:nov_2015_LG_gas_lage_druk_stedin", format: "image/png", transparent: true},
	  {layers: "klic:nov_2015_GAS", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_gas.png', hideInLegend: false}}
	  }
    )
	,
	// Elektra
    klic_electra: new OpenLayers.Layer.WMS("KLIC Elektra (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{layers: "klic2:nov_2015_LG_hoogspanning_TenneT_TSO_BV,klic2:nov_2015_LG_hoogspanning_stedin,klic2:nov_2015_LG_laagspanning_BP_Nederland_,klic2:nov_2015_LG_laagspanning_Hydreco,klic2:nov_2015_LG_laagspanning_Provincie_Utrecht,klic2:nov_2015_LG_laagspanning_Vitens,klic2:nov_2015_LG_laagspanning_enecowarmte,klic2:nov_2015_LG_laagspanning_gemnieuwegein,klic2:nov_2015_LG_laagspanning_rwswaterutrecht,klic2:nov_2015_LG_laagspanning_rwswegutrecht,klic2:nov_2015_LG_laagspanning_stedin,klic2:nov_2015_LG_laagspanning_utrecht,klic2:nov_2015_LG_laagspanning_vdbcngnet,klic2:nov_2015_LG_laagspanning_vdbgemhouten,klic2:nov_2015_LG_laagspanning_vdbinterbest,klic2:nov_2015_LG_landelijk_hoogspanningsnet_TenneT_TSO_BV,klic2:nov_2015_LG_middenspanning_prorail,klic2:nov_2015_LG_middenspanning_rwswegutrecht,klic2:nov_2015_LG_middenspanning_stedin,klic2:nov_2015_LG_middenspanning_vdbenecowind", format: "image/png", transparent: true},
	  {layers: "klic:nov_2015_ELECTRA", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_elektra.png', hideInLegend: false}}
	  }
    )
	,
	// Overig
    klic_overig: new OpenLayers.Layer.WMS("KLIC Overig (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{layers: "klic2:nov_2015_LG_wees_gemnieuwegein,klic2:nov_2015_LG_overig_BP_Nederland_,klic2:nov_2015_LG_overig_Hydreco,klic2:nov_2015_LG_overig_Provincie_Utrecht,klic2:nov_2015_LG_overig_TenneT_TSO_BV,klic2:nov_2015_LG_overig_Vaanster_BV,klic2:nov_2015_LG_overig_Vitens,klic2:nov_2015_LG_overig_gasuniewest,klic2:nov_2015_LG_overig_gemnieuwegein,klic2:nov_2015_LG_overig_nam,klic2:nov_2015_LG_overig_rwswaterutrecht,klic2:nov_2015_LG_overig_rwswegoostnl,klic2:nov_2015_LG_overig_rwswegutrecht,klic2:nov_2015_LG_overig_vdbgemhouten", format: "image/png", transparent: true},
	  {layers: "klic:nov_2015_OVERIG", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_overig.png', hideInLegend: false}}
	  }
    ),
	// Riool
    klic_riool: new OpenLayers.Layer.WMS("KLIC Riool (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{layers: "klic2:nov_2015_LG_riool_onder_druk_enecowarmte,klic2:nov_2015_LG_riool_onder_druk_gemnieuwegein,klic2:nov_2015_LG_riool_onder_druk_utrecht,klic2:nov_2015_LG_riool_onder_druk_vdbgemhouten,klic2:nov_2015_LG_riool_onder_druk_wsrivierenland,klic2:nov_2015_LG_riool_onder_druk_wsstichtserijnla,klic2:nov_2015_LG_riool_vrijverval_Provincie_Utrecht,klic2:nov_2015_LG_riool_vrijverval_enecowarmte,klic2:nov_2015_LG_riool_vrijverval_gemnieuwegein,klic2:nov_2015_LG_riool_vrijverval_rwswaterutrecht,klic2:nov_2015_LG_riool_vrijverval_rwswegutrecht,klic2:nov_2015_LG_riool_vrijverval_utrecht,klic2:nov_2015_LG_riool_vrijverval_vdbgemhouten", format: "image/png", transparent: true},
	  {layers: "klic:nov_2015_RIOOL", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true,visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_riool.png', hideInLegend: false}}
	  }
    ),
	// Warmte
    klic_warmte: new OpenLayers.Layer.WMS("KLIC Warmte (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{layers: "klic:nov_2015_LG_warmte_Hydreco,klic:nov_2015_LG_warmte_Vaanster_BV,klic:nov_2015_LG_warmte_enecowarmte", format: "image/png", transparent: true},
      {layers: "klic:nov_2015_WARMTE", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_warmte.png', hideInLegend: false}}
	  }
    ),
	// Water
    klic_water: new OpenLayers.Layer.WMS("KLIC Water (nov 2015)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      //{layers: "klic:nov_2015_LG_water_Hydreco,klic:nov_2015_LG_water_Oasen,klic:nov_2015_LG_water_Vitens,klic:nov_2015_LG_water_enecowarmte,klic:nov_2015_LG_water_gemnieuwegein,klic:nov_2015_LG_water_waternet", format: "image/png", transparent: true},
      {layers: "klic:nov_2015_WATER", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_water.png', hideInLegend: false}}
	  }
    ),
    
    /* ------------------------------
     * Laadpalen Nieuwegein
     * ------------------------------*/
    laadpalen: new OpenLayers.Layer.Vector("Laadpalen",
      // options
      {
        visibility: false,
        strategies: [new OpenLayers.Strategy.Fixed()],
        projection: new OpenLayers.Projection("EPSG:4326"),
        protocol: new OpenLayers.Protocol.HTTP(
        {   
            url:'../data/nieuwegein_oplaadpalen.kml',
            format: new OpenLayers.Format.KML({
                kmlns: 'http://earth.google.com/kml/2.2',
                extractStyles: true,
                extractAttributes: true })
        }),
        styleMap: new OpenLayers.StyleMap({
            "default": new OpenLayers.Style(null, {
                rules: [new OpenLayers.Rule({
                    title: 'Laadpaal',
                    symbolizer: {
                        "Point": {
                            externalGraphic: 'legenda/laadpaal_s.png',
                            graphicWidth: 30,
                            graphicHeight: 16,  
                            fillOpacity: 1.0                          
                        }
                    }
                })]
            })
        })
      }
    ),
    
    /* ------------------------------
     * Lichtmasten
     * ------------------------------*/
    lichtmasten: new OpenLayers.Layer.WMS("Lichtmasten",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:Lichtmasten_luminizer", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
       ,minScale:5000
      }
    ),
      /* ------------------------------
     * Gasnetvervanging
     * ------------------------------*/
    gasnet_stedin: new OpenLayers.Layer.WMS("Gasnet vervanging",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_STEDIN_GASNETVERVANGING", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
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
	Heron.ngein.layermap.ngein_kaart,
	Heron.ngein.layermap.ngein_luchtfoto,
    Heron.ngein.layermap.pdok_brtachtergrondkaart,
    Heron.ngein.layermap.pdok_brtachtergrondkaart_pastel,
	Heron.ngein.layermap.opentopoachtergrondkaart,
    Heron.ngein.layermap.openbasiskaart_osm,
    Heron.ngein.layermap.blanco,

    // Theme layers.
    // vlakdekkend
    Heron.ngein.layermap.lufo2011,
    Heron.ngein.layermap.lufo2012,
    Heron.ngein.layermap.lufo2013,
    Heron.ngein.layermap.lufo2014,
    Heron.ngein.layermap.lufo2015,
	Heron.ngein.layermap.lufo2016,
    // polygonen
	Heron.ngein.layermap.wijken,
    Heron.ngein.layermap.panden,
    Heron.ngein.layermap.grondpercelen,
    Heron.ngein.layermap.perceeleigenaren,
	Heron.ngein.layermap.brk,
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
    Heron.ngein.layermap.florafauna,
    Heron.ngein.layermap.pc6,
    Heron.ngein.layermap.komgrens,
    Heron.ngein.layermap.boswet,
    Heron.ngein.layermap.laadpalen,
    Heron.ngein.layermap.lichtmasten,
    Heron.ngein.layermap.gasnet_stedin,
	
	// KLIC lagen
	Heron.ngein.layermap.klic_gevaarlijke_inhoud,
	Heron.ngein.layermap.klic_datatransport,
    Heron.ngein.layermap.klic_gas,
	Heron.ngein.layermap.klic_electra,
	Heron.ngein.layermap.klic_overig,
	Heron.ngein.layermap.klic_riool,
	Heron.ngein.layermap.klic_water,
	Heron.ngein.layermap.klic_warmte
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
                    text:'Algemeen', expanded: false, children:
                        [
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.pc4.name   },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.pc6.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.wijken.name },
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
                    text:'Kadaster', expanded: false, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondpercelen.name   },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.perceeleigenaren.name    },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.brk.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.gemeentelijkeigendom.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondgebruik.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondverhuur.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bru.name }
                        ]
                }
                ,
                {
                    text:'Beheer', expanded: false, children:
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
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.florafauna.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.laadpalen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lichtmasten.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.gasnet_stedin.name },
                        ]
                }
                ,
                {
                    text:"Luchtfoto's", expanded: false, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2016.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2015.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2014.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2013.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2012.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2011.name}
                        ]
                }
                ,
                {
                    text:"KLIC (LET OP: data nov 2015)", expanded: true, children:
                        [
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_gevaarlijke_inhoud.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_datatransport.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_gas.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_electra.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_overig.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_riool.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_water.name},
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.klic_warmte.name}
                        ]
                }

            ]
    }
];
// Replace default layer browser DefaultConfig.js
// Pass our theme tree config as an option
Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = treeTheme;
