import ReactDOM from 'react-dom';
import App from "./App";

import "./assets/css/reset.css";
import "./assets/css/style.css";

const elemento = document.querySelector(".root");
console.log(elemento);
ReactDOM.render(<App />, elemento);