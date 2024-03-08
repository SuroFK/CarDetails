import HomePage from "./Pages/Home-Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testing from "./Pages/Testing";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="/test" element = {<Testing/>} />
      </Routes>
    </BrowserRouter>
  )
};


