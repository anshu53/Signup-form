import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarss from "./components/Navbarss";
import { Home } from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import SignIn from "./SignIn";
import Details from "./components/Details";
import Protected from "./components/Protected";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarss />
        <Routes>
          {/* <Route path="/" element={<Protected Component={Home} />} /> */}
          <Route path="/details" element={<Protected Component={Details} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
