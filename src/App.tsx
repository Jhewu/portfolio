import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar pages={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name:"Contact", path: "/contact"}]}/> 
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}>
              {" "}
            </Route>
            <Route path="/contact" element={<Contact />}>
              {" "}
            </Route>
            <Route path="*" element={<NoPage />}>
              {" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        <Footer /> 
      </div>
    </>
  );
}

export default App;
