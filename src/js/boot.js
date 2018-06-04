import "../style/main.css";

export default class Boot {
  constructor () {
    console.log('que pasa');
  }
}

window.onload = () => new Boot;
