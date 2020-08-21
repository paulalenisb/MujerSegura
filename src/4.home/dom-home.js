import view from "./home.html";
import "./estilos-home.css";
import "../firebase-functions/firebaseConfig";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  function initMap() {
    
    const location  = {lat: 4.7110, lng: 74.0721};
    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: location}
        );
    
    var marker = new google.maps.Marker({position: location, map: map});
/*   }

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 4.7110, lng: 74.0721},
    zoom: 15; */
  });

  return divElement;
};
