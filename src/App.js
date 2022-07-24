import React, {useState} from 'react'
import { Link, BrowserRouter as Router, useNavigate} from 'react-router-dom';


function LandingPage() {
  const[click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  let navigate = useNavigate();

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
    <Router>
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
            {/* <Link
                to="/home" 
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
                > </Link>*/}
            <h1 style={{color: "white", fontSize: '16px'}} onClick={() =>{
                navigate("/home")
            }}>PRESS TO ENTER</h1>
        </div>
    </Router>
);
}

export default LandingPage;