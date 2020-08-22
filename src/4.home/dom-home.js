import view from "./home.html";
import "./estilos-home.css";
import "../firebase-functions/firebaseConfig";
import Swal from 'sweetalert2';

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;
  
  Swal.fire({
    title: 'Bienvenido'
  });
  
  let places = [
    {
      id: 1,
      type: "safePlace",
      location: {
        lat: 4.7115, 
        lng: -74.0706 
      },
      details: {
        title: "Bulevar Niza",
        description: "Este es un lugar ",
        icon: '../images/medical-mask.png'
      }
    },
    {
      id: 2,
      type: "safePlace",
      location: {
        lat:4.6383, 
        lng:-74.0885  
      },
      details: {
        title: "Universidad Nacional",
        description: "Este es un lugar ",
        icon: 'https://image.flaticon.com/icons/svg/564/564619.svg'
      }
    },
    {
      id: 3,
      type: "dangerPlace",
      location: {
        lat:4.6797, 
        lng:-74.07870
      },
      details: {
        title: "Casa de Ana",
        description: "Este es un lugar malvado ",
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      }
    }  
  ]
  
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAT78gncEo1UtEQc9MbWmvRyWlHT_Wp4EY&callback=initMap';
  
  /* var scriptMarkerClusterer = document.createElement('script'); */
  /* scriptMarkerClusterer.src = 'https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js'; */

  script.defer = true;

  // Attach your callback function to the `window` object
  window.initMap = function() {
    let coord = {lat:4.7110 ,lng: -74.0721};
      let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord,
        
      });
    
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();

      directionsRenderer.setMap(map);
    
      const calcularRuta = document.querySelector('.calc');
      calcularRuta.addEventListener('click',calcRoute)
    
    function calcRoute() {
      var start = places[0].location;
      var end = places[1].location;
      var request = {
        origin: start,
        destination: end,
        travelMode: 'WALKING'
      };
      directionsService.route(request, function(result, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(result);
        }
    }); 
      
      places.map((place, i) => {
        console.log(place, i )
        return new google.maps.Marker({
          position: places[i].location,
          icon: places[i].details.icon,
          map: map
        });
      })

       // Add marker
      // var marker = new google.maps.Marker({
      //   position:{lat:42.4668,lng:-70.9495},
      //   map:map,
      //   icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
      // });

      
      
      /* let infoWindow = new google.maps.InfoWindow({
        compose: 
      }) */
  }

  let infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });
  let firstPoint = places[1].location;
  firstPoint.addListener('click', function(){
    infoWindow.open(map, firstPoint);
  });
      // new MarkerClusterer(map, markers,
      //   {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

  };

  // Append the 'script' element to 'head'
  document.head.appendChild(script);
  
  return divElement;

  
};
