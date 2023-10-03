import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigationbar from "./componenets/Navigationbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
