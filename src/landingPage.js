import React from 'react'
import { Link, BrowserRouter as Router, useNavigate} from 'react-router-dom';

export function Landing() {
    let navigate = useNavigate();
    
    return (
        <div>
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
            <h1 style={{color: "white", fontSize: '16px'}} onClick={() =>{
                navigate("/home")
            }}>PRESS TO ENTER</h1>
        </div>
    )
}

