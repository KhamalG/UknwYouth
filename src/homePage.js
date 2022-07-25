import React, {useState} from 'react';
import { 
    Link, 
    BrowserRouter as Router,
    Routes, 
    Route } from "react-router-dom";
import { ContactModal } from './contact';

export function Home() {
    const [isOpen, setIsOpen] = useState(false)
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
                }} onClick={() => setIsOpen(true)}>
                <img src={require('./FloatingIcons/pc-unscreen.gif')} alt='Shop' width='50%' height='50%'></img>
                <h1 style={{color: "white", fontSize: '16px'}}>Shop</h1>
                </button>
                <ContactModal open={isOpen} onClose={() => setIsOpen(false)} >
                
                </ContactModal>
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
                <img src={require('./FloatingIcons/mario-block-unscreen.gif')} alt='About' width='50%' height='50%'></img>
                <h1 style={{color: "white", fontSize: '16px'}}>Boring Shit</h1>
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