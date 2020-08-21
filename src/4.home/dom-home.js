import view from "./home.html";
import "./estilos-home.css";
import "../firebase-functions/firebaseConfig";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  


  return divElement;
};
