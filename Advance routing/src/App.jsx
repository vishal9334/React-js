import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Production from "./pages/Production";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import MensCollection from "./pages/MensCollection";
import WomenCollection from "./pages/WomenCollection";
import KidsCollection from "./pages/KidsCollection";
import Course from "./pages/Course";
import CourseDetails from "./pages/CourseDetails";
const App = () => {
  return (
    <div className="h-screen w-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />}/>
        <Route path="/courses/:id" element={<CourseDetails/>}/>
        
        <Route path="/product" element={<Production />}>
          <Route path="men" element={<MensCollection />} />
          <Route path="women" element={<WomenCollection/>} />
          <Route path="kid" element={<KidsCollection/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
