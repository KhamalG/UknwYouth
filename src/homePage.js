import React from 'react';
import { 
    Link, 
    BrowserRouter as Router,
    Routes, 
    Route } from "react-router-dom";

export function Home() {
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
            <body>
            <Link to="/shop">
                <button style={{
                                textAlign: "center",
                                backgroundColor: "transparent",
                                color: "white",
                                borderColor: "transparent",
                                height: "25%",
                                width: "25%",
                }}>
                <img src={require('./FloatingIcons/pc-unscreen.gif')} alt='Shop' width='50%' height='50%'></img>
                <h1 style={{color: "white", fontSize: '16px'}}>Shop</h1>
                </button>
            </Link>
            <Link to="/cart">
                <button style={{
                                textAlign: "center",
                                backgroundColor: "transparent",
                                color: "white",
                                borderColor: "transparent",
                                height: "25%",
                                width: "25%",
                }}>
                <img src={require('./FloatingIcons/5IPp.gif')} alt='Cart' width='50%' height='50%'></img>
                <h1 style={{color: "white", fontSize: '16px'}}>Cart</h1>
                </button>
            </Link>
            <Link to="/about">
                <button style={{
                                textAlign: "center",
                                backgroundColor: "transparent",
                                color: "white",
                                borderColor: "transparent",
                                height: "25%",
                                width: "25%",
                }}>
                <img src={require('./FloatingIcons/WwK9-unscreen.gif')} alt='About' width='50%' height='50%'></img>
                <h1 style={{color: "white", fontSize: '16px'}}>About</h1>
                </button>
            </Link>
            <Link to="/contact">
                <button style={{
                                textAlign: "center",
                                backgroundColor: "transparent",
                                color: "white",
                                borderColor: "transparent",
                                height: "25%",
                                width: "25%",
                }}>
                <img src={require('./FloatingIcons/phone1.gif')} alt='Shop' width='50%' height='50%'></img>
                <h1 style={{color: "white", fontSize: '16px'}}>Contact</h1>
                </button>
            </Link> 
          </body>
        </div>
    )
}