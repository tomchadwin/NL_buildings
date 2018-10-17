
var style_httpsgeodatanationaalgeoregisternlbetatopotilesviewerstylestilejsonjson = function(feature, resolution) {
    var size = 0;
var placement = 'point';if (feature.get('layer') == 'urban' && feature.getGeometry().getType() == 'Polygon'){
            return function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'}),
    })];

    return style;
}(feature, resolution);
        };
}