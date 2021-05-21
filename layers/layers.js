var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tauxdepollution_1 = new ol.format.GeoJSON();
var features_Tauxdepollution_1 = format_Tauxdepollution_1.readFeatures(json_Tauxdepollution_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdepollution_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdepollution_1.addFeatures(features_Tauxdepollution_1);
var lyr_Tauxdepollution_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tauxdepollution_1, 
                style: style_Tauxdepollution_1,
                interactive: true,
    title: 'Taux de pollution<br />\
    <img src="styles/legend/Tauxdepollution_1_0.png" /> 0.0193<br />\
    <img src="styles/legend/Tauxdepollution_1_1.png" /> 0.0241<br />\
    <img src="styles/legend/Tauxdepollution_1_2.png" /> 0.0281<br />\
    <img src="styles/legend/Tauxdepollution_1_3.png" /> 0.032<br />\
    <img src="styles/legend/Tauxdepollution_1_4.png" /> 0.0489<br />'
        });
var format_yaounde_2 = new ol.format.GeoJSON();
var features_yaounde_2 = format_yaounde_2.readFeatures(json_yaounde_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yaounde_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yaounde_2.addFeatures(features_yaounde_2);
var lyr_yaounde_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_yaounde_2, 
                style: style_yaounde_2,
                interactive: true,
                title: '<img src="styles/legend/yaounde_2.png" /> yaounde'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Tauxdepollution_1.setVisible(true);lyr_yaounde_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Tauxdepollution_1,lyr_yaounde_2];
lyr_Tauxdepollution_1.set('fieldAliases', {'qc_id': 'qc_id', 'gridcode': 'gridcode', 'taux_poll': 'taux', });
lyr_yaounde_2.set('fieldAliases', {'qc_id': 'qc_id', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'name': 'name', 'ref_cog': 'ref_cog', });
lyr_Tauxdepollution_1.set('fieldImages', {'qc_id': 'Hidden', 'gridcode': 'Hidden', 'taux_poll': 'TextEdit', });
lyr_yaounde_2.set('fieldImages', {'qc_id': 'Hidden', 'osm_id': 'Hidden', 'osm_way_id': 'Hidden', 'boundary': 'Hidden', 'admin_leve': 'Hidden', 'name': 'TextEdit', 'ref_cog': 'Hidden', });
lyr_Tauxdepollution_1.set('fieldLabels', {'taux_poll': 'inline label', });
lyr_yaounde_2.set('fieldLabels', {'name': 'inline label', });
lyr_yaounde_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});