import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import routing pages
import Routing from "./Routing/Routing";

import { useSelector } from "react-redux";
import Loading from "./Components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Required Bootstrap imports
// import "bootstrap/dist/css/bootstrap.min.css";

// styles

const App = () => {
  const { loading } = useSelector((store) => store.applicant);
  return (
    <React.Fragment>
      {loading && <Loading />}
      <Router>
        <ToastContainer />
        <Routing />
      </Router>
    </React.Fragment>
  );
};

export default App;
