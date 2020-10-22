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
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:gbkni_lijnen_wa,nieuwegein_wa:gbkni_cellen_wa,nieuwegein_wa:gbkni_tekst_labels_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 6000,
      gridcolumns: [{
          featureType: 'gbkni_cellen_wa',
          columns: [{
            dataIndex: "IGDS_LEVEL_COMMENT",
            header: 'Object',
            width: 160
          }]
        },
        {
          featureType: 'gbkni_lijnen_wa',
          columns: [{
            dataIndex: "IGDS_LEVEL_COMMENT",
            header: 'Object',
            width: 160
          }]
        },
        {
          featureType: 'gbkni_tekst_labels_wa',
          columns: [{
            dataIndex: "IGDS_LEVEL_COMMENT",
            header: 'Object',
            width: 160
          }]
        }
      ]
    }
  ),

  /*----------------
   * BGT standaard
   ----------------- */
  bgtstandaard: new OpenLayers.Layer.WMTS({
    name: 'BGT (standaard)',
    url: Heron.PDOK.urls.PDOKWMTS,
    layer: 'bgtstandaard',
    style: 'default',
    matrixSet: 'EPSG:28992:16',
    matrixIds: ['EPSG:28992:16:0', 'EPSG:28992:16:1', 'EPSG:28992:16:2', 'EPSG:28992:16:3', 'EPSG:28992:16:4', 'EPSG:28992:16:5', 'EPSG:28992:16:6',
      'EPSG:28992:16:7', 'EPSG:28992:16:8', 'EPSG:28992:16:9', 'EPSG:28992:16:10', 'EPSG:28992:16:11', 'EPSG:28992:16:12', 'EPSG:28992:16:13',
      'EPSG:28992:16:14', 'EPSG:28992:16:15', 'EPSG:28992:16:16', 'EPSG:28992:16:17', 'EPSG:28992:16:18', 'EPSG:28992:16:19', 'EPSG:28992:16:20'
    ],
    format: 'image/png8',
    visibility: false,
    isBaseLayer: false,
    attribution: 'Kadaster',
    minScale: 5000,
    // opmerking: nu legenda live van pdokviewer,maar ook beschikbaar in legends mapje in ngein map
    legendURL: "http://pdokviewer.pdok.nl/images/legends/GetLegendGraphic-bgtstandaard.png"
  }
  ),

  /* ------------------------------
   * Betere Buurten Nieuwegein
   * ------------------------------ */
  betere_buurten: new OpenLayers.Layer.WMS("Betere Buurten",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:buurten_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //,alpha: true, opacity: 0.7
      //minScale:5000
    }
  ),
  
  /* ------------------------------
   * CBS Buurten Nieuwegein
   * ------------------------------ */
  buurten_cbs: new OpenLayers.Layer.WMS("Buurten CBS",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:buurten_cbs_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //,alpha: true, opacity: 0.7
      //minScale:5000
    }
  ),

  /* ------------------------------
   * Wijkgrenzen Nieuwegein
   * ------------------------------ */
  wijken: new OpenLayers.Layer.WMS("Wijken",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:wijken_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //,alpha: true, opacity: 0.7
      //minScale:5000
    }
  ),

  /* ------------------------------
   * Wijkservicezones Nieuwegein
   * ------------------------------ */
  woonserviceszones: new OpenLayers.Layer.WMS("Woonservicezones",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:woonserviceszones_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //,alpha: true, opacity: 0.7
      //minScale:5000
    }
  ),


  /* ------------------------------
   * Panden
   * ------------------------------ */
  panden: new OpenLayers.Layer.WMS("Panden (BAG)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:bag_panden_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      alpha: true,
      opacity: 0.7,
      minScale: 6001
    }
  ),
   /* ------------------------------
   * Leegstand
   * ------------------------------ */
  leegstand: new OpenLayers.Layer.WMS("Leegstand (BGHU)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:leegstand_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      alpha: true,
      opacity: 0.7,
      minScale: 6001
    }
  ),

  /* ------------------------------
   * Hoofdgebouwen (bron GBKN)
   * ------------------------------ */
  hoofdgebouw: new OpenLayers.Layer.WMS("Panden (GBKN)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:hoofdgebouwen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      alpha: true,
      opacity: 0.7,
      minScale: 6001
    }
  ),

  /* -------------------------------
   * BRK Grondpercelen
   * ------------------------------ */
  brk_grondperceel: new OpenLayers.Layer.WMS("Grondpercelen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:grondpercelen_wa,nieuwegein_wa:brk_voorlopige_grenzen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      alpha: true,
      opacity: 0.7,
      minScale: 6001,
      gridcolumns: [{
          featureType: 'grondpercelen_wa',
          columns: [
            // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
            {
              dataIndex: "PERC_ID",
              header: 'Perceel id',
              width: 120
            },
            {
              dataIndex: "OPPERVL",
              header: 'Oppervlakte',
              width: 80
            },
            {
              dataIndex: "KOOPJAAR",
              header: 'Koopjaar',
              width: 80
            },
          ]
        },
        {
          featureType: 'brk_voorlopige_grenzen_wa',
          columns: [
            // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
            {
              dataIndex: "TYPE",
              header: 'Type grens',
              width: 120
            },
          ]
        }
      ],
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'grondpercelen_wa',
          srsName: "EPSG:28992"
        }        
      }
    }
  ),

  /* -------------------------------
   * BRK Eigenaren (beveiligd)
   * ------------------------------ */
  brk_secure: new OpenLayers.Layer.WMS("Perceeleigenaren (beveiligd)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      //layers: "nieuwegein:GM_SP_BRK_WA",
      layers: "nieuwegein_wa:brk_perceeleigenaren_wa",
      format: "image/png",
      transparent: true
    },
    //{layers: "nieuwegein:brk_app", format: "image/png", transparent: true},
    {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      alpha: true,
      opacity: 0.7,
      layerIcons: 'secure',
      //minScale:5000
      gridcolumns: [{
        featureType: 'brk_perceeleigenaren_wa',
        //featureType: 'GM_SP_BRK_WA',
        //featureType:'brk_app',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          {
            dataIndex: "PERC_ID",
            header: 'Perceel id',
            width: 120
          },
          {
            dataIndex: "OPPERVLAKTE",
            header: 'Oppervlakte',
            width: 80
          },
          {
            dataIndex: "AANDEEL",
            header: 'Aandeel',
            width: 50
          },
          {
            dataIndex: "GERECHTIGDE",
            header: 'Gerechtigde',
            width: 200
          },
          {
            dataIndex: "OMSCHRIJVING_ZAKELIJKRECHT",
            header: 'Omschrijving Zakelijkrecht',
            width: 150
          },
          {
            dataIndex: "BEPERKEND_ZAKELIJKRECHT",
            header: 'Beperkend Zakelijkrecht',
            width: 150
          },
          {
            dataIndex: "KOOPSOM",
            header: 'Koopsom',
            width: 80
          },
          {
            dataIndex: "KOOPJAAR",
            header: 'Koopjaar',
            width: 80
          },
          {
            dataIndex: "STATUTAIREZETEL",
            header: 'Statutaire zetel',
            width: 100
          },
          {
            dataIndex: "KVKNUMMER",
            header: 'KvK-nummer',
            width: 100
          },
          {
            dataIndex: "WOONADRES",
            header: 'Woonadres',
            width: 220
          },
          //{ dataIndex: "POSTADRES", header: 'Postadres', width: 200 },
          {
            dataIndex: "POSTBUS",
            header: 'Postbus',
            width: 180
          },
        ]
      }],
      metadata:{
           /*wfs: {
               protocol: 'fromWMSLayer',
               featurePrefix: 'GM_SP_BRK_WA',
               srsName: "EPSG:28992"
           }*/
       }
    }
  ),

  /* -------------------------------
   * BRK Appartementsrechten (beveiligd)
   * ------------------------------ */
  brk_appartementsrecht: new OpenLayers.Layer.WMS("Appartementsrechten (beveiligd)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:brk_appartementsrechten_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      alpha: true,
      opacity: 0.7,
      layerIcons: 'secure',
      //minScale:5000
      gridcolumns: [{
        featureType: 'brk_appartementsrechten_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          {
            dataIndex: "PERC_ID",
            header: 'Perceel id',
            width: 120
          },
          {
            dataIndex: "OPPERVLAKTE",
            header: 'Oppervlakte',
            width: 80
          },
          {
            dataIndex: "AANDEEL",
            header: 'Aandeel',
            width: 50
          },
          {
            dataIndex: "GERECHTIGDE",
            header: 'Gerechtigde',
            width: 200
          },
          {
            dataIndex: "OMSCHRIJVING_ZAKELIJKRECHT",
            header: 'Omschrijving Zakelijkrecht',
            width: 150
          },
          {
            dataIndex: "BEPERKEND_ZAKELIJKRECHT",
            header: 'Beperkend Zakelijkrecht',
            width: 150
          },
          {
            dataIndex: "KOOPSOM",
            header: 'Koopsom',
            width: 80
          },
          {
            dataIndex: "KOOPJAAR",
            header: 'Koopjaar',
            width: 80
          },
          {
            dataIndex: "STATUTAIREZETEL",
            header: 'Statutaire zetel',
            width: 100
          },
          {
            dataIndex: "KVKNUMMER",
            header: 'KvK-nummer',
            width: 100
          },
        ]
      }],
      /* metadata:{
           wfs: {
               protocol: 'fromWMSLayer',
               featurePrefix: 'brk_appartementsrechten_wa',
               srsName: "EPSG:28992"
           }
       }*/
    }
  ),


  /* ------------------------------
   * Gemeentelijk eigendom
   * ------------------------------ */
  gemeentelijkeigendom: new OpenLayers.Layer.WMS("Gemeentelijk eigendom",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:gemeentelijk_eigendom_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 15000
    }
  ),

  /* ------------------------------
   * Categorie eigenaar
   * ------------------------------ */
  categorieeigenaar: new OpenLayers.Layer.WMS("Categorie eigenaar",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:brk_type_eigenaar_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'brk_type_eigenaar_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          {
            dataIndex: "KAD_AANDUIDING",
            header: 'Kadastrale aanduiding',
            width: 120
          },
          {
            dataIndex: "TYPE_EIGENAAR",
            header: 'Categorie eigenaar',
            width: 150
          },
          {
            dataIndex: "EIGENAAR",
            header: 'Eigenaar',
            width: 300
          },
        ]
      }],
    }
  ),

  /* ------------------------------
   * Wkpb beperkingen
   * ------------------------------ */
  wkpbbeperkingen: new OpenLayers.Layer.WMS("Wkpb beperkingen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:wkpb_beperkingen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'wkpb_beperkingen_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          {
            dataIndex: "REGISTERNUMMER",
            header: 'Inschr.nr',
            width: 60
          },
          {
            dataIndex: "DATUM_INWERKING",
            header: 'Ingangsdatum',
            width: 80
          },
          {
            dataIndex: "DATUM_EINDE",
            header: 'Einddatum',
            width: 80
          },
          {
            dataIndex: "OMSCHRIJVING",
            header: 'Omschrijving',
            width: 400
          },
          {
            dataIndex: "ZAAKNR",
            header: 'Brondocument',
            width: 124
          },
          {
            dataIndex: "TYPE_OMSCHR",
            header: 'Beperkingtype',
            width: 300
          },
        ]
      }],
    }
  ),


  /* ------------------------------
   * Grondgebruik
   * ------------------------------ */
  grondgebruik: new OpenLayers.Layer.WMS("Grondgebruik",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:grondgebruik_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 15000
    }
  ),

  /* ------------------------------
   * Grondverhuur
   * ------------------------------ */
  grondverhuur: new OpenLayers.Layer.WMS("Grondverhuur",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:grondverhuur_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 15000
    }
  ),

  /* ------------------------------
   * Verblijfsobjecten_oud
   * ------------------------------ 
  verblijfsobjecten_oud: new OpenLayers.Layer.WMS("Verblijfsobjecten_oud",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:verblijfsobjecten_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 15000,
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'verblijfsobjecten_wa',
          srsName: "EPSG:28992"
        }
      }

    }
  ),*/
  
   verblijfsobjecten: new OpenLayers.Layer.WMS("Verblijfsobjecten",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:verblijfsobject_plus_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 15000,
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'verblijfsobject_plus_wa',
          srsName: "EPSG:28992"
        }
      }

    }
  ),

  /* ------------------------------
   * Standplaatsen
   * ------------------------------ */
  standplaatsen: new OpenLayers.Layer.WMS("Standplaatsen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:standplaatsen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 15000,
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'standplaatsen_wa',
          srsName: "EPSG:28992"
        }
      }
    }
  ),

  /* ------------------------------
   * Ligplaatsen
   * ------------------------------ */
  ligplaatsen: new OpenLayers.Layer.WMS("Ligplaatsen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:ligplaatsen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 15000,
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'ligplaatsen_wa',
          srsName: "EPSG:28992"
        }
      }
    }
  ),
  
   /* ------------------------------
   * WOZ waarde
   * ------------------------------ */
  wozwaarde: new OpenLayers.Layer.WMS("WOZ-waarde woningen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:woz_waarde_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 30000,
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'woz_waarde_wa',
          srsName: "EPSG:28992"
        }
      }
    }
  ),
    
   /* ---------------------------------------*
    * Handelsregister bag_geoobj_hr_wa tabel *
    * ---------------------------------------*/
  handelsregister: new OpenLayers.Layer.WMS("Handelsregister",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:bag_geoobj_hr_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'bag_geoobj_hr_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          {dataIndex: "HR_KVK_NUMMER",header: 'KVK-Nummer',width: 100},
          {dataIndex: "HR_VESTIGINGSNUMMER",header: 'Vestigingsnummer',width: 100},
          {dataIndex: "BAG_ADRES",header: 'ADRES',width: 100},
          {dataIndex: "HR_HANDELSNAAM",header: 'Handelsnaam',width: 100},
          {dataIndex: "HR_ACTIVITEIT_1",header: 'Activiteit 1',width: 100},
          {dataIndex: "HR_ACTIVITEIT_2",header: 'Activiteit 2',width: 100},
          {dataIndex: "HR_ACTIVITEIT_3",header: 'Activiteit 3',width: 100},
          {dataIndex: "HR_TELEFOONNUMMER",header: 'Telefoonnummer 3',width: 100},
          {dataIndex: "HR_EMAIL",header: 'Email 3',width: 100},
          {dataIndex: "HR_WEBSITE",header: 'Website 3',width: 100},
          {dataIndex: "BAG_GEBRUIK",header: 'Gebruik',width: 100},
          {dataIndex: "BAG_WOONTYPE_OMSCHRIJVING",header: 'Woontype',width: 100},
          {dataIndex: "BAG_BESTEMMING_OMSCHRIJVING",header: 'Bestemming',width: 100},
          {dataIndex: "BAG_MONUMENT",header: 'Monument',width: 100},
          {dataIndex: "HR_CORR_NAAM_OPENBARE_RUIMTE",header: 'Correspondentie straat',width: 100},
          {dataIndex: "HR_CORR_HUISNUMMER",header: 'Corresp. huisnummer',width: 100},
          {dataIndex: "HR_CORR_HUISLETTER",header: 'Corresp. huisletter',width: 100},
          {dataIndex: "HR_CORR_HUISNUMMERTOEVOEGING",header: 'Corresp. huisnummertoevoeging',width: 100},
          {dataIndex: "HR_CORR_POSTCODE",header: 'Corresp. postcode',width: 100},
          {dataIndex: "HR_CORR_WOONPLAATS",header: 'Corresp. woonplaats',width: 100},
           {dataIndex: "HR_CORR_POSTBUS",header: 'Corresp. postbus',width: 100},
        ]
      }],
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'bag_geoobj_hr_wa',
          srsName: "EPSG:28992"
        }
      }
    }
  ),
  
  /* ------------------------------
   * Provinciaal Arbeidsregister
   * ------------------------------ */
  par: new OpenLayers.Layer.WMS("Provinciaal Arbeidsregister",
      'https://services.geodata-utrecht.nl/geoserver/s01_6_arbeidsmarkt/wms', {
      // testje om deze via proxy te laten lopen
      //'http://geodev.nieuwegein.nl/proxy/proxy.py?url=https://services.geodata-utrecht.nl/geoserver/s01_6_arbeidsmarkt/wms', {
      layers: "s01_6_arbeidsmarkt:Provinciaal_Arbeidsplaatsen_Register_PAR",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale:6001
    }
  ),

  /* ------------------------------
   * Riolering uit Kikker
   * ------------------------------ */
  riolering: new OpenLayers.Layer.WMS("Riolering",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "	nieuwegein_wa:kikker_riolering_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //minScale:5000
    }
  ),

  /* ------------------------------
   * Straatkolken
   * ------------------------------ */
  straatkolken: new OpenLayers.Layer.WMS("Straatkolken",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "	nieuwegein_wa:straatkolken_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 6001,
      gridcolumns: [{
        featureType: 'straatkolken_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          // ID, NUMMER_WVW, OMSCHRIJVING, BESLUITDATUM
          {
            dataIndex: "STRAATNAAM",
            header: 'Straatnaam',
            width: 200
          },
          {
            dataIndex: "KOLKNR",
            header: 'Kolknummer',
            width: 75
          },
          {
            dataIndex: "BEREIK",
            header: 'Bereik',
            width: 200
          }
        ]
      }]

    }
  ),

  /* ------------------------------
   * Peilgebieden
   * ------------------------------ */
  peilgebieden: new OpenLayers.Layer.WMS("Peilbesluit 2014",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:peilgebieden_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* ---------------------------------------
   * beheergrens tramtrac provincie (voorheen BRU)
   * --------------------------------------- */
  bru: new OpenLayers.Layer.WMS("Beheergrens Provincie",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:beheergrens_provincie_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* ------------------------------
   * Koop- en huurwoningen
   * ------------------------------ */
  koop_huurwoningen: new OpenLayers.Layer.WMS("Koop- en huurwoningen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:koop_en_huurwoningen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      alpha: true,
      opacity: 0.7,
      minScale: 15000,
/*     OUD      
     gridcolumns: [{
        featureType: 'koop_en_huurwoningen_wa',
  
           columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          {
            dataIndex: "VERBLIJFSEENHEIDNUMMER",
            header: 'VERBLIJFSEENHEIDNUMMER',
            width: 64
          },
          {
            dataIndex: "TYPE_WONING",
            header: 'TYPE_WONING',
            width: 60
          },
          {
            dataIndex: "FFWOZ",
            header: 'FFWOZ',
            width: 38
          },
          //                        { dataIndex: "EIGENAAR_NAAM", header: 'EIGENAAR_NAAM', width: 200 },
          {
            dataIndex: "WOONTYPE_OMSCHRIJVING",
            header: 'WOONTYPE_OMSCHRIJVING',
            width: 50
          },
          {
            dataIndex: "GEBRUIK",
            header: 'GEBRUIK',
            width: 80
          },
          {
            dataIndex: "VERDIEPING",
            header: 'VERDIEPING',
            width: 20
          },
          {
            dataIndex: "ADRES",
            header: 'ADRES',
            width: 100
          },
          {
            dataIndex: "WOONPL",
            header: 'WOONPL',
            width: 160
          },
          {
            dataIndex: "POSTCODE",
            header: 'POSTCODE',
            width: 6
          }
        ]
      }], */
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'koop_en_huurwoningen_wa',
          srsName: "EPSG:28992"
        }
      }
    }
  ),

  /* ------------------------------
   * Groenbeheer
   * ------------------------------*/
  groenbeheer: new OpenLayers.Layer.WMS("Groenbeheer",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:groenbeheer_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 12000,
      gridcolumns: [{
        featureType: 'groenbeheer_wa',
        columns: [{
            dataIndex: "BEHEERTYPE",
            header: 'Beheertype',
            width: 240
          },
          {
            dataIndex: "BOOMSOORT",
            header: 'Boomsoort',
            width: 240
          },
          {
            dataIndex: "AANLEGJAAR",
            header: 'Aanlegjaar',
            width: 80
          },
          {
            dataIndex: "OPPERVLAKTE",
            header: 'Oppervlakte',
            width: 120
          },
        ]
      }],
    }
  ),

  /* ------------------------------
   * Wegbeheer
   * ------------------------------ */
  wegbeheer: new OpenLayers.Layer.WMS("Wegbeheer",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:wegbeheer_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 5000,
      gridcolumns: [{
        featureType: 'wegbeheer_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          // ID, NUMMER_WVW, OMSCHRIJVING, BESLUITDATUM
          {
            dataIndex: "STRAATNAAM",
            header: 'Straatnaam'
          },
          {
            dataIndex: "WEGVAKONDERDEEL",
            header: 'Wegvakonderdeel'
          },
          {
            dataIndex: "WEGFUNCTIE",
            header: 'Wegfunctie'
          },
          {
            dataIndex: "WEGTYPE",
            header: 'Wegtype'
          },
          {
            dataIndex: "VERHARDINGSOORT",
            header: 'Verhardingssoort'
          },
          {
            dataIndex: "ONDERHOUDSPLICHTIGE",
            header: 'Onderhoudsplichtige'
          },
          {
            dataIndex: "HOEVEELHEID",
            header: 'Oppervlakte'
          }
        ]
      }]
    }
  ),

  /* ------------------------------
   * Archeologisch beleid
   * ------------------------------ */
  archeologischbeleid: new OpenLayers.Layer.WMS("Archeologisch beleid",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:archeologie_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      legendURL: "//geoappstore.nieuwegein.nl/geoserver/styles/legenda/legenda_archeologiebeleid.png",
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [
      {
      featureType:'archeologie_wa',
      columns: [
        { dataIndex: "Name", header: 'Beleid', width: 600},
        { dataIndex: "LEGENDA", header: 'Code' }
      ]
      }
      ]
    }
  ),

  /* ------------------------------
   * Hoogtemerken (NAP bouten)
   * ------------------------------ */
  nap: new OpenLayers.Layer.WMS("Hoogtemerken (NAP)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:hoogtemerken_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'nieuwegein_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          // PEILMERK_NUMMER, HOOGTE, LOKATIE, GEVEL, DATUM, RWS_NUMMER, OWP, STRAATNMAAM, HUISNUMMER, VERVALLEN, X_WAARDE_RD_COORDINAAT,
          // Y_WAARDE_RD_COORDINAAT, BIJZONDERHEDEN, MAPINFO_ID, VORIGE_HOOGTE, FOTO, GEOM
          {
            dataIndex: "PEILMERK_NUMMER",
            header: 'Peilmerknummer',
            width: 100
          },
          {
            dataIndex: "RWS_NUMMER",
            header: 'RWS nummer',
            width: 75
          },
          {
            dataIndex: "HOOGTE",
            header: 'Hoogte',
            width: 50
          },
          {
            dataIndex: "STRAATNAAM",
            header: 'Straatnaam',
            width: 120
          },
          {
            dataIndex: "HUISNUMMER",
            header: 'Huisnummer',
            width: 75
          },
          {
            dataIndex: "GEVEL",
            header: 'Gevel',
            width: 50
          },
          {
            dataIndex: "FOTO",
            header: "More Info",
            width: 100,
            renderer: function (value, metaData, record, rowIndex, colIndex, store) {
              var template = '<a target="_new" href="//geoappstore.nieuwegein.nl/hoogtemerken/{FOTO}">Foto</a>';
              var options = {
                attrNames: ['FOTO']
              };
              return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
            }
          },
        ]
      }]
    }
  ),

  /* ------------------------------
   * Hondenuitlaatkaart
   * ------------------------------*/
  hondenuitlaatkaart: new OpenLayers.Layer.WMS("Hondenuitlaatkaart",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:hondenuitlaatkaart_gebieden_wa,nieuwegein_wa:hondenuitlaatkaart_bakken_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 24001
    }
  ),
  
  /* ------------------------------
   * Laadpalen Nieuwegein
   * ------------------------------*/
  laadpalen: new OpenLayers.Layer.WMS("Laadpalen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:laadpalen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'laadpalen_wa',
        columns: [{
            dataIndex: "ID",
            header: 'ID',
            width: 120
          },
          {
            dataIndex: "EIGENAAR",
            header: 'Eigenaar',
            width: 120
          },
          {
            dataIndex: "STRAATNAAM",
            header: 'Adres',
            width: 120
          },
          {
            dataIndex: "POSTCODE",
            header: 'Postcode',
            width: 120
          },
          {
            dataIndex: "POWER",
            header: 'Vermogen',
            width: 120
          },
          {
            dataIndex: "TOEGANG",
            header: 'Toegang',
            width: 120
          },
        ]
      }],
      minScale: 24001
    }
  ),

  /* ------------------------------
   * Lichtmasten (data:2018)
   * ------------------------------*/
  lichtmasten: new OpenLayers.Layer.WMS("Lichtmasten (data:2018)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luminizer_lichtmasten_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 5000
    }
  ),

  /* ------------------------------
   * Containers
   * ------------------------------*/
  containers: new OpenLayers.Layer.WMS("Containers",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:containers_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
      //,minScale:5000
    }
  ),

  /* ------------------------------
   * Evenementen en wegwerkzaamheden
   * ------------------------------*/
  evenementen_wegwerkzaamheden: new OpenLayers.Layer.WMS("Evenementen en Wegwerkzaamheden",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:evenementen_wegwerkzaamheden_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'evenementen_wegwerkzaamheden_wa',
        columns: [{
            dataIndex: "NAAM",
            header: 'Naam',
            width: 150
          },
          {
            dataIndex: "TYPE",
            header: 'Type',
            width: 100
          },
          {
            dataIndex: "OMSCHRIJVING",
            header: 'Omschrijving',
            width: 200
          },
          {
            dataIndex: "START_DATUM",
            header: 'Begin datum',
            width: 100
          },
          {
            dataIndex: "EIND_DATUM",
            header: 'Eind datum',
            width: 100
          },
        ]
      }]
    }
  ),

  /* ------------------------------
   * Begraafplaatsen
   * ------------------------------*/
  begraafplaatsen: new OpenLayers.Layer.WMS("Begraafplaatsen",
    Heron.PDOK.urls.NGEINGEOSERVER, // "http://gng-ap532.nieuwegein.nl/geoserver/wms",
    {
      layers: "nieuwegein_wa:begraafplaatsen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //,minScale:5000
      gridcolumns: [{
        featureType: 'begraafplaatsen_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          // GRAFAANDUIDING,NAAM_RECHTHEBBENDE,NAAM_BELANGHEBBENDE,NAAM_OVERLEDENE,OVERLIJDENSDATUM,
          // LAAG,AANTAL_LAGEN,GRAFSOORT,GRAFSTATUS,UITGIFTE_DATUM,EINDDATUM,FOTONAAM,TEKSTROTATIE,FOTO_BLOB
          {
            dataIndex: "GRAFAANDUIDING",
            header: 'Grafaanduiding',
            width: 40
          },
          {
            dataIndex: "NAAM_RECHTHEBBENDE",
            header: 'Rechthebbende',
            width: 100
          },
          {
            dataIndex: "NAAM_BELANGHEBBENDE",
            header: 'Belanghebbende',
            width: 100
          },
          {
            dataIndex: "NAAM_OVERLEDENE",
            header: 'Naam overledene',
            width: 100
          },
          {
            dataIndex: "OVERLIJDENSDATUM",
            header: 'Overlijdensdatum',
            width: 100
          },
          {
            dataIndex: "LAAG",
            header: 'Laag',
            width: 100
          },
          //{ dataIndex: "AANTAL_LAGEN", header: 'Aantal lagen', width: 100 },
          {
            dataIndex: "GRAFSOORT",
            header: 'Grafsoort',
            width: 100
          },
          {
            dataIndex: "GRAFSTATUS",
            header: 'Grafstatus',
            width: 100
          },
          {
            dataIndex: "UITGIFTE_DATUM",
            header: 'Uitgifedatum',
            width: 100
          },
          {
            dataIndex: "EINDDATUM",
            header: 'Einddatum',
            width: 100
          },
          //{ dataIndex: "FOTONAAM", header: 'Fotonaam', width: 100 },
          //{ dataIndex: "TEKSTROTATIE", header: 'Tekstrotatie', width: 100 },
          {
            dataIndex: "FOTO_BLOB",
            header: "Foto",
            width: 200,
            renderer: function (value, metaData, record, rowIndex, colIndex, store) {
              // template wanneer de clob in de database NIET het data:... deel bevat:
              //var template = '<img id="photodata" width="100%" alt="Geen Foto" src="data:image/jpeg;base64,{FOTO_BLOB}"/>';
              //var template = '<a target="_new" href="data:image/jpeg;base64,{FOTO_BLOB}"><img id="photodata" width="100%" alt="Geen Foto" src="data:image/jpeg;base64,{FOTO_BLOB}"/></a>';
              // template wanneer "data:image/jpeg;base64," al is toegevoegd in de db
              //var template = '<img id="photodata" width="100%" alt="Geen Foto" src="{FOTO_BLOB}"/>';
              var template = '<a target="_new" href="{FOTO_BLOB}"><img id="photodata" width="100%" alt="Geen Foto" src="{FOTO_BLOB}"/></a>';
              var options = {
                attrNames: ['FOTO_BLOB', 'FOTO_BLOB']
              };
              return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
            }
          },
        ]
      }],
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'GM_SP_BEGRAAFPLAATSEN',
          srsName: "EPSG:28992"
        }
      },
      layerIcons: "secure",


    }

  ),

  /* ------------------------------
   * Gasnetvervanging
   * ------------------------------*/
  gasnet_stedin: new OpenLayers.Layer.WMS("Gasnet vervanging (apr 2018)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:stedin_gasnetvervanging_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* ------------------------------
   * Kabels en Leidingen Gemeente
   * ------------------------------*/
  k_l_gemeente: new OpenLayers.Layer.WMS("Kabels en Leidingen Gemeente",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:kabels_en_leidingen_gemeente_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* ------------------------------
   * Flora en fauna
   * ------------------------------ */
  florafauna: new OpenLayers.Layer.WMS("Flora en fauna",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:florafauna_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* ------------------------------
   * Iasset Beheer
   * ------------------------------*/
  iasset_beheer: new OpenLayers.Layer.WMS("Civiele kunstwerken",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:iasset_kunstwerken_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'iasset_kunstwerken_wa',
        columns: [{
            dataIndex: "NAAM",
            header: 'Naam',
            width: 140
          },
          {
            dataIndex: "NUMMER",
            header: 'Nummer',
            width: 120
          },
          {
            dataIndex: "SUBTHEMA",
            header: 'Subthema',
            width: 120
          },
          {
            dataIndex: "EIGENAAR_ORGANISATIE",
            header: 'Eigenaar Organisatie',
            width: 150
          },
          {
            dataIndex: "OPMERKING",
            header: 'Opmerking',
            width: 180
          },
          {
            dataIndex: "NEN2767_BEHEEROBJECT",
            header: 'NEN2767 Beheerobject',
            width: 150
          }
        ]
      }]
    }
  ),

  /* ------------------------------
   * MOR op de gng-ap532
   * ------------------------------*/
  mor: new OpenLayers.Layer.WMS("Meldingen Openbare Ruimte (MOR)",
    Heron.PDOK.urls.NGEINGEOSERVER, //'http://gng-ap532.nieuwegein.nl/geoserver/wms',
    {
      layers: "nieuwegein_wa:mor_zaakweergave_ext_wa,nieuwegein_wa:mor_zaakweergave_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",

      gridcolumns: [{
        featureType: 'mor_zaakweergave_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          // ZAAKNUMMER,DATUM_MELDING,STATUS,HOOFDCATEGORIE,SUBCATEGORIE,TER_HOOGTE_VAN,ZAAKID
          {
            dataIndex: "ZAAKNUMMER",
            header: "Zaaknummer",
            width: 70,
            renderer: function (value, metaData, record, rowIndex, colIndex, store) {
              var template = '<a target=_new href=http://crm2011.nieuwegein.nl/GemeenteNieuwegein/userdefined/edit.aspx?etc=10099&id=%7b{ZAAKID}%7d>{ZAAKNUMMER}</a>';
              var options = {
                attrNames: ['ZAAKID', 'ZAAKNUMMER']
              };
              return Heron.widgets.GridCellRenderer.substituteAttrValues(template, options, record);
            }
          },
          {
            dataIndex: "DATUM_MELDING",
            header: 'Datum',
            width: 75
          },
          {
            dataIndex: "STATUS",
            header: 'Status',
            width: 100
          },
          {
            dataIndex: "HOOFDCATEGORIE",
            header: 'Hoofdcategorie',
            width: 120
          },
          {
            dataIndex: "SUBCATEGORIE",
            header: 'SubCategorie',
            width: 120
          },
          {
            dataIndex: "TER_HOOGTE_VAN",
            header: 'Ter hoogte van',
            width: 150
          },
          {
            dataIndex: "OMSCHRIJVING",
            header: 'Omschrijving',
            width: 300
          },
          { dataIndex: "ZAAKID", header: 'Zaak-ID', width: 0 }
        ]
      }]

    }
  ),

  /* ------------------------------
   * PC4
   * ------------------------------*/
  pc4: new OpenLayers.Layer.WMS("Postcode 4",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:pc4esri2015r1_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* ------------------------------
   * PC6
   * ------------------------------ */
  pc6: new OpenLayers.Layer.WMS("Postcode 6",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:pc6esri2015r1_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      minScale: 30000,
      metadata: {
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
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:komgrens_wvw_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* -------------------------------
   * komgrens in het kader van de Boswet
   * ------------------------------ */
  boswet: new OpenLayers.Layer.WMS("Komgrens volgens Boswet",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:komgrens_boswet",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),

  /* ------------------------------------------------
   * Projectenkaart
   * ------------------------------------------------ */
  projectenkaart: new OpenLayers.Layer.WMS("Projectenkaart",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:projectenkaart_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      legendURL: "//geoappstore.nieuwegein.nl/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=projectenkaart_wa"
    }
  ),

  /* ------------------------------------------------
   * Betere Buurten Voortgang
   * ------------------------------------------------ */
  betere_buurten_voortgang: new OpenLayers.Layer.WMS("Betere Buurten Voortgang",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:betere_buurten_projectdata_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      legendURL: "//" + location.host + "/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=betere_buurten_project_wa",
      gridcolumns: [{
        featureType: 'betere_buurten_projectdata_wa',
        columns: [
          // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
          // ZAAKNUMMER,DATUM_MELDING,STATUS,HOOFDCATEGORIE,SUBCATEGORIE,TER_HOOGTE_VAN,ZAAKID

          {
            dataIndex: "BUURT",
            header: 'Buurt',
            width: 150
          },
          {
            dataIndex: "WIJK",
            header: 'Wijk',
            width: 125
          },
          {
            dataIndex: "OD_DATA_STATUS",
            header: 'Status',
            width: 120
          },
          {
            dataIndex: "OD_DATA_INVESTEREN",
            header: 'Investeren',
            width: 120
          },
          {
            dataIndex: "OD_DATA_BOUWJAREN",
            header: 'Bouwjaren',
            width: 150
          },
          {
            dataIndex: "OD_DATA_OPPERVLAK",
            header: 'Oppervlak',
            width: 100
          }
        ]
      }]
    }

  ),

  /* ------------------------------------------------
   * Groenstructuurplan 2017
   * ------------------------------------------------ */
  groenstructuurplan: new OpenLayers.Layer.WMS("Groenstructuurplan 2017",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:groenstructuurplan_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      legendURL: Heron.ngein.urls.NGEIN_BASE+"/geoserver/www/legenda/legenda_groenstructuurplan.png"
    }
  ),

  /* ------------------------------------------------
   * Grondwaterbeschermingszones (Provincie Utrecht)
   * ------------------------------------------------ */
  grondwaterbeschermingszones: new OpenLayers.Layer.WMS("Grondwaterbeschermingszones (Provincie Utrecht)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:grondwaterbeschermingszone_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      // legendURL: "http://" + location.host + "/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=grondwaterbeschermingszone_wa&legend_options=hideEmptyRules:true"
      legendURL: "http://" + location.host + "/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&LAYER=nieuwegein_wa:grondwaterbeschermingszone_wa&legend_options=hideEmptyRules:true"
    }
  ),

  /* ------------------------------------------------
   * Opsporingsgebied Aardwarmte (Provincie Utrecht)
   * ------------------------------------------------ */
  opsporingsgebied_aardwarmte: new OpenLayers.Layer.WMS("Opsporingsgebied Aardwarmte (Provincie Utrecht)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:opsporingsgebied_aardwarmte_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      //legendURL: Heron.PDOK.urls.NGEINGEOSERVER+"?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=grondwaterbeschermingszone_style"
    }
  ),

  /* ------------------------------------------------
   * Energielabels (jan/mei/jun 2018) OUD
   * ------------------------------------------------ */
  energielabels: new OpenLayers.Layer.WMS("Energielabels panden VEROUDERD",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:energielabels_panden_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //legendURL: Heron.PDOK.urls.NGEINGEOSERVER+"?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=energielabels_style"
      gridcolumns: [{
        featureType: 'energielabels_panden_wa',
        columns: [{
            dataIndex: "ADRES",
            header: 'Adres',
            width: 150
          },
          {
            dataIndex: "POSTCODE",
            header: 'Postcode',
            width: 150
          },
          {
            dataIndex: "LABEL",
            header: 'Label',
            width: 150
          },
          {
            dataIndex: "LABEL_DATUM",
            header: 'Label datum',
            width: 150
          },
        ]
      }]
    }
  ), 
  
  /* ------------------------------------------------
   * Energielabels Verblijfsobjecten
   * ------------------------------------------------ */
  energielabels_vbo: new OpenLayers.Layer.WMS("Energielabels Verblijfsobjecten",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:energielabels_vbo_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      //legendURL: Heron.PDOK.urls.NGEINGEOSERVER+"?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=energielabels_style"
      gridcolumns: [{
        featureType: 'energielabels_vbo_wa',
        columns: [{
            dataIndex: "ADRES",
            header: 'Adres',
            width: 150
          },
          {
            dataIndex: "POSTCODE",
            header: 'Postcode',
            width: 150
          },
          {
            dataIndex: "LABEL",
            header: 'Label',
            width: 150
          },
          {
            dataIndex: "LABEL_DATUM",
            header: 'Label datum',
            width: 150
          },
        ]
      }]
    }
  ),

  /* ------------------------------------------------
   * Warmte of Gasaansluitingen
   * ------------------------------------------------ */
  warmte_gasaansluiting: new OpenLayers.Layer.WMS("Warmte en Gasaansluitingen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:panden_indicatie_gas_warmte_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
    }
  ),

  /* ------------------------------------------------
   * Zonnepanelen op daken
   * ------------------------------------------------ */
  zonnepanelen: new OpenLayers.Layer.WMS("Zonnepanelen op daken",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:inventarisatie_zonnepanelen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      legendURL: Heron.PDOK.urls.NGEINGEOSERVER+"?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=inventarisatie_zonnepanelen_wa",
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'inventarisatie_zonnepanelen_wa',
        columns: [{
            dataIndex: "AANTAL_PANELEN",
            header: 'Aantal panelen',
            width: 150
          },
          {
            dataIndex: "OPP_PANELEN",
            header: 'Oppervlakte panelen',
            width: 150
          },
          {
            dataIndex: "JAAR_GECONSTATEERD",
            header: 'Sinds jaar',
            width: 150
          },
        ]
      }]
    }
  ),
  
  /* ------------------------------------------------
   * Zonnevelden
   * ------------------------------------------------ */
  zonnevelden: new OpenLayers.Layer.WMS("Zonnevelden",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:zonneweides_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      legendURL: Heron.PDOK.urls.NGEINGEOSERVER+"?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=zonneweides_wa",

    }
  ),

  /* ------------------------------------------------
   * Zonnekaart
   * ------------------------------------------------ */
  zonnekaart: new OpenLayers.Layer.WMS("Zonnekaart: Zoninstraling",
    'http://geosrv01.mapgear.eu/geoserver/zonnekaart-nieuwegein/wms?', {
      layers: "zonnekaart-nieuwegein:panden_zoninstraling",
      format: "image/png",
      transparent: true,
      styles: "panden_score"
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      //legendURL: Heron.PDOK.urls.NGEINGEOSERVER+"?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&style=energielabels_style"
    }
  ),
   /* ------------------------------
   * Lufo 2020
   * ------------------------------ */
  lufo2020: new OpenLayers.Layer.WMS("Luchtfoto 2020",
    // Heron.PDOK.urls.NGEINGEOSERVER, {
    'http://geoappstore.nieuwegein.nl/geoserver/wms?', {
      layers: "nieuwegein_wa:luchtfoto_2020_wa,nieuwegein_wa:straatnamen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),
  
  /* ------------------------------
   * Lufo 2019
   * ------------------------------ */
  lufo2019: new OpenLayers.Layer.WMS("Luchtfoto 2019",
    // Heron.PDOK.urls.NGEINGEOSERVER, {
    'http://geoappstore.nieuwegein.nl/geoserver/wms?', {
      layers: "nieuwegein_wa:luchtfoto_2019_wa,nieuwegein_wa:straatnamen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),

  /* ------------------------------
   * Lufo 2018
   * ------------------------------ */
  lufo2018: new OpenLayers.Layer.WMS("Luchtfoto 2018",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2018_wa,nieuwegein_wa:straatnamen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),

  /* ------------------------------
   * Lufo 2017
   * ------------------------------ */
  lufo2017: new OpenLayers.Layer.WMS("Luchtfoto 2017",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2017_wa,nieuwegein_wa:straatnamen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),

  /* ------------------------------
   * Lufo 2016
   * ------------------------------ */
  lufo2016: new OpenLayers.Layer.WMS("Luchtfoto 2016",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2016_wa,nieuwegein_wa:straatnamen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),

  /* ------------------------------
   * Lufo 2015
   * ------------------------------ */
  lufo2015: new OpenLayers.Layer.WMS("Luchtfoto 2015",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2015_wa,nieuwegein_wa:straatnamen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),

  /* ------------------------------
   * Lufo 2014
   * ------------------------------ */
  lufo2014: new OpenLayers.Layer.WMS("Luchtfoto 2014",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2014_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),

  /*
   * Lufo 2013
   * ------------------------------ */
  lufo2013: new OpenLayers.Layer.WMS("Luchtfoto 2013",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2013_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false
    }
  ),

  /*
   * Lufo 2012
   * ------------------------------ */
  lufo2012: new OpenLayers.Layer.WMS("Luchtfoto 2012",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2012_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false   
    }
  ),

  /*
   * Lufo 2011
   * ------------------------------ */
  lufo2011: new OpenLayers.Layer.WMS("Luchtfoto 2011",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:luchtfoto_2011_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false  
    }
  ),

  /*
   * AHN3 PDOK
   * ------------------------------ */
  ahn3_pdok: new OpenLayers.Layer.WMS("AHN 3 (Hoogtebestand)",
    "https://geodata.nationaalgeoregister.nl/ahn3/wms?", {
      layers: "ahn3_05m_dsm",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: true,
      singleTile: true,
      visibility: false,
      minScale: 13000,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'ahn3_05m_dsm',
        columns: [{
            dataIndex: "GRAY_INDEX",
            header: 'Hoogte (m)',
            width: 150
          },

        ]
      }],
      metadata: {
        wfs: {
          protocol: 'fromWMSLayer',
          featurePrefix: 'ahn3_05m_dsm',
          srsName: "EPSG:28992"
        }
      }
    }
  ),
  
  /*
   * KLIC lagen
   */

    // Gevaarlijke Inhoud
    klic_gevaarlijke_inhoud: new OpenLayers.Layer.WMS("KLIC Gevaarlijke Inhoud (mrt 2020)",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:klic_melding_wa",
      format: "image/png",
      CQL_FILTER: "SOORT = 'buisleidingGevaarlijkeInhoud'",
      transparent: true,
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml",
      gridcolumns: [{
        featureType: 'klic_melding_wa',
        columns: [{
            dataIndex: "SOORT",
            header: 'Soort',
            width: 150
          },
          {
            dataIndex: "EIGENAAR",
            header: 'Eigenaar',
            width: 150
          },
          {
            dataIndex: "TYPE",
            header: 'Type',
            width: 150
          },
          {
            dataIndex: "JAAR_MELDING",
            header: 'Jaar Klic-melding',
            width: 150
          },

        ]
      }],
      metadata: {
        legend: {
          legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27buisleidingGevaarlijkeInhoud%27&legend_options=hideEmptyRules:true;forceLabels:on;",
          hideInLegend: false
        }
      }
    }
    ),
    klic_datatransport: new OpenLayers.Layer.WMS("KLIC Datatransport (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'datatransport'",
          transparent: true,
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27datatransport%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
      
      // Gas Hoge druk
      klic_gas: new OpenLayers.Layer.WMS("KLIC Gas Hoge/Lage Druk(mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'gasHogeDruk' OR SOORT = 'gasLageDruk'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27gasHogeDruk%27%20OR%20SOORT%20%3D%20%27gasLageDruk%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ), 
      
      // Elektra
      klic_electra_hs: new OpenLayers.Layer.WMS("KLIC Hoogspanning (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'hoogspanning' OR SOORT = 'landelijkHoogspanningsnet'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27hoogspanning%27%20OR%20SOORT%20%3D%20%27landelijkHoogspanningsnet%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
      
      klic_electra_ms: new OpenLayers.Layer.WMS("KLIC Middenspanning (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'middenspanning'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27middenspanning%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
      
      klic_electra_ls: new OpenLayers.Layer.WMS("KLIC Laagspanning (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'laagspanning'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27laagspanning%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
      // Overig
      klic_overig: new OpenLayers.Layer.WMS("KLIC Overig (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'overig'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27overig%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
      // Riool
      klic_riool: new OpenLayers.Layer.WMS("KLIC Riool (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'rioolOnderOverOfOnderdruk' OR SOORT = 'rioolVrijverval'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27rioolOnderOverOfOnderdruk%27%20OR%20SOORT%20%3D%20%27rioolVrijverval%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
      // Warmte
      klic_warmte: new OpenLayers.Layer.WMS("KLIC Warmte (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'warmte'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27warmte%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
      // Water
      klic_water: new OpenLayers.Layer.WMS("KLIC Water (mrt 2020)",
        Heron.PDOK.urls.NGEINGEOSERVER, {
          layers: "nieuwegein_wa:klic_melding_wa",
          format: "image/png",
          CQL_FILTER: "SOORT = 'water'",
          transparent: true
        }, {
          isBaseLayer: false,
          singleTile: true,
          visibility: false,
          featureInfoFormat: "application/vnd.ogc.gml",
          metadata: {
            legend: {
              legendURL: "//"+location.host+"/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&STRICT=false&layer=nieuwegein_wa:klic_melding_wa&CQL_FILTER=SOORT%20%3D%20%27water%27&legend_options=hideEmptyRules:true;forceLabels:on;",
              hideInLegend: false
            }
          }
        }
      ),
/*
* Lagen voor vergroeningsmonitor
*/
 vergroening_ng: new OpenLayers.Layer.WMS("vergroening nieuwegein",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:vergroening_nieuwegein_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),
   vergroening_perc: new OpenLayers.Layer.WMS("vergroening percelen",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:vergroening_percelen_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),
  groene_daken: new OpenLayers.Layer.WMS("groene daken",
    Heron.PDOK.urls.NGEINGEOSERVER, {
      layers: "nieuwegein_wa:groene_daken_wa",
      format: "image/png",
      transparent: true
    }, {
      isBaseLayer: false,
      singleTile: true,
      visibility: false,
      featureInfoFormat: "application/vnd.ogc.gml"
    }
  ),


};

/**
 * Now add the default baselayers from basis/Config.js, defined in Heron.ngein.baselayers
 **/
for (var baselayer in Heron.ngein.baselayers) {
  if (Heron.ngein.baselayers.hasOwnProperty(baselayer)) {
    Heron.ngein.layermap[baselayer] = Heron.ngein.baselayers[baselayer];
  }
}

//http://heron-mc.org/lib/Heron/jst/widgets/search/FeatureInfoPanel.html
Heron.options.map.gridcolumns = [{
    featureType: 'GM_SP_WEGBEHEER2',
    columns: [
      // LET OP: de dataIndex is case-afhankelijk en moet dezelfde zijn als in de features!!
      // ID, NUMMER_WVW, OMSCHRIJVING, BESLUITDATUM
      {
        dataIndex: "STRAATNAAM",
        header: 'Straatnaam'
      },
      {
        dataIndex: "WEGVAKONDERDEEL",
        header: 'Wegvakonderdeel'
      },
      {
        dataIndex: "WEGFUNCTIE",
        header: 'Wegfunctie'
      },
      {
        dataIndex: "WEGTYPE",
        header: 'Wegtype'
      },
      {
        dataIndex: "VERHARDINGSOORT",
        header: 'Verhardingssoort'
      },
      {
        dataIndex: "ONDERHOUDSPLICHTIGE",
        header: 'Onderhoudsplichtige'
      },
      {
        dataIndex: "HOEVEELHEID",
        header: 'Oppervlakte'
      }
    ]
  },
  {
    featureType: 'gbkni_cellen_wa',
    columns: [{
      dataIndex: "IGDS_LEVEL_COMMENT",
      header: 'Object',
      width: 160
    }]
  },
  {
    featureType: 'gbkni_lijnen_wa',
    columns: [{
      dataIndex: "IGDS_LEVEL_COMMENT",
      header: 'Object',
      width: 160
    }]
  },
  {
    featureType: 'gbkni_tekst_labels_wa',
    columns: [{
      dataIndex: "IGDS_LEVEL_COMMENT",
      header: 'Object',
      width: 160
    }]
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
];


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
Heron.options.map.gridcolumns = [];
for (var name in Heron.ngein.layermap) {
  var layer = Heron.ngein.layermap[name];
  if (layer && layer.options && layer.options.gridcolumns) {
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
  Heron.ngein.layermap.opentopoachtergrondkaart,
  Heron.ngein.layermap.openbasiskaart_osm,
  Heron.ngein.layermap.blanco,
  Heron.ngein.layermap.ngein_luchtfoto,
  Heron.ngein.layermap.ahn3_pdok,
  Heron.ngein.layermap.lufo2020,
  Heron.ngein.layermap.lufo2019,
  Heron.ngein.layermap.lufo2018,
  Heron.ngein.layermap.lufo2017,
  Heron.ngein.layermap.lufo2016,
  Heron.ngein.layermap.lufo2015,
  Heron.ngein.layermap.lufo2014,
  Heron.ngein.layermap.lufo2013,
  Heron.ngein.layermap.lufo2012,
  Heron.ngein.layermap.lufo2011,



  // Thema Lagen
  // vlakdekkend


  // polygonen
  Heron.ngein.layermap.brk_grondperceel,
  Heron.ngein.layermap.brk_secure,
  Heron.ngein.layermap.brk_appartementsrecht,
  Heron.ngein.layermap.woonserviceszones,
  Heron.ngein.layermap.betere_buurten,
  Heron.ngein.layermap.buurten_cbs,
  Heron.ngein.layermap.wijken,
  Heron.ngein.layermap.panden,
  Heron.ngein.layermap.gemeentelijkeigendom,
  Heron.ngein.layermap.categorieeigenaar,
  Heron.ngein.layermap.wkpbbeperkingen,
  Heron.ngein.layermap.grondgebruik,
  Heron.ngein.layermap.grondverhuur,
  Heron.ngein.layermap.verblijfsobjecten,
  //Heron.ngein.layermap.verblijfsobjecten_oud,
  Heron.ngein.layermap.standplaatsen,
  Heron.ngein.layermap.ligplaatsen,
  Heron.ngein.layermap.hoofdgebouw,
  Heron.ngein.layermap.bgtstandaard,
  Heron.ngein.layermap.wegbeheer,
  Heron.ngein.layermap.archeologischbeleid,
  Heron.ngein.layermap.groenbeheer,
  Heron.ngein.layermap.projectenkaart,
  Heron.ngein.layermap.betere_buurten_voortgang,
  Heron.ngein.layermap.koop_huurwoningen,
  Heron.ngein.layermap.groenstructuurplan,
  Heron.ngein.layermap.grondwaterbeschermingszones,
  Heron.ngein.layermap.opsporingsgebied_aardwarmte,
  Heron.ngein.layermap.energielabels,
  Heron.ngein.layermap.energielabels_vbo,
  Heron.ngein.layermap.warmte_gasaansluiting,
  Heron.ngein.layermap.zonnekaart,
  Heron.ngein.layermap.zonnepanelen,
  Heron.ngein.layermap.zonnevelden,
  Heron.ngein.layermap.hondenuitlaatkaart,
  Heron.ngein.layermap.handelsregister,
  Heron.ngein.layermap.leegstand,
  Heron.ngein.layermap.wozwaarde,
  Heron.ngein.layermap.vergroening_ng,
  Heron.ngein.layermap.vergroening_perc,
  Heron.ngein.layermap.groene_daken,
  

  // lijnen
  Heron.ngein.layermap.gbkni,
  Heron.ngein.layermap.bru,
  Heron.ngein.layermap.peilgebieden,
  Heron.ngein.layermap.riolering,
  Heron.ngein.layermap.straatkolken,
  Heron.ngein.layermap.florafauna,
  Heron.ngein.layermap.nap,
  Heron.ngein.layermap.laadpalen,
  Heron.ngein.layermap.lichtmasten,
  Heron.ngein.layermap.containers,
  Heron.ngein.layermap.evenementen_wegwerkzaamheden,
  Heron.ngein.layermap.begraafplaatsen,
  Heron.ngein.layermap.gasnet_stedin,
  Heron.ngein.layermap.k_l_gemeente,
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
  Heron.ngein.layermap.klic_electra_hs,  
  Heron.ngein.layermap.klic_electra_ms,  
  Heron.ngein.layermap.klic_electra_ls,  
  Heron.ngein.layermap.klic_overig,
  Heron.ngein.layermap.klic_riool,
  Heron.ngein.layermap.klic_water,
  Heron.ngein.layermap.klic_warmte,
  
  // Punten
  Heron.ngein.layermap.par,
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
var treeTheme = [{
    text: "Achtergronden & Luchtfoto's",
    expanded: false,
    children: [{
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.ngein_kaart.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.openbasiskaart_osm.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.opentopoachtergrondkaart.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.blanco.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.ahn3_pdok.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2020.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2019.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.ngein_luchtfoto.name
      },
      //{nodeType: "gx_layer", layer: Heron.ngein.layermap.lufo2018.name},
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2017.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2016.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2015.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2014.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2013.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2012.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lufo2011.name
      }
    ]
  },
  {
    text: "Basisgegevens",
    expanded: true,
    children: [{
        text: 'Adressen',
        expanded: true,
        children: [{
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.verblijfsobjecten.name
          },
          /*{
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.verblijfsobjecten_oud.name
          },*/
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.standplaatsen.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.ligplaatsen.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.panden.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.leegstand.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.hoofdgebouw.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.koop_huurwoningen.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.wozwaarde.name
          },
        ]
      },
      {
        text: 'Bedrijven en Instellingen',
        expanded: true,
        children: [
            {nodeType: "gx_layer",layer: Heron.ngein.layermap.par.name}, 
            {nodeType: "gx_layer",layer: Heron.ngein.layermap.handelsregister.name},
        ]
      },
      {
        text: 'Grondgebruik en Eigendommen',
        expanded: true,
        children: [{
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.gemeentelijkeigendom.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.categorieeigenaar.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.brk_grondperceel.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.brk_secure.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.brk_appartementsrecht.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.wkpbbeperkingen.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.grondgebruik.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.grondverhuur.name
          },
        ]
      },
      {
        text: 'BGT en GBKNI',
        expanded: true,
        children: [{
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.gbkni.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.bgtstandaard.name
          },
        ]
      },
      {
        text: "Grenzen",
        expanded: false,
        children: [{
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.betere_buurten.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.buurten_cbs.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.wijken.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.bru.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.pc4.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.pc6.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.komgrens.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.boswet.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.peilgebieden.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.woonserviceszones.name
          },


        ]
      },
      {
        text: "Kabels en Leidingen",
        expanded: false,
        children: [
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.gasnet_stedin.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.k_l_gemeente.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_gevaarlijke_inhoud.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_datatransport.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_gas.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_electra_hs.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_electra_ms.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_electra_ls.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_overig.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_riool.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_water.name
          },
          {
            nodeType: "gx_layer",
            layer: Heron.ngein.layermap.klic_warmte.name
          },
        ]
      }




    ]
  },
  {
    text: "Beheer Openbare Ruimte",
    expanded: true,
    children: [{
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.begraafplaatsen.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.iasset_beheer.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.containers.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.evenementen_wegwerkzaamheden.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.groenbeheer.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.groenstructuurplan.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.nap.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.hondenuitlaatkaart.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.laadpalen.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.lichtmasten.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.mor.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.riolering.name
      },

      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.straatkolken.name
      },

      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.wegbeheer.name
      },
    ]
  },
  {
    text: "Erfgoed",
    expanded: true,
    children: [{
      nodeType: "gx_layer",
      layer: Heron.ngein.layermap.archeologischbeleid.name
    }, ]
  },
  {
    text: "Milieu, Klimaat en Duurzaamheid",
    expanded: true,
    children: [{
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.grondwaterbeschermingszones.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.opsporingsgebied_aardwarmte.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.energielabels.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.energielabels_vbo.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.florafauna.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.warmte_gasaansluiting.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.zonnekaart.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.zonnepanelen.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.zonnevelden.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.vergroening_ng.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.vergroening_perc.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.groene_daken.name
      },
    ]
  },
  {
    text: "Projecten",
    expanded: true,
    children: [{
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.projectenkaart.name
      },
      {
        nodeType: "gx_layer",
        layer: Heron.ngein.layermap.betere_buurten_voortgang.name
      },
    ]
  }

];
// Replace default layer browser DefaultConfig.js
// Pass our theme tree config as an option
Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = treeTheme;

/*
Ext.util.Observable.observeClass(Heron.data.Connection);
Heron.data.Connection.on('requestexception', function(dataconn, response, options){
    alert('kaas');
    // if (response.responseText != null) {
    if (response.status === 401) {
       alert(401);
    }
});

Ext.Ajax.on({
    beforerequest: function(x){alert('beforerequest')},
    requestcomplete: function(x){alert('requestcomplete')},
    requestexception: function(x){alert('requestexception')},
    scope: this
});

 Ext.Ajax.on('requestexception', function(conn, response, options, eOpts) {
                         var error = response.status + ' - ' + response.statusText;
                         alert.log('Ajax Request Exception! '+error);
                         if (response.status != 200) {
                            var errorData = Ext.JSON.decode(response.responseText);  console.log('ajax req error:'+errorData.message);
                            alert.log('Ajax request Error', response.status);
                            Ext.Error.raise(error);
                         }
                  });
*/