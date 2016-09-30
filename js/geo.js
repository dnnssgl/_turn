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
var map;
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

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        $(document.getElementById("reportButton")).removeClass("disabled");

        // write location inte to dom
        locInfo.innerHTML = latitude + ', <br>' + longitude;
        // output.innerHTML = '1';

        // initialize map
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: { lat: latitude, lng: longitude },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: dennis.map.styles
        });

        // add current position to map
        marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: { lat: latitude, lng: longitude }
        });
        marker.addListener('click', function() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        });

        // get all marker from json, and add them to the map
        $.getJSON('/backend/data.json', function(json) {
            addTagsToMap(json);
        });

    };

    function error() {
        $(document.getElementById("reportButton")).addClass("disabled");
        output.innerHTML = "Unable to retrieve your location";
    };

    output.innerHTML = "Locating...";
}

/**
 * [getIconTypes description]
 * @return {object} containing all icons
 */
function getIconTypes() {
    // generate some icons
    var iconBase = 'images/';
    return {
        user: {
            icon: iconBase + 'marker-user_image.png'
        },
        authority: {
            icon: iconBase + 'marker-authority_image.png'
        }
    };
}

/**
 * This function will add marker to the map with any given
 * array that has objects with lat and lng attributes
 * @param {array} tags array of objects with lat and lng
 */
function addTagsToMap(tags) {
    var icons = getIconTypes();
    _.each(tags, function(tag) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(tag.lat, tag.lng),
            animation: google.maps.Animation.DROP,
            icon: icons[tag.type].icon,
            map: map
        });
    });
}

/**
 * This function will call the server to save the coordinates
 * into a designated file
 * @author mail@thmshhsl.de
 * @return {void}
 */
function report() {
    var lat = latitude;
    var lng = longitude;
    var type = 'user';
    var params = [
        'lat=' + lat,
        '&lng=' + lng,
        '&type=' + type
    ].join('');
    var request = new XMLHttpRequest();
    request.open('POST', '/backend/save.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            addTagsToMap();
            console.log('worked');
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

/**
*   this functions opens a dialog
*   (c) Dennis Siegel
*/
function dialog() {
    $(".header").addClass('hide');
    $(".dialog--main").addClass('hide');
    $(".dialog--submit").removeClass('hide');
}

function cancel() {
    $(".header").removeClass('hide');
    $(".dialog--main").removeClass('hide');
    $(".dialog--submit").addClass('hide');
}

function submit() {
    $(".header").removeClass('hide');
    $(".dialog--main").removeClass('hide');
    $(".dialog--submit").addClass('hide');
}

