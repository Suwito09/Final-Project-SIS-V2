var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PETAKECAMATAN_1 = new ol.format.GeoJSON();
var features_PETAKECAMATAN_1 = format_PETAKECAMATAN_1.readFeatures(json_PETAKECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETAKECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETAKECAMATAN_1.addFeatures(features_PETAKECAMATAN_1);
var lyr_PETAKECAMATAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETAKECAMATAN_1, 
                style: style_PETAKECAMATAN_1,
                popuplayertitle: 'PETA KECAMATAN',
                interactive: false,
                title: '<img src="styles/legend/PETAKECAMATAN_1.png" /> PETA KECAMATAN'
            });
var format_JUMLAHPERGURUANTINGGI_2 = new ol.format.GeoJSON();
var features_JUMLAHPERGURUANTINGGI_2 = format_JUMLAHPERGURUANTINGGI_2.readFeatures(json_JUMLAHPERGURUANTINGGI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUMLAHPERGURUANTINGGI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUMLAHPERGURUANTINGGI_2.addFeatures(features_JUMLAHPERGURUANTINGGI_2);
var lyr_JUMLAHPERGURUANTINGGI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUMLAHPERGURUANTINGGI_2, 
                style: style_JUMLAHPERGURUANTINGGI_2,
                popuplayertitle: 'JUMLAH PERGURUAN TINGGI',
                interactive: false,
    title: 'JUMLAH PERGURUAN TINGGI<br />\
    <img src="styles/legend/JUMLAHPERGURUANTINGGI_2_0.png" /> 0 - 0<br />\
    <img src="styles/legend/JUMLAHPERGURUANTINGGI_2_1.png" /> 0 - 1<br />\
    <img src="styles/legend/JUMLAHPERGURUANTINGGI_2_2.png" /> 1 - 3<br />\
    <img src="styles/legend/JUMLAHPERGURUANTINGGI_2_3.png" /> 3 - 5<br />\
    <img src="styles/legend/JUMLAHPERGURUANTINGGI_2_4.png" /> 5 - 10<br />' });
var format_JENISPERGURUANTINGGI_3 = new ol.format.GeoJSON();
var features_JENISPERGURUANTINGGI_3 = format_JENISPERGURUANTINGGI_3.readFeatures(json_JENISPERGURUANTINGGI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JENISPERGURUANTINGGI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JENISPERGURUANTINGGI_3.addFeatures(features_JENISPERGURUANTINGGI_3);
var lyr_JENISPERGURUANTINGGI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JENISPERGURUANTINGGI_3, 
                style: style_JENISPERGURUANTINGGI_3,
                popuplayertitle: 'JENIS PERGURUAN TINGGI',
                interactive: true,
    title: 'JENIS PERGURUAN TINGGI<br />\
    <img src="styles/legend/JENISPERGURUANTINGGI_3_0.png" /> AKADEMI<br />\
    <img src="styles/legend/JENISPERGURUANTINGGI_3_1.png" /> INSTITUT<br />\
    <img src="styles/legend/JENISPERGURUANTINGGI_3_2.png" /> POLITEKNIK<br />\
    <img src="styles/legend/JENISPERGURUANTINGGI_3_3.png" /> PTN<br />\
    <img src="styles/legend/JENISPERGURUANTINGGI_3_4.png" /> PTS<br />\
    <img src="styles/legend/JENISPERGURUANTINGGI_3_5.png" /> SEKOLAH TINGGI<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_PETAKECAMATAN_1.setVisible(true);lyr_JUMLAHPERGURUANTINGGI_2.setVisible(true);lyr_JENISPERGURUANTINGGI_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PETAKECAMATAN_1,lyr_JUMLAHPERGURUANTINGGI_2,lyr_JENISPERGURUANTINGGI_3];
lyr_PETAKECAMATAN_1.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_JUMLAHPERGURUANTINGGI_2.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'NUMPOINTS': 'NUMPOINTS', });
lyr_JENISPERGURUANTINGGI_3.set('fieldAliases', {'Nama Perguruan Tinggi': 'Nama Perguruan Tinggi', 'Jenis': 'Jenis', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Akreditasi': 'Akreditasi', });
lyr_PETAKECAMATAN_1.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'GID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_JUMLAHPERGURUANTINGGI_2.set('fieldImages', {'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_JENISPERGURUANTINGGI_3.set('fieldImages', {'Nama Perguruan Tinggi': 'TextEdit', 'Jenis': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Akreditasi': 'TextEdit', });
lyr_PETAKECAMATAN_1.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_JUMLAHPERGURUANTINGGI_2.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', 'NUMPOINTS': 'no label', });
lyr_JENISPERGURUANTINGGI_3.set('fieldLabels', {'Nama Perguruan Tinggi': 'header label - visible with data', 'Jenis': 'header label - visible with data', 'Alamat': 'header label - visible with data', 'Kecamatan': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Akreditasi': 'header label - visible with data', });
lyr_JENISPERGURUANTINGGI_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});