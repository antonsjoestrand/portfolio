import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Studies from "./components/Projects/Studies/Studies";
import ZenxStudy from "./components/Projects/Studies/ZenxStudy/ZenxStudy";
import Development from "./components/Projects/Development/Development";
import Design from "./components/Projects/Design/Design";
import Other from "./components/Projects/Other/Other";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      <div className='app'>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/case-studies' element={<Studies />} />
            <Route path='/case-studies/zenx-study' element={<ZenxStudy />} />
            <Route path='/development' element={<Development />} />
            <Route path='/design' element={<Design />} />
            <Route path='/other' element={<Other />} />

            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<Navigate replace to='/404' />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
