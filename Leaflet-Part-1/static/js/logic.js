// Creating the initial map object
var map = L.map("map", {
    center: [37.09, -95.71],
    zoom: 4
});

// Adding a grayscale tile layer (the background map image) to our map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1Ijoic3VuankwODI3IiwiYSI6ImNtMDlpYWo4cjE0dGcyc29xaGZ1bG13NXkifQ.-QOo5g0a4zZbw7OMD6I6FA"
}).addTo(map);

// Use the URL on the earthquake website to pull in the data for the visualization
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Use the URL from the USGS website to pull in the data for the visualization
d3.json(url).then(function (data) {

    // to check whether the data is pulled correctly
    console.log(data);

    // Define a function to have circle size based on magnitude
    function radiusSize(magnitude) {
        return magnitude * 4;  // Adjusted for better visualization
    }
    
    // Define a function to have darker color based on earthquake depth
    function color(depth) {
        switch(true) {
            case depth > 90:
                return "#FF5F65";
            case depth > 70:
                return "#FCA35D";
            case depth > 50:
                return "#FDB72A";
            case depth > 30:
                return "#F7DB11";
            case depth > 10:
                return "#DCF400";
            default:
                return "#A3F600";
        }
    }

    // Define a marker style for each earthquake
    function marker(feature) {
        return {
            opacity: 1,
            fillColor: color(feature.geometry.coordinates[2]), // depth
            color: "#000000",
            radius: radiusSize(feature.properties.mag), // magnitude
            stroke: true,
            weight: 0.5,
            fillOpacity: 1,
        };
    }

    // Define a function that we want to run once for each feature in the features array.
    // Give each feature a popup that describes the place and time of the earthquake.
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>Location: ${feature.properties.place}</h3><hr><p>Date: ${new Date(feature.properties.time)}</p><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]}</p>`);
    }

    // Create a GeoJSON layer that contains the features array on the earthquakeData object.
    // Run the onEachFeature function once for each piece of data in the array.
    var earthquakes = L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, marker(feature));
        },
        onEachFeature: onEachFeature
    });

    // Add the earthquakes layer to the map
    earthquakes.addTo(map);

    // Add a legend to the map
    var legend = L.control({position: "bottomright"});
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend"),
            depth = [-10, 10, 30, 50, 70, 90];
        
        div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
        
        for (var i = 0; i < depth.length; i++) {
            div.innerHTML +=
                '<i style="background:' + color(depth[i] + 1) + '"></i> ' +
                depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend.addTo(map);
});
