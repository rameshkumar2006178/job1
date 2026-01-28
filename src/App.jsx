 import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./compoents/Nabar";
import Home from "./compoents/Home";
import Jobs from "./compoents/Jobs";
import Profile from "./compoents/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
