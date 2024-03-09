import HomePage from "./Pages/Home-Page";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Testing from "./Pages/Testing";
import Navbar from "./components/Navbar";
import style from "./styles/globals.module.scss";

export default function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="/test" element = {<Testing/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
};


