import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import routing pages
import Routing from "./routing/Routing";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routing />
      </Router>
    </React.Fragment>
  );
};

export default App;
