import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'semantic-ui-css/semantic.min.css';
// import "react-big-calendar/lib/css/react-big-calendar.css";

ReactDOM.render(
<Router>
<App />
</Router>, document.getElementById("root"));
registerServiceWorker();
