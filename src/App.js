import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./sass/app.scss";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
