import view from './profile.html';
import { exit } from '../firebase-functions/firebaseAuth';
import './estilos-profile.css';

export default () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  const btnClick = divElement.querySelector('#btn-sign-out');

  btnClick.addEventListener('click', () => {
    exit();
    window.location.hash = '#/login';
  });

  return divElement;
};
