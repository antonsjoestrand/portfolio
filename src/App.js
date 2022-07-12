import React, { useState, useEffect, useRef } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import "./sass/locomotive-scroll.scss";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Studies from "./components/Projects/Studies/Studies";
import ZenxStudy from "./components/Projects/Studies/ZenxStudy/ZenxStudy";
import BiogeekStudy from "./components/Projects/Studies/BiogeekStudy/BiogeekStudy";
import TwdStudy from "./components/Projects/Studies/TwdStudy/TwdStudy";
import Development from "./components/Projects/Development/Development";
import Design from "./components/Projects/Design/Design";
import Other from "./components/Projects/Other/Other";
import Loading from "./components/Loading/Loading";

const App = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Router>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          multiplier: 0.6,
          firefoxMultiplier: 50,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <div className='app' data-scroll-container ref={containerRef}>
          {loading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/case-studies' element={<Studies />} />
              <Route path='/case-studies/zenx-study' element={<ZenxStudy />} />
              <Route
                path='/case-studies/biogeek-study'
                element={<BiogeekStudy />}
              />
              <Route path='/case-studies/twd-study' element={<TwdStudy />} />
              <Route path='/development' element={<Development />} />
              <Route path='/design' element={<Design />} />
              <Route path='/other' element={<Other />} />

              <Route path='/404' element={<NotFound />} />
              <Route path='*' element={<Navigate replace to='/404' />} />
            </Routes>
          )}
        </div>
      </LocomotiveScrollProvider>
    </Router>
  );
};

export default App;
