		//header map
	  	var header_map = L.map('header_map',{scrollWheelZoom:false,zoomControl:false}).setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
			}).addTo(header_map);
 
	  	//basic map
		var basic_map = L.map('basic_map').setView([36.722, -4.420], 15);
		
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
			}).addTo(basic_map);

		//multilayer basic map
		var osmcarto = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'}),
		osmhumanitarian = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org">' +
          'Colaboradores de OpenStreetMap</a>  (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas \u00a9 <a href="https://github.com/hotosm/HDM-CartoCSS">Humanitarian HDM CartoCSS</a> (<a href="https://github.com/hotosm/HDM-CartoCSS/blob/master/LICENCE.txt" target="blanck">CC0 1.0</a>)'
		}),
		pnoa = L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
	   layers: "OI.OrthoimageCoverage",//nombre de la capa (ver get capabilities)
	   format: 'image/jpeg',
	   transparent: true,
	   version: '1.3.0',//wms version (ver get capabilities)
	   attribution: 'Ortofotos <a href="http://www.scne.es/productos.html#OrtoPNOA" target="blanck">PNOA</a> \u00a9 <a href="http://www.ign.es" target="blanck">Instituto Geográfico Nacional de España</a> (<a href="https://creativecommons.org/licenses/by/4.0/legalcode.es" target="blanck">CC BY 4.0</a>)'
		});

		var mlb_map = L.map('mlb_map', {
			center: [36.722, -4.420],
			zoom: 15,
			layers: [osmcarto]
		});

		var baseLayers = {
		"Callejero (OSM)": osmcarto,
		"Humanitario (OSM)": osmhumanitarian,
		"Ortofotos (IGN)": pnoa
		};

		L.control.layers(baseLayers).addTo(mlb_map);

      //map with a standard marker
      var sm_map = L.map('sm_map').setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
      	}).addTo(sm_map);
      	
     	var marker = L.marker([36.7204,-4.4150]).addTo(sm_map);
      	
     	//map with a custom marker
     	var cm_map = L.map('cm_map').setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
			}).addTo(cm_map);
      	
     	var photoIcon = L.icon({
	  	iconUrl: 'images/photo.svg',
	  	iconSize: [38, 95], // size of the icon
    	});

		L.marker([36.7204,-4.4150], {icon: photoIcon}).addTo(cm_map);
		
		//map with a custom marker and a standard popup
		var sp_map = L.map('sp_map').setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
		}).addTo(sp_map);
      	
     	var photoIcon = L.icon({
	  	iconUrl: 'images/photo.svg',
	  	iconSize: [38, 95], // size of the icon
    	});

		L.marker([36.7204,-4.4150], {icon: photoIcon}).bindPopup('Ayuntamiento de Málaga').addTo(sp_map);
		
		//map with custom marker and custom popup
		var cp_map = L.map('cp_map').setView([36.722, -4.420], 15);
		
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
		}).addTo(cp_map);
	
		var photoIcon = L.icon({
	  	iconUrl: 'images/photo.svg',
	  	iconSize: [38, 95], // size of the icon
	  	popupAnchor: [0, -15]
    	});
	
		var customPopup = "<img src='images/malaga-city-hall.jpg' alt='Ayuntamiento de Málaga' width='200px'/><br/>Ayuntamiento de Málaga. Fuente: Wikimedia Commons</a>, imagen de Daniel Capilla (CC BY-SA 4.0).";
		 	
		var customOptions =
		{
		'maxWidth': '200',
		'className' : 'custom',
		'autoPan' : 'false'
		}
		
		L.marker([36.7204,-4.4150], {icon: photoIcon}).bindPopup(customPopup,customOptions).addTo(cp_map);

		//map with a circle
		var circle_map = L.map('circle_map').setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
		}).addTo(circle_map);

	L.circle([36.722, -4.420], 300,{color:'blue', opacity:1, fillColor: 'yellow', fillOpacity:.5}).addTo(circle_map);

		//map with a rectangle
		var rectangle_map = L.map('rectangle_map').setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
		}).addTo(rectangle_map);

		var bounds = [[36.725, -4.425], [36.720, -4.415]];

		L.rectangle(bounds, {color: "purple", weight: 2}).addTo(rectangle_map);

		//map with a polygon
		var polygon_map = L.map('polygon_map').setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
		}).addTo(polygon_map);

		var area = [[36.728, -4.425],[36.718, -4.425],[36.722, -4.415]];

		L.polygon(area,{color:'green',opacity:.6}).addTo(polygon_map);
		
		//map with a polyline
		var polyline_map = L.map('polyline_map').setView([36.722, -4.420], 15);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
		}).addTo(polyline_map);

		var toUnion = [[36.7205, -4.4130],[36.7165, -4.4260],[36.7218, -4.4250],[36.7230, -4.4240],[36.7240, -4.4220],[36.7250, -4.4220],[36.7270, -4.4240],[36.7270, -4.4250],[36.7270, -4.4270],[36.7280, -4.4300]];

	L.polyline(toUnion,{color:'red',opacity:1}).addTo(polyline_map);

		//map with a data layer
		var dl_map = L.map('dl_map').setView([36.722, -4.420], 15);
		
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
			}).addTo(dl_map);

		var historic_features = {
			"type": "FeatureCollection",
			"features": [{
				"type": "Feature",
				"geometry": {
					"type": "Polygon",
					"coordinates": [[
						[-4.42428,36.71802],
						[-4.42352,36.71829],
						[-4.42388,36.71878],
						[-4.42461,36.71845]
						]]
				},
				"properties": {
						"Nombre": "Mercado de Atarazanas",
						"Descripción": "Mercado municipal central"
				}
			},{
				"type": "Feature",
				"geometry": {
						"type": "Point", 
						"coordinates": [
							-4.41942,
							36.72007
						]
				},
				"properties":{
						"Nombre": "Catedral de Málaga",
						"Descripción": "Principal templo cristiano de la ciudad"
				}
			},{
				"type": "Feature",
				"geometry": {
						"type": "LineString",
						"coordinates": [
							[-4.42515, 36.72056],
							[-4.42506, 36.72081],
							[-4.42512, 36.72144],
							[-4.42409, 36.72291],
							[-4.42345, 36.72343],
							[-4.42076, 36.72437]
							]
				},
				"properties": {
					"Nombre": "Calle Carretería",
					"Descripción": "Calle del Centro Histórico"
				}
			},{
				"type": "Feature",
				"geometry": {
						"type": "Point",
						"coordinates": [
							-4.41569,
							36.72132
						]
				},
					"properties": {
						"Nombre": "Alcazaba",
						"Descripción": "Fortificación palaciega medieval"
				}
			}]
		};

		L.geoJson(historic_features, {
			onEachFeature: function(feature,layer) {
			layer.bindPopup(feature.properties.Nombre);
		}
		}).addTo(dl_map)

		//map with a point layer from an external file
		var pl_map = L.map('pl_map').setView([36.722, -4.420], 15);
		
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: 'Datos \u00a9 <a href="http://www.openstreetmap.org/copyright">' + 'Colaboradores de OpenStreetMap </a> (<a href="http://www.openstreetmap.org/copyright">ODbL</a>) | Teselas <a href="https://github.com/gravitystorm/openstreetmap-carto">OSM Carto</a> \u00a9 Randy Allan y otros colaboradores (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)'
		}).addTo(pl_map);
		
		var parkingIcon = L.icon({
			iconUrl: 'images/bicycle-parking.svg',
			iconSize: [20,20]
			});;		
		
		var parkings = L.geoJson(data, {
			pointToLayer: function(feature,latlng){
			var marker = L.marker(latlng,{icon: parkingIcon});
			marker.bindPopup("Capacidad: " + feature.properties.capacity);
			return marker;
			}});
		var clusters = L.markerClusterGroup({ showCoverageOnHover: false });
		clusters.addLayer(parkings);
		pl_map.addLayer(clusters);