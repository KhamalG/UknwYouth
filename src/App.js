import React, {useState} from 'react'
import homePage from './homePage';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function landingPage() {
  const[click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick(){
      setClick(!click);
  } 

  function showButton (){
      if(window.innerWidth <= 960) {
      setButton(false);
      } else {
      setButton(true);
      }
  };

  window.addEventListener('resize', showButton);

  return (
      <>
          <Router>
              <nav>
                  <div className='landingPage'>
                      <video  src={require("./FloatingIcons/Logoy.mp4")} autoPlay loop muted
                      style={{
                          position: "absolute",
                          width: "100%",
                          left: "none",
                          top: "none",
                          height: "100%",
                          objectFit: "cover",
                          transform: "translate(-50%, --50%)",
                          zIndex: "-1"
                      }}
                      >
                      </video>
                      <Link
                          to="/home" 
                          onClick={handleClick}
                          style={{
                          width: '100%',
                          height: '100%',
                          position: '50',
                          color: "white",
                          backgroundColor: 'transparent',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          zIndex: "1",
                          border: 'transparent',
                          }}
                          >
                          <h1 style={{color: "white", fontSize: '16px'}}>PRESS TO ENTER</h1>
                      </Link> 
                      <Routes>
                        <Route path="/home" element={<homePage />} />
                     </Routes>
                  </div>
              </nav>
          </Router>
      </>
  );
}

export default landingPage;