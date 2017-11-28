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


		//Venue Map
		//=======================================================================================
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
			scrollwheel: false,

		};

		//CREATE NEW MAP
		//=======================================================================================
		var venueMap = new google.maps.Map(document.getElementById('venueMap'), venueMapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
		venueMap.mapTypes.set('map_style', styledMap);
		venueMap.setMapTypeId('map_style');

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================		
		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(40.3374529, -76.4114597),
			map: venueMap,
			title: 'Wedding Ceremony'
		});


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		/*var marker1 = new MarkerWithLabel({
       		position: new google.maps.LatLng(35.441921, -97.432528),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">Wedding</br>Location</div></div>',
       		labelAnchor: new google.maps.Point(88, 88),
       		labelClass: "labels" // the CSS class for the label
     	});
		
*/
		//INFO WINDOWS 1
		//=======================================================================================
		var contentString1 = '' +
			'<div class="info-window-wrapper">' +
			'<h6>CEREMONY</h6>' +
			'<div class="info-window-desc">Bransenhill Mansion</div>' +
			'</div>';

		var marker1_infowindow = new google.maps.InfoWindow({
			content: contentString1,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0, -10)
		});

		//OPEN INFO WINDOWS ON LOAD
		marker1_infowindow.open(venueMap, marker1);

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(marker1, 'click', function () {
			marker1_infowindow.open(venueMap, marker1);
		});
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(venueMap, 'bounds_changed', function () {
			if (is_windowresize) {
				//map.setCenter(marker.getPosition());
				window.setTimeout(function () {
					venueMap.panTo(marker1.getPosition());
				}, 500);
			}
			is_windowresize = false;
		});

		//END VENUE MAP		

		//Hotel Map
		//=======================================================================================
		var hotelMapOptions = {
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: new google.maps.LatLng(40.380347, -76.6666477),
			panControl: true,
			zoomControl: true,
			mapTypeControl: true,
			//scaleControl: false,
			streetViewControl: true,
			overviewMapControl: true,
			//rotateControl:true,			
			scrollwheel: false,

		};

		//CREATE NEW MAP
		//=======================================================================================
		var hotelMap = new google.maps.Map(document.getElementById('hotelMap'), hotelMapOptions);

		//Associate the styled map with the MapTypeId and set it to display.
		hotelMap.mapTypes.set('map_style', styledMap);
		hotelMap.setMapTypeId('map_style');

		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';

		//ADD NEW MARKER
		//=======================================================================================		
		var hotelMarker = new google.maps.Marker({
			position: new google.maps.LatLng(40.380347, -76.6666477),
			map: hotelMap,
			title: 'Hotel'
		});


		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		/*var marker1 = new MarkerWithLabel({
					position: new google.maps.LatLng(35.441921, -97.432528),
					draggable: false,
					raiseOnDrag: false,
					icon: ' ',
					map: map, 
					labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">Wedding</br>Location</div></div>',
					labelAnchor: new google.maps.Point(88, 88),
					labelClass: "labels" // the CSS class for the label
			});

		*/
		//INFO WINDOWS 1
		//=======================================================================================
		var hotelString = '' +
			'<div class="info-window-wrapper">' +
			'<h6>HOTEL</h6>' +
			'<div class="info-window-desc">Holiday Inn Harrisburg/Hershey</div>' +
			'<div class="info-window-link">' +
			'<a href="https://www.holidayinn.com/redirect?path=hd&brandCode=hi&localeCode=en&regionCode=1&hotelCode=GRVPA&_PMID=99801505&GPC=BWD&viewfullsite=true">Book a Room</a>' +
			'</div>';

		var hotelMarker_infowindow = new google.maps.InfoWindow({
			content: hotelString,
			maxWidth: 200,
			pixelOffset: new google.maps.Size(0, -10)
		});

		//OPEN INFO WINDOWS ON LOAD
		hotelMarker_infowindow.open(hotelMap, hotelMarker);

		//ON MARKER CLICK EVENTS
		google.maps.event.addListener(hotelMarker, 'click', function () {
			hotelMarker_infowindow.open(hotelMap, hotelMarker);
		});
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(hotelMap, 'bounds_changed', function () {
			if (is_windowresize) {
				//map.setCenter(marker.getPosition());
				window.setTimeout(function () {
					hotelMap.panTo(hotelMarker.getPosition());
				}, 500);
			}
			is_windowresize = false;
		});
	}
	//END HOTEL MAP		







	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);


})(jQuery);