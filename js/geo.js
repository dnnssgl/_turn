/*
 **
 ** turn : Google Maps Geo Tagging Application
 **
 ** (c) Dennis Siegel, 06.2016
 **
 ** Styling: https://snazzymaps.com/style/151/ultra-light-with-labels
 ** location function based on https://developer.mozilla.org/de/docs/Web/WebAPI/verwenden_von_geolocation
 ** Google Maps marker example form https://developers.google.com/maps/documentation/javascript/markers?hl=de#animate
 **
 */

var marker;
var latitude;
var longitude;

function initMap() {

    var output = document.getElementById("log");
    var locInfo = document.getElementById("locInfo");

    navigator.geolocation.getCurrentPosition(displayMap, error);
    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function displayMap(position) {

        var tags = [{
            position: new google.maps.LatLng(53.100983, 8.812796),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100758, 8.812637),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.098392, 8.817197),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.098328, 8.817246),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.098289, 8.817239),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.097717, 8.816763),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.097240, 8.816620),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.097244, 8.816624),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.097237, 8.816605),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.097233, 8.816615),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.097225, 8.816624),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.095222, 8.822699),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.088516, 8.842602),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.082565, 8.853480),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.081116, 8.854983),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.072895, 8.856835),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.065289, 8.853540),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.065235, 8.853518),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.047466, 8.846253),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045418, 8.842974),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045540, 8.843079),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045547, 8.843081),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045971, 8.843265),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045971, 8.843265),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045971, 8.843265),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045971, 8.843265),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045971, 8.843265),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045971, 8.843265),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045971, 8.843265),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045769, 8.844530),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045689, 8.845106),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.045689, 8.845116),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.047245, 8.846125),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.048168, 8.846907),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.064655, 8.853665),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.064728, 8.853714),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.066944, 8.854713),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.070305, 8.856356),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.071171, 8.856645),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.072529, 8.857116),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.076550, 8.855042),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100906, 8.812778),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100914, 8.812786),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100914, 8.812975),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100937, 8.813172),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100937, 8.813267),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100929, 8.813064),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100956, 8.813140),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100891, 8.813365),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100876, 8.813347),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100945, 8.813202),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.101032, 8.813095),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.100773, 8.812794),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.103184, 8.794530),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.102535, 8.785535),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.101109, 8.782074),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.099514, 8.778361),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.098740, 8.776405),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.097935, 8.768972),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.093914, 8.771007),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.093426, 8.770295),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.088337, 8.783664),
            type: 'tag'
        }, {
            position: new google.maps.LatLng(53.102192, 8.784939),
            type: 'tag'
        }];


        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        $(document.getElementById("tag")).removeClass("btn-danger").addClass("btn-success");
        //
        // locInfo.innerHTML = '<p>Latitude is ' + latitude + ' <br>Longitude is ' + longitude + '</p>';
        locInfo.innerHTML = latitude + ',' + longitude;
        //
        output.innerHTML = '';
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: { lat: latitude, lng: longitude },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles:
                [{
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#3498db"
                }, {
                    "lightness": 80
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ecf0f1"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ecf0f1"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#449d44"
                }, {
                    "lightness": 80
                }]
            }, {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#ffffff"
                }, {
                    "lightness": 16
                }]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#2c3e50"
                }]
            }, {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f2f2f2"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#fefefe"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }]
        });

        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: { lat: latitude, lng: longitude }
        });
        marker.addListener('click', toggleBounce);

        var lat = marker.getPosition().lat();

        console.log(lat);
        var iconBase = 'images/';
        var icons = {
            // based on statistical accident database
            reference: {
                icon: iconBase + 'reference_image.png'
            },
            // user tags
            tag: {
                icon: iconBase + 'tag_image.png'
            }
        };



        function addMarker(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icons[feature.type].icon,
                map: map
            });
        }



        for (var i = 0, feature; feature = tags[i]; i++) {
            addMarker(feature);
            // console.log(feature);
        }
    };

    function error() {
        $(document.getElementById("tag")).removeClass("btn-success").addClass("disabled");
        output.innerHTML = "Unable to retrieve your location";
    };

    output.innerHTML = "Locating...";
    //console.log(latitude + ", " + longitude);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

/**
 * This function will call the server to save the coordinates
 * into an designated file
 * @author mail@thmshhsl.de
 * @return {void}
 */
function tag() {
    var lat = latitude;
    var lng = longitude;
    var tag = 'tag';
    var reference = 'reference';
    var params = [
        'lat=' + lat,
        '&lng=' + lng,
        '&tag=' + tag,
        '&reference=' + reference
    ].join('');
    var request = new XMLHttpRequest();
    request.open('POST', '/backend/save.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
        } else {
            // We reached our target server, but it returned an error
            console.log('server error', this.response);
        }
    };
    request.onerror = function() {
        console.log('there was a general error');
    };
    request.send(params);

}
