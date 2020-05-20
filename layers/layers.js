var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_eMobAuswahl_1 = new ol.format.GeoJSON();
var features_eMobAuswahl_1 = format_eMobAuswahl_1.readFeatures(json_eMobAuswahl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eMobAuswahl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eMobAuswahl_1.addFeatures(features_eMobAuswahl_1);
var lyr_eMobAuswahl_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eMobAuswahl_1, 
                style: style_eMobAuswahl_1,
                interactive: true,
    title: 'eMobAuswahl<br />\
    <img src="styles/legend/eMobAuswahl_1_0.png" /> belegt<br />\
    <img src="styles/legend/eMobAuswahl_1_1.png" /> frei<br />\
    <img src="styles/legend/eMobAuswahl_1_2.png" /> teilweise belegt<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_eMobAuswahl_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_eMobAuswahl_1];
lyr_eMobAuswahl_1.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'standort': 'standort', 'anzahl_ladepunkte': 'anzahl_ladepunkte', 'ladesaeule_status': 'ladesaeule_status', 'adresse': 'adresse', 'koordinaten': 'koordinaten', 'typ': 'typ', 'ladepunkt': 'ladepunkt', 'stecker': 'stecker', 'status': 'status', 'authmethod_1': 'authmethod_1', 'authmethod_2': 'authmethod_2', });
lyr_eMobAuswahl_1.set('fieldImages', {'fid': 'Hidden', 'gml_id': 'Hidden', 'standort': 'TextEdit', 'anzahl_ladepunkte': 'Range', 'ladesaeule_status': 'TextEdit', 'adresse': 'TextEdit', 'koordinaten': 'Hidden', 'typ': 'Hidden', 'ladepunkt': 'Hidden', 'stecker': 'Hidden', 'status': 'Hidden', 'authmethod_1': 'Hidden', 'authmethod_2': 'Hidden', });
lyr_eMobAuswahl_1.set('fieldLabels', {'standort': 'inline label', 'anzahl_ladepunkte': 'inline label', 'ladesaeule_status': 'inline label', 'adresse': 'inline label', });
lyr_eMobAuswahl_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});