import React from "react";
import {Landing} from "./landingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from "./homePage";
import { About } from "./about";
import { Contact } from "./contact";

export function PageRoutes() {
    return (
        <Router>
            <Routes>
                {/* <Route 
                exact 
                name="landing page"
                path="/" 
                element={<LandingPage/>} 
                />
                <Route
                    exact
                    name="home"
                    path="/home"
                    element={<HomePage />}
                /> */}
                <Route path="/" element={<Landing />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" />
                <Route path="/cart" />
                <Route path="/boring-stuff" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default PageRoutes