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
//      Heron.ngein.urls
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
            minScale:5000,
            // opmerking: nu legenda live van pdokviewer,maar ook beschikbaar in legends mapje in ngein map
            legendURL: "http://pdokviewer.pdok.nl/images/legends/GetLegendGraphic-bgtlijngericht.png"
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
            minScale:5000,
            // opmerking: nu legenda live van pdokviewer,maar ook beschikbaar in legends mapje in ngein map
            legendURL: "http://pdokviewer.pdok.nl/images/legends/GetLegendGraphic-bgtstandaard.png"
        }
    ),
    
    /*----------------
     * BGT achtergrond
     ----------------- */
    bgtachtergrond: new OpenLayers.Layer.WMTS(
        {
            name: 'BGT (achtergrond)',
            url: Heron.PDOK.urls.PDOKWMTS,
            layer: 'bgtachtergrond',
            style: 'default',
            matrixSet: 'EPSG:28992:16',
            matrixIds: ['EPSG:28992:16:0','EPSG:28992:16:1','EPSG:28992:16:2','EPSG:28992:16:3','EPSG:28992:16:4','EPSG:28992:16:5','EPSG:28992:16:6',
                'EPSG:28992:16:7','EPSG:28992:16:8','EPSG:28992:16:9','EPSG:28992:16:10','EPSG:28992:16:11','EPSG:28992:16:12','EPSG:28992:16:13',
                'EPSG:28992:16:14','EPSG:28992:16:15','EPSG:28992:16:16','EPSG:28992:16:17','EPSG:28992:16:18','EPSG:28992:16:19','EPSG:28992:16:20'],
            format: 'image/png8',
            visibility: false,
            isBaseLayer: false,
            attribution: 'Kadaster',
            minScale:5000,
            // opmerking: nu legenda live van pdokviewer,maar ook beschikbaar in legends mapje in ngein map
            legendURL: "http://pdokviewer.pdok.nl/images/legends/GetLegendGraphic-bgtachtergrond.png"
        }
    ),       

    /*----------------
     * BGT omtrekgricht
     ----------------- */
    bgtomtrek: new OpenLayers.Layer.WMTS(
        {
            name: 'BGT (omtrekgericht)',
            url: Heron.PDOK.urls.PDOKWMTS,
            layer: 'bgtomtrekgericht',
            style: 'default',
            matrixSet: 'EPSG:28992:16',
            matrixIds: ['EPSG:28992:16:0','EPSG:28992:16:1','EPSG:28992:16:2','EPSG:28992:16:3','EPSG:28992:16:4','EPSG:28992:16:5','EPSG:28992:16:6',
                'EPSG:28992:16:7','EPSG:28992:16:8','EPSG:28992:16:9','EPSG:28992:16:10','EPSG:28992:16:11','EPSG:28992:16:12','EPSG:28992:16:13',
                'EPSG:28992:16:14','EPSG:28992:16:15','EPSG:28992:16:16','EPSG:28992:16:17','EPSG:28992:16:18','EPSG:28992:16:19','EPSG:28992:16:20'],
            format: 'image/png8',
            visibility: false,
            isBaseLayer: false,
            attribution: 'Kadaster',
            minScale:5000,
            // opmerking: nu legenda live van pdokviewer,maar ook beschikbaar in legends mapje in ngein map
            legendURL: "http://pdokviewer.pdok.nl/images/legends/GetLegendGraphic-bgtomtrekgericht.png"
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
     * Wijkservicezones Nieuwegein
     * ------------------------------ */
    woonserviceszones: new OpenLayers.Layer.WMS("Woonservicezones",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:woonserviceszones", format: "image/png", transparent: true},
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
       minScale:5000,
       metadata:{
                    //url: "http://nationaalgeoregister.nl",  // url to metadata record
                    //html: "Dit is metadata <b>vette tekst</b> enzo..." // metadata as html (will be place between <p></p>)           
                }
      }
    ),
    
    /* -------------------------------
     * BRK
     * ------------------------------ */
    brk: new OpenLayers.Layer.WMS("Grondpercelen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_KAD_GRONDPERCEEL", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
            visibility: false, 
            featureInfoFormat: "application/vnd.ogc.gml",
            alpha: true, opacity: 0.7,
            //minScale:5000
          gridcolumns: [
                {  
                    featureType:'GM_SP_KAD_GRONDPERCEEL', 
                    columns: [ 
                        // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
                        { dataIndex: "PERC_ID", header: 'Perceel id', width: 120 },
                        { dataIndex: "OPPERVL", header: 'Oppervlakte', width: 80 },
                        //{ dataIndex: "SRT_OMSCHRIJVING", header: 'Toelichting', width: 80 },
                        //{ dataIndex: "AANDEEL", header: 'Aandeel', width: 50 },
                        //{ dataIndex: "GERECHTIGDE", header: 'Gerechtigde', width: 200 },
                        //{ dataIndex: "OMSCHRIJVING_ZAKELIJKRECHT", header: 'Omschrijving Zakelijkrecht', width: 150 },
                        //{ dataIndex: "BEPERKEND_ZAKELIJKRECHT", header: 'Beperkend Zakelijkrecht', width: 150 },                        
                        //{ dataIndex: "KOOPSOM", header: 'Koopsom', width: 80 },
                        { dataIndex: "KOOPJAAR", header: 'Koopjaar', width: 80 },
                        //{ dataIndex: "STATUTAIREZETEL", header: 'Statutaire zetel', width: 100 },
                        //{ dataIndex: "KVKNUMMER", header: 'KvK-nummer', width: 100 },
                    ] 
                }
           ]
		   ,
            metadata:{
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'GM_SP_BRK_WA',
                    srsName: "EPSG:28992"
                },
                url: "http://nationaalgeoregister.nl",  // url to metadata record
                html: "Dit is metadata <b>vette tekst</b> enzo..." // metadata as html (will be place between <p></p>)
            }
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
       visibility: true, featureInfoFormat: "application/vnd.ogc.gml",
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
     * ------------------------------ 
    rioolbeheer: new OpenLayers.Layer.WMS("Rioolbeheer",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_RIOOL_LEIDING", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      } 
    ),  */
	
	/* ------------------------------
	 * Riolering uit Kikker
	 * ------------------------------ */
	 riolering: new OpenLayers.Layer.WMS("Riolering",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_KIKKER_RIOLERING", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       //minScale:5000
      } 
    ),
    
	/* ------------------------------
	 * Straatkolken
	 * ------------------------------ */
	 straatkolken: new OpenLayers.Layer.WMS("Straatkolken",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_STRAATKOLKEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:6001,	   
	   gridcolumns: [
           {  
                featureType:'GM_SP_STRAATKOLKEN', 
                columns: [ 
                    // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
                    // ID, NUMMER_WVW, OMSCHRIJVING, BESLUITDATUM
                    { dataIndex: "STRAATNAAM", header: 'Straatnaam',width: 200  },
                    { dataIndex: "KOLKNR", header: 'Kolknummer',width: 75 },
					{ dataIndex: "BEREIK", header: 'Bereik',width: 200  }
                ] 
            }   
        ]
	   
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
     * ------------------------------
    persleiding: new OpenLayers.Layer.WMS("Persleidingen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_PERSLEIDING", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),*/
    
    /* ---------------------------------------
     * beheergrens tramtrac provincie (voorheen BRU)
     * --------------------------------------- */
    bru: new OpenLayers.Layer.WMS("Beheergrens Provincie",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_DGN_BRU", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),
         
    /* ------------------------------
     * Koop- en huurwoningen 
     * ------------------------------ */
    koop_huurwoningen: new OpenLayers.Layer.WMS("Koop- en huurwoningen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_KOOP_HUURWONINGEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
            visibility: false, 
            featureInfoFormat: "application/vnd.ogc.gml",
            alpha: true, opacity: 0.7,
            //minScale:5000
            gridcolumns: [
                {  
                    featureType:'GM_SP_KOOP_HUURWONINGEN', 
                    columns: [ 
                        // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
                        { dataIndex: "VERBLIJFSEENHEIDNUMMER", header: 'VERBLIJFSEENHEIDNUMMER', width: 64 },
                        { dataIndex: "TYPE_WONING", header: 'TYPE_WONING', width: 60 },
                        { dataIndex: "FFWOZ", header: 'FFWOZ', width: 38 },
//                        { dataIndex: "EIGENAAR_NAAM", header: 'EIGENAAR_NAAM', width: 200 },
                        { dataIndex: "WOONTYPE_OMSCHRIJVING", header: 'WOONTYPE_OMSCHRIJVING', width: 50 },
                        { dataIndex: "GEBRUIK", header: 'GEBRUIK', width: 80 },                      
                        { dataIndex: "VERDIEPING", header: 'VERDIEPING', width: 20 },
                        { dataIndex: "ADRES", header: 'ADRES', width: 100 },
                        { dataIndex: "WOONPL", header: 'WOONPL', width: 160 },                        
                        { dataIndex: "POSTCODE", header: 'POSTCODE', width: 6 }
                    ] 
                }
            ],
            metadata:{
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'GM_SP_KOOP_HUURWONINGEN',
                    srsName: "EPSG:28992"
                },
                url: "http://nationaalgeoregister.nl",  // url to metadata record
                html: "Dit is metadata <b>vette tekst</b> enzo..." // metadata as html (will be place between <p></p>)
            }
      }
    ),

    /* ------------------------------
     * Waterhuishouding
     * ------------------------------ 
    waterhuishouding: new OpenLayers.Layer.WMS("Waterhuishouding",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_RIOOL_WATERAA,nieuwegein:GM_SP_RIOOL_WATERH,nieuwegein:GM_SP_RIOOL_WATER", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:5000
      }
    ),*/

    /* ------------------------------
     * Groenbeheer
     * ------------------------------*/
    groenbeheer: new OpenLayers.Layer.WMS("Groenbeheer (data: jun. 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:groenbeheer_greenpoint_wa", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       minScale:6001
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
     * Hoogtemeren (NAP bouten)
     * ------------------------------ */
    nap: new OpenLayers.Layer.WMS("Hoogtemerken (NAP)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_HOOGTEMERKEN", format: "image/png", transparent: true},
      {isBaseLayer: false, 
       singleTile: true, 
       visibility: false, 
       featureInfoFormat: "application/vnd.ogc.gml",
       gridcolumns:[
       {  
        featureType:'GM_SP_HOOGTEMERKEN', 
        columns: [ 
                // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
                // PEILMERK_NUMMER, HOOGTE, LOKATIE, GEVEL, DATUM, RWS_NUMMER, OWP, STRAATNMAAM, HUISNUMMER, VERVALLEN, X_WAARDE_RD_COORDINAAT,
                // Y_WAARDE_RD_COORDINAAT, BIJZONDERHEDEN, MAPINFO_ID, VORIGE_HOOGTE, FOTO, GEOM
                { dataIndex: "PEILMERK_NUMMER", header: 'Peilmerknummer', width: 100 },
                { dataIndex: "RWS_NUMMER", header: 'RWS nummer', width: 75 },
                { dataIndex: "HOOGTE", header: 'Hoogte', width: 50 },
                { dataIndex: "STRAATNAAM", header: 'Straatnaam', width: 120 },
                { dataIndex: "HUISNUMMER", header: 'Huisnummer', width: 75 },
                { dataIndex: "GEVEL", header: 'Gevel', width: 50 },
                { dataIndex: "LOKATIE", header: 'Locatie', width: 200 },
                { dataIndex: "FOTO", header: "More Info", width: 100,
                      renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                          var template = '<a target="_new" href="//geoappstore.nieuwegein.nl/hoogtemerken/{FOTO}">Foto</a>';
                          var options = {attrNames: ['FOTO']};
                          return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
                      }
                },
            ]
       } 
        ]
        }
    ),
   
     /* ------------------------------
     * Laadpalen Nieuwegein
     * ------------------------------*/
    laadpalen: new OpenLayers.Layer.WMS("Laadpalen",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:laadpalen_wa", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
       ,minScale:24001
       ,gridcolumns:[
           {  
            featureType:'laadpalen_wa', 
            columns: [                     
                    { dataIndex: "ID", header: 'Nummer', width: 50 },
                    { dataIndex: "NAAM", header: 'Omschrijving', width: 250 },
                    { dataIndex: "ADRES", header: 'Adres', width: 150 },
                    { dataIndex: "TYPE", header: 'Type', width: 100 },
                    { dataIndex: "STEKKER", header: 'Stekker', width: 100 },                    
                ]
           }
        ]
       
      }
    ), 
    
    /* ------------------------------
     * Lichtmasten (data:2018)
     * ------------------------------*/
    lichtmasten: new OpenLayers.Layer.WMS("Lichtmasten (data:2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:Lichtmasten_luminizer", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
       ,minScale:5000
      }
    ),    
     
    /* ------------------------------
     * Containers
     * ------------------------------*/
    containers: new OpenLayers.Layer.WMS("Containers",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:containers_nieuw_wms", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
       //,minScale:5000
      }
    ),
    
    /* ------------------------------
     * Begraafplaatsen
     * ------------------------------*/
    begraafplaatsen: new OpenLayers.Layer.WMS("Begraafplaatsen",
      "http://gng-ap532.nieuwegein.nl/geoserver/wms", //Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_BEGRAAFPLAATSEN", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, 
       featureInfoFormat: "application/vnd.ogc.gml"
       //,minScale:5000
       ,gridcolumns:[
           {  
            featureType:'GM_SP_BEGRAAFPLAATSEN', 
            columns: [ 
                    // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
                    // GRAFAANDUIDING,NAAM_RECHTHEBBENDE,NAAM_BELANGHEBBENDE,NAAM_OVERLEDENE,OVERLIJDENSDATUM,
                    // LAAG,AANTAL_LAGEN,GRAFSOORT,GRAFSTATUS,UITGIFTE_DATUM,EINDDATUM,FOTONAAM,TEKSTROTATIE,FOTO_BLOB
                    { dataIndex: "GRAFAANDUIDING", header: 'Grafaanduiding', width: 20 },
                    { dataIndex: "NAAM_RECHTHEBBENDE", header: 'Rechthebbende', width: 100 },
                    { dataIndex: "NAAM_BELANGHEBBENDE", header: 'Belanghebbende', width: 100 },
                    { dataIndex: "NAAM_OVERLEDENE", header: 'Naam overledene', width: 100 },
                    { dataIndex: "OVERLIJDENSDATUM", header: 'Overlijdensdatum', width: 100 },
                    { dataIndex: "LAAG", header: 'Laag', width: 100 },
                    //{ dataIndex: "AANTAL_LAGEN", header: 'Aantal lagen', width: 100 },
                    { dataIndex: "GRAFSOORT", header: 'Grafsoort', width: 100 },
                    { dataIndex: "GRAFSTATUS", header: 'Grafstatus', width: 100 },
                    { dataIndex: "UITGIFTE_DATUM", header: 'Uitgifedatum', width: 100 },
                    { dataIndex: "EINDDATUM", header: 'Einddatum', width: 100 },
                    //{ dataIndex: "FOTONAAM", header: 'Fotonaam', width: 100 },
                    //{ dataIndex: "TEKSTROTATIE", header: 'Tekstrotatie', width: 100 },
                    { dataIndex: "FOTO_BLOB", header: "Foto", width: 200,
                          renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                              // template wanneer de clob in de database NIET het data:... deel bevat:
                              //var template = '<img id="photodata" width="100%" alt="Geen Foto" src="data:image/jpeg;base64,{FOTO_BLOB}"/>';
                              //var template = '<a target="_new" href="data:image/jpeg;base64,{FOTO_BLOB}"><img id="photodata" width="100%" alt="Geen Foto" src="data:image/jpeg;base64,{FOTO_BLOB}"/></a>';
                              // template wanneer "data:image/jpeg;base64," al is toegevoegd in de db
                              //var template = '<img id="photodata" width="100%" alt="Geen Foto" src="{FOTO_BLOB}"/>';
                              var template = '<a target="_new" href="{FOTO_BLOB}"><img id="photodata" width="100%" alt="Geen Foto" src="{FOTO_BLOB}"/></a>';
                              var options = {attrNames: ['FOTO_BLOB','FOTO_BLOB']};
                              return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
                          }
                    },
                ]
           }
        ]
        ,metadata:{
                    wfs: {
                        protocol: 'fromWMSLayer',
                        featurePrefix: 'GM_SP_BEGRAAFPLAATSEN',
                        srsName: "EPSG:28992"
                    }
                }
       
       
      }
    ),
    
       /* ------------------------------
     * Gasnetvervanging
     * ------------------------------*/
    gasnet_stedin: new OpenLayers.Layer.WMS("Gasnet vervanging (okt 2016)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:GM_SP_STEDIN_GASNETVERVANGING", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
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
    
   /* ------------------------------
     * Iasset Beheer
     * ------------------------------*/
    iasset_beheer: new OpenLayers.Layer.WMS("Civiele kunstwerken",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:iasset", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),     

   /* ------------------------------
     * MOR op de gng-ap532 
     * ------------------------------*/
    mor: new OpenLayers.Layer.WMS("Meldingen Openbare Ruimte (MOR)",
      'http://gng-ap532.nieuwegein.nl/geoserver/wms',
      {layers: "nieuwegein:GM_SP_PV_ZAAKWEERGAVE_EXT,nieuwegein:GM_SP_PV_ZAAKWEERGAVE2", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, 
       featureInfoFormat: "application/vnd.ogc.gml",
       
        gridcolumns:[
           {  
            featureType:'GM_SP_PV_ZAAKWEERGAVE2', 
            columns: [ 
                    // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
                    // ZAAKNUMMER,DATUM_MELDING,STATUS,HOOFDCATEGORIE,SUBCATEGORIE,TER_HOOGTE_VAN,ZAAKID
                    { dataIndex: "ZAAKNUMMER", header: "Zaaknummer", width: 70,
                          renderer: function (value, metaData, record, rowIndex, colIndex, store) {
                              var template = '<a target="_new" href="http://crm2011.nieuwegein.nl/GemeenteNieuwegein/userdefined/edit.aspx?etc=10099&id=%7b{ZAAKID}%7d">{ZAAKNUMMER}</a>';
                              var options = {attrNames: ['ZAAKID','ZAAKNUMMER']};
                              return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
                          }
                    },
                    { dataIndex: "DATUM_MELDING", header: 'Datum', width: 75 },
                    { dataIndex: "STATUS", header: 'Status', width: 100 },                    
                    { dataIndex: "HOOFDCATEGORIE", header: 'Hoofdcategorie', width: 120 },
                    { dataIndex: "SUBCATEGORIE", header: 'SubCategorie', width: 120 },
                    { dataIndex: "TER_HOOGTE_VAN", header: 'Ter hoogte van', width: 150 },
                    { dataIndex: "ZAAKID", header: 'Zaak-ID', width: 0 }
                ]
           }
        ]
       
      }
    ),    
    
    /* ------------------------------
     * PC4
     * ------------------------------*/
    pc4: new OpenLayers.Layer.WMS("Postcode 4",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:pc4esri2015r1", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml"
      }
    ),

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
    
    /* ------------------------------------------------
     * Projectenkaart
     * ------------------------------------------------ */
    projectenkaart: new OpenLayers.Layer.WMS("Projectenkaart",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:projectenkaart_gr_wa", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false, featureInfoFormat: "application/vnd.ogc.gml",
       legendURL: "//gng-ap532.nieuwegein.nl/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=projectenkaart_wa"
      }
    ), 
    
    /* ------------------------------------------------
     * Groenstructuurplan 2017
     * ------------------------------------------------ */
    groenstructuurplan: new OpenLayers.Layer.WMS("Groenstructuurplan 2017",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:groenstructuurplan", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false,
       legendURL: "//gng-ap532.nieuwegein.nl/geoserver/www/legenda/legenda_groenstructuurplan.png"
      }
    ),
    
    /* ------------------------------------------------
     * Energielabels (jan/mei/jun 2018)
     * ------------------------------------------------ */
    energielabels: new OpenLayers.Layer.WMS("Energielabels (jan/mei/jun 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:energielabels_panden_wa", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false,
       legendURL: "http://gng-ap713.nieuwegein.nl/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=energielabels_style"
      }
    ),
    
    /* ------------------------------
     * Lufo 2018
     * ------------------------------ */
    lufo2018: new OpenLayers.Layer.WMS("Luchtfoto 2018",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2018,nieuwegein:straatnamenshp", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
      }
    ),  
    
    /* ------------------------------
     * Lufo 2017
     * ------------------------------ */
    lufo2017: new OpenLayers.Layer.WMS("Luchtfoto 2017",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:luchtfoto_ecw_2017,nieuwegein:straatnamenshp", format: "image/png", transparent: true},
      {isBaseLayer: false, singleTile: true, 
       visibility: false
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
      {layers: "nieuwegein:luchtfoto_ecw_2015,nieuwegein:straatnamenshp", format: "image/png", transparent: true},
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
    ,
	/*
	 * KLIC lagen
	 */
	
	// Gevaarlijke Inhoud
    klic_gevaarlijke_inhoud: new OpenLayers.Layer.WMS("KLIC Gevaarlijke Inhoud (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
	  {layers: "klic:jan_2018_GEVAAR", format: "image/png", transparent: true},
      { isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_gevaarlijke_inhoud.png', hideInLegend: false}}
	  }
    )
	,
	// Datatransport
    klic_datatransport: new OpenLayers.Layer.WMS("KLIC Datatransport (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
	  {layers: "klic:jan_2018_DATA", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_datatransport.png', hideInLegend: false}}
	  }
    )
	,
	// Gas
    klic_gas: new OpenLayers.Layer.WMS("KLIC Gas (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
	  {layers: "klic:jan_2018_GAS", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_gas.png', hideInLegend: false}}
	  }
    )
	,
	// Elektra
    klic_electra: new OpenLayers.Layer.WMS("KLIC Elektra (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
	  {layers: "klic:jan_2018_ELECTRA", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_elektra.png', hideInLegend: false}}
	  }
    )
	,
	// Overig
    klic_overig: new OpenLayers.Layer.WMS("KLIC Overig (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
	  {layers: "klic:jan_2018_OVERIG", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_overig.png', hideInLegend: false}}
	  }
    ),
	// Riool
    klic_riool: new OpenLayers.Layer.WMS("KLIC Riool (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
	  {layers: "klic:jan_2018_RIOOL", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true,visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_riool.png', hideInLegend: false}}
	  }
    ),
	// Warmte
    klic_warmte: new OpenLayers.Layer.WMS("KLIC Warmte (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "klic:jan_2018_WARMTE", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_warmte.png', hideInLegend: false}}
	  }
    ),
	// Water
    klic_water: new OpenLayers.Layer.WMS("KLIC Water (jan 2018)",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "klic:jan_2018_WATER", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false,
		metadata: {legend: {legendURL: 'legenda/klic_water.png', hideInLegend: false}}
	  }
    )
    ,
    // Handelsregister bag_geoobj_hr_wa tabel
    handelsregister: new OpenLayers.Layer.WMS("Handelsregister",
      Heron.PDOK.urls.NGEINGEOSERVER,
      {layers: "nieuwegein:bag_geoobj_hr_wa", format: "image/png", transparent: true},
      {	isBaseLayer: false, singleTile: true, visibility: false
        , featureInfoFormat: "application/vnd.ogc.gml"       
        ,gridcolumns:[
           {  
            featureType:'bag_geoobj_hr_wa', 
            columns: [ 
                    // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
                    { dataIndex: "HR_KVK_NUMMER", header: 'KVK-Nummer', width: 100 },
                    { dataIndex: "HR_VESTIGINGSNUMMER", header: 'Vestigingsnummer', width: 100 },
                    { dataIndex: "BAG_ADRES", header: 'ADRES', width: 100 },
                    { dataIndex: "HR_HANDELSNAAM", header: 'Handelsnaam', width: 100 },
                    { dataIndex: "HR_ACTIVITEIT_1", header: 'Activiteit 1', width: 100 },
                    { dataIndex: "HR_ACTIVITEIT_2", header: 'Activiteit 2', width: 100 },
                    { dataIndex: "HR_ACTIVITEIT_3", header: 'Activiteit 3', width: 100 },
                    { dataIndex: "HR_TELEFOONNUMMER", header: 'Telefoonnummer 3', width: 100 },
                    { dataIndex: "HR_EMAIL", header: 'Email 3', width: 100 },
                    { dataIndex: "HR_WEBSITE", header: 'Website 3', width: 100 },
                    { dataIndex: "BAG_GEBRUIK", header: 'Gebruik', width: 100 },
                    { dataIndex: "BAG_WOONTYPE_OMSCHRIJVING", header: 'Woontype', width: 100 },
                    { dataIndex: "BAG_BESTEMMING_OMSCHRIJVING", header: 'Bestemming', width: 100 },
                    { dataIndex: "BAG_MONUMENT", header: 'Monument', width: 100 },
                    { dataIndex: "HR_CORR_NAAM_OPENBARE_RUIMTE", header: 'Correspondentie straat', width: 100 },
                    { dataIndex: "HR_CORR_HUISNUMMER", header: 'Corresp. huisnummer', width: 100 },
                    { dataIndex: "HR_CORR_HUISLETTER", header: 'Corresp. huisletter', width: 100 },
                    { dataIndex: "HR_CORR_HUISNUMMERTOEVOEGING", header: 'Corresp. huisnummertoevoeging', width: 100 },
                    { dataIndex: "HR_CORR_POSTCODE", header: 'Corresp. postcode', width: 100 },
                    { dataIndex: "HR_CORR_WOONPLAATS", header: 'Corresp. woonplaats', width: 100 },
                    { dataIndex: "HR_CORR_POSTBUS", header: 'Corresp. postbus', width: 100 },
                ]
           }
        ]
        ,metadata:{
            wfs: {
                protocol: 'fromWMSLayer',
                featurePrefix: 'bag_geoobj_hr_wa',
                srsName: "EPSG:28992"
            }
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
// LET OP 3: de plaats in de Laagboom/Layertree wordt bepaald door de 'treeTheme'-definitie later
// BOVENAAN IS ONDERAAN !!!
Heron.options.map.layers = [

    // The baselayers.
    Heron.ngein.layermap.ngein_kaart,
    Heron.ngein.layermap.ngein_luchtfoto,
    Heron.ngein.layermap.opentopoachtergrondkaart,
    Heron.ngein.layermap.openbasiskaart_osm,
    Heron.ngein.layermap.pdok_brtachtergrondkaart,
    Heron.ngein.layermap.pdok_brtachtergrondkaart_pastel,
    Heron.ngein.layermap.blanco,
    
    // Thema Lagen
    // vlakdekkend
    Heron.ngein.layermap.lufo2011,
    Heron.ngein.layermap.lufo2012,
    Heron.ngein.layermap.lufo2013,
    Heron.ngein.layermap.lufo2014,
    Heron.ngein.layermap.lufo2015,
    Heron.ngein.layermap.lufo2016,
    Heron.ngein.layermap.lufo2017,
    Heron.ngein.layermap.lufo2018,
    // polygonen
    Heron.ngein.layermap.woonserviceszones,
    Heron.ngein.layermap.wijken,
    Heron.ngein.layermap.panden,
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
    Heron.ngein.layermap.wegbeheer,
    Heron.ngein.layermap.groenbeheer,
    Heron.ngein.layermap.projectenkaart,
    Heron.ngein.layermap.koop_huurwoningen,
    Heron.ngein.layermap.groenstructuurplan,
    Heron.ngein.layermap.energielabels,
    // lijnen
    Heron.ngein.layermap.brk,
    Heron.ngein.layermap.bgtlijn,
    Heron.ngein.layermap.bgtomtrek,
    Heron.ngein.layermap.gbkni,
    Heron.ngein.layermap.bru,
    //Heron.ngein.layermap.persleiding,
    Heron.ngein.layermap.peilgebieden,
    //Heron.ngein.layermap.rioolbeheer,
    Heron.ngein.layermap.riolering,
	Heron.ngein.layermap.straatkolken,
    //Heron.ngein.layermap.waterhuishouding,
    Heron.ngein.layermap.glasvezel,
    //Heron.ngein.layermap.groenbomen,
    Heron.ngein.layermap.florafauna,
    Heron.ngein.layermap.nap,
    Heron.ngein.layermap.laadpalen,
    Heron.ngein.layermap.lichtmasten,
    Heron.ngein.layermap.containers,
    Heron.ngein.layermap.begraafplaatsen,
    Heron.ngein.layermap.gasnet_stedin,
    Heron.ngein.layermap.iasset_beheer,
    Heron.ngein.layermap.mor,    
    Heron.ngein.layermap.pc4,
    Heron.ngein.layermap.pc6,
    Heron.ngein.layermap.komgrens,
    Heron.ngein.layermap.boswet,
	// KLIC lagen
	Heron.ngein.layermap.klic_gevaarlijke_inhoud,
	Heron.ngein.layermap.klic_datatransport,
    Heron.ngein.layermap.klic_gas,
	Heron.ngein.layermap.klic_electra,
	Heron.ngein.layermap.klic_overig,
	Heron.ngein.layermap.klic_riool,
	Heron.ngein.layermap.klic_water,
	Heron.ngein.layermap.klic_warmte,
    Heron.ngein.layermap.handelsregister 
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
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.pc4.name   },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.pc6.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.wijken.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.woonserviceszones.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.panden.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.hoofdgebouw.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.verblijfsobjecten.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.standplaatsen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.ligplaatsen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.handelsregister.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.gbkni.name },                            
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bgtlijn.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bgtstandaard.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bgtomtrek.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bgtachtergrond.name }
                        ]
                }
                ,
                {
                    text:'Kadaster', expanded: true, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.brk.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.gemeentelijkeigendom.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondgebruik.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.grondverhuur.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.bru.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.koop_huurwoningen.name }							
                        ]
                }
                ,
                {
                    text:'Beheer', expanded: true, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.komgrens.name    },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.boswet.name },
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.rioolbeheer.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.riolering.name },
							{nodeType: "gx_layer", layer: Heron.ngein.layermap.straatkolken.name },
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.persleiding.name },
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.waterhuishouding.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.glasvezel.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.groenbeheer.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.wegbeheer.name },
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.grasvelden.name },
                            //{nodeType: "gx_layer", layer: Heron.ngein.layermap.groenbomen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.peilgebieden.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.florafauna.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.nap.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.laadpalen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lichtmasten.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.containers.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.begraafplaatsen.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.gasnet_stedin.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.iasset_beheer.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.mor.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.projectenkaart.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.groenstructuurplan.name },
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.energielabels.name }
                        ]
                }
                ,
                {
                    text:"KLIC (LET OP: data jan 2018)", expanded: false, children:
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
                ,
                {
                    text:"Luchtfoto's", expanded: false, children:
                        [
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2018.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2017.name},
                            {nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2016.name},
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