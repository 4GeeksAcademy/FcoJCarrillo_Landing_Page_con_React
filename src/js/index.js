import React from "react"; //importamos react into the bundle
import ReactDOM from "react-dom";

import "../styles/index.css";// include your styles into the webpack bundle

//import your own components
import Home from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
