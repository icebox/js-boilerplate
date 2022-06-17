import "../style/main.css";
import Img from "../assets/imgs/icon.svg";

const Boot = () => {

  const div = document.createElement('div');

  const Icon = new Image();
  Icon.src = Img;

  div.appendChild(Icon);
  document.body.appendChild(div);

  console.log('que pasa?');
};

window.onload = () => Boot();
