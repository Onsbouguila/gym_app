import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./CommunComponents/Header";
import Footer from "./CommunComponents/Footer";
import Home from "./Components/Home/Home";

import Pricing from "./Components/Pricing/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import About from "./Components/About/About";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
