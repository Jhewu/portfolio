import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import NavBar from "./components/NavigationBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar /> 
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
    </>
  );
}

export default App;
