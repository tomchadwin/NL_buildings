
var styleJSON = {
    "version": 8,
    "name": "OS Outdoor",

    "center": [
        -1.445462913521851,
        50.924985957591986
    ],
    "zoom": 13.822550415023533,
    "bearing": -1.393608084872767,
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "httpsgeodatanationaalgeoregisternlbetatopotilesviewerstylestilejsonjson": {
            "url": "https://geodata.nationaalgeoregister.nl/beta/topotiles-viewer/styles/tilejson.json",
            "type": "vector"
        }},
    "sprite": "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/styles/open-zoomstack-outdoor/sprites",
    "glyphs": "https://s3-eu-west-1.amazonaws.com/tiles.os.uk/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "urban_0",
            "type": "fill",
            "source": "httpsgeodatanationaalgeoregisternlbetatopotilesviewerstylestilejsonjson",
            "source-layer": "urban",
            "layout": {},
            "paint": {
                "fill-color": "#000000",
                "fill-outline-color": "#232323"}
        }],
    "created": "2018-05-11T11:38:48.884Z",
    "id": "cjh1w236f0tj22sl87sm547vt",
    "modified": "2018-05-26T21:01:47.000Z",
    "owner": "Ordnance Survey",
    "visibility": "public",
    "draft": false
}