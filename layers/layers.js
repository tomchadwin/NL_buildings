var wms_layers = [];

        var lyr_httpsgeodatanationaalgeoregisternlbetatopotilesviewerstylestilejsonjson = new ol.layer.VectorTile({
            source: new ol.source.VectorTile({
                format: new ol.format.MVT(),
                url: 'https://geodata.nationaalgeoregister.nl/beta/topotiles/{z}/{x}/{y}.pbf?',
                tileGrid: new ol.tilegrid.createXYZ({
                    tileSize: 512, maxZoom: 14
                }),
                tilePixelRatio: 8
            }),
            style: style_httpsgeodatanationaalgeoregisternlbetatopotilesviewerstylestilejsonjson
        });
        
var group_urban = new ol.layer.Group({
                                layers: [],
                                title: "urban"});

lyr_httpsgeodatanationaalgeoregisternlbetatopotilesviewerstylestilejsonjson.setVisible(true);
var layersList = [lyr_httpsgeodatanationaalgeoregisternlbetatopotilesviewerstylestilejsonjson];
