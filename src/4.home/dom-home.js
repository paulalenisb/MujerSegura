import view from "./home.html";
import "./estilos-home.css";
import "../firebase-functions/firebaseConfig";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  function initMap() {
    
    const options ={
      zoom: 15,
      location: {lat: 4.7110, lng: 74.0721}  
    }
    
    const map = new google.maps.Map(
        document.getElementById('map'), options
        );
    
    const marker = new google.maps.Marker({position: location, map: map});

  };

  return divElement;
};
