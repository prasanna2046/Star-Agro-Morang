var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_tempororyoutline_2 = new ol.format.GeoJSON();
var features_tempororyoutline_2 = format_tempororyoutline_2.readFeatures(json_tempororyoutline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempororyoutline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempororyoutline_2.addFeatures(features_tempororyoutline_2);
var lyr_tempororyoutline_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempororyoutline_2, 
                style: style_tempororyoutline_2,
                popuplayertitle: "temporory outline",
                interactive: true,
                title: '<img src="styles/legend/tempororyoutline_2.png" /> temporory outline'
            });
var format_officebuilding_3 = new ol.format.GeoJSON();
var features_officebuilding_3 = format_officebuilding_3.readFeatures(json_officebuilding_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_officebuilding_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_officebuilding_3.addFeatures(features_officebuilding_3);
var lyr_officebuilding_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_officebuilding_3, 
                style: style_officebuilding_3,
                popuplayertitle: "office building",
                interactive: true,
                title: '<img src="styles/legend/officebuilding_3.png" /> office building'
            });
var format_resort_4 = new ol.format.GeoJSON();
var features_resort_4 = format_resort_4.readFeatures(json_resort_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_resort_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_resort_4.addFeatures(features_resort_4);
var lyr_resort_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_resort_4, 
                style: style_resort_4,
                popuplayertitle: "resort",
                interactive: true,
                title: '<img src="styles/legend/resort_4.png" /> resort'
            });
var format_truss_5 = new ol.format.GeoJSON();
var features_truss_5 = format_truss_5.readFeatures(json_truss_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_truss_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_truss_5.addFeatures(features_truss_5);
var lyr_truss_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_truss_5, 
                style: style_truss_5,
                popuplayertitle: "truss",
                interactive: true,
                title: '<img src="styles/legend/truss_5.png" /> truss'
            });
var format_pond_6 = new ol.format.GeoJSON();
var features_pond_6 = format_pond_6.readFeatures(json_pond_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pond_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pond_6.addFeatures(features_pond_6);
var lyr_pond_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pond_6, 
                style: style_pond_6,
                popuplayertitle: "pond",
                interactive: true,
                title: '<img src="styles/legend/pond_6.png" /> pond'
            });
var format_biogas_7 = new ol.format.GeoJSON();
var features_biogas_7 = format_biogas_7.readFeatures(json_biogas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_biogas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_biogas_7.addFeatures(features_biogas_7);
var lyr_biogas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_biogas_7, 
                style: style_biogas_7,
                popuplayertitle: "biogas",
                interactive: true,
                title: '<img src="styles/legend/biogas_7.png" /> biogas'
            });
var format_tree1_8 = new ol.format.GeoJSON();
var features_tree1_8 = format_tree1_8.readFeatures(json_tree1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tree1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tree1_8.addFeatures(features_tree1_8);
var lyr_tree1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tree1_8, 
                style: style_tree1_8,
                popuplayertitle: "tree1",
                interactive: true,
                title: '<img src="styles/legend/tree1_8.png" /> tree1'
            });
var format_staragro2_9 = new ol.format.GeoJSON();
var features_staragro2_9 = format_staragro2_9.readFeatures(json_staragro2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_staragro2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_staragro2_9.addFeatures(features_staragro2_9);
var lyr_staragro2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_staragro2_9, 
                style: style_staragro2_9,
                popuplayertitle: "star agro2",
                interactive: true,
                title: '<img src="styles/legend/staragro2_9.png" /> star agro2'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_tempororyoutline_2.setVisible(true);lyr_officebuilding_3.setVisible(true);lyr_resort_4.setVisible(true);lyr_truss_5.setVisible(true);lyr_pond_6.setVisible(true);lyr_biogas_7.setVisible(true);lyr_tree1_8.setVisible(true);lyr_staragro2_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_tempororyoutline_2,lyr_officebuilding_3,lyr_resort_4,lyr_truss_5,lyr_pond_6,lyr_biogas_7,lyr_tree1_8,lyr_staragro2_9];
lyr_tempororyoutline_2.set('fieldAliases', {'FID': 'FID', });
lyr_officebuilding_3.set('fieldAliases', {'FID': 'FID', });
lyr_resort_4.set('fieldAliases', {'FID': 'FID', });
lyr_truss_5.set('fieldAliases', {'FID': 'FID', });
lyr_pond_6.set('fieldAliases', {'FID': 'FID', });
lyr_biogas_7.set('fieldAliases', {'FID': 'FID', });
lyr_tree1_8.set('fieldAliases', {'FID': 'FID', });
lyr_staragro2_9.set('fieldAliases', {'sn': 'sn', 'y': 'y', 'x': 'x', });
lyr_tempororyoutline_2.set('fieldImages', {'FID': 'TextEdit', });
lyr_officebuilding_3.set('fieldImages', {'FID': 'TextEdit', });
lyr_resort_4.set('fieldImages', {'FID': 'TextEdit', });
lyr_truss_5.set('fieldImages', {'FID': 'TextEdit', });
lyr_pond_6.set('fieldImages', {'FID': 'TextEdit', });
lyr_biogas_7.set('fieldImages', {'FID': 'TextEdit', });
lyr_tree1_8.set('fieldImages', {'FID': 'TextEdit', });
lyr_staragro2_9.set('fieldImages', {'sn': '', 'y': '', 'x': '', });
lyr_tempororyoutline_2.set('fieldLabels', {'FID': 'no label', });
lyr_officebuilding_3.set('fieldLabels', {'FID': 'no label', });
lyr_resort_4.set('fieldLabels', {'FID': 'no label', });
lyr_truss_5.set('fieldLabels', {'FID': 'no label', });
lyr_pond_6.set('fieldLabels', {'FID': 'no label', });
lyr_biogas_7.set('fieldLabels', {'FID': 'no label', });
lyr_tree1_8.set('fieldLabels', {'FID': 'no label', });
lyr_staragro2_9.set('fieldLabels', {'sn': 'no label', 'y': 'no label', 'x': 'no label', });
lyr_staragro2_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});