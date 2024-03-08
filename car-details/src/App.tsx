import HomePage from "./Pages/Home-Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testing from "./Pages/Testing";
import Layout from "./Pages/Layout";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<HomePage />} />
          <Route path="/test" element = {<Testing/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
};


