import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-secondary d-flex flex-column min-vh-100">
        <NavBar />
        <div className="container flex-grow-1">
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;