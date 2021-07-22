import React from 'react'
import './Overlay.css'

function Overlay({show}) {
    return (
        <div className={`overlay ${show ? 'active' : null}`}></div>
    )
}

export default Overlay
