/*============================== 
	- MAP JS (DEFAULT MARKER)
	- Template: MARRY - Responsive HTML Wedding Template
	- Author: DoubleEight
	- Version: 1.0.0
	- Website: themeforest.net/user/doubleeight/portfolio
================================= */

(function ($) {

	'use strict';


	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function () {
		is_windowresize = true;
	});


	//INITIALIZE MAP
	function initialize() {

		// Create an array of styles
		//=======================================================================================
		var styles = [{
			stylers: [{
					hue: "#f98d8a"
				},
				{
					saturation: -50
				}
			]
		}];

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles, {
			name: "Styled Map"
		});


		//DEFINE MAP OPTIONS
		//=======================================================================================
		/*
		var mapOptions = {
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: new google.maps.LatLng(35.441921, -97.432528),
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			//scaleControl: false,
			streetViewControl: true,
			overviewMapControl: true,
			//rotateControl:true,			
			scrollwheel: false,

		};
		*/
		var venueMapOptions = {
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: new google.maps.LatLng(40.3374529, -76.4114597),
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			//scaleControl: false,
			streetViewControl: true,
			overviewMapControl: true,
			//rotateControl:true,			
			scrollwheel: false

		};

		//CREATE NEW MAP
		//=======================================================================================
		//	var map = new google.maps.Map(document.getElementById('map-canvas-1'), mapOptions);
		console.log($("#venueMap"));
		var venueMap = new google.maps.Map(document.getElementById('venueMap'), venueMapOptions);
		console.log(venueMap);

		//Associate the styled map with the MapTypeId and set it to display.
		venueMap.mapTypes.set('map_style', styledMap);
		venueMap.setMapTypeId('map_style');

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		// Venue Marker
		var venueMarker = new google.maps.Marker({
			position: new google.maps.LatLng(40.3374529, -76.4114597),
			map: venueMap,
			title: 'Ceremoney and Reception'
		})

		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = '' +
			'<div class="info-window-wrapper">' +
			'<h6>CEREMONY</h6>' +
			'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada aliquam nunc.</div>' +
			'<div class="info-window-link"><a href="#" class="grey-link with-underline">Click Here</a></div>' +
			'</div>';

		var venueMarker_infowindow = new google.maps.InfoWindow({
			content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0, -10)
		});

		//OPEN INFO WINDOWS ON LOAD
		venueMarker_infowindow.open(venueMap, venueMarker);

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(venueMarker, 'click', function () {
			venueMarker_infowindow.open(venueMap, venueMarker);
		});

		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(venueMap, 'bounds_changed', function () {
			if (is_windowresize) {
				//map.setCenter(marker.getPosition());
				window.setTimeout(function () {
					venueMap.panTo(venueMarker.getPosition());
				}, 500);
			}
			is_windowresize = false;
		});


		/*
		Marker with label
		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.439997, -97.427630),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="airport-marker" class="de-icon circle medium-size" style="background-color:#797ee6;"><i class="de-icon-airport"></i></div>',
       		labelAnchor: new google.maps.Point(27, 27),
       		labelClass: "labels" // the CSS class for the label
     	});*/




	}



	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);