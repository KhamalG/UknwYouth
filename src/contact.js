import React from 'react';
import { ReactDOM } from 'react';
import { 
    Link, 
    BrowserRouter as Router,
    Routes, 
    Route } from "react-router-dom";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    postion: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export function ContactModal({open, children, onClose}) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </>
    )
}