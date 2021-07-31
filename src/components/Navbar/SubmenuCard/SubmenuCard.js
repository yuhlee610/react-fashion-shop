import React from 'react'

function SubmenuCard({id, image, title, text}) {
    return (
        <div key={id} className="submenu__card">
            <img src={image} alt="" />
            <div>{title}</div>
            <p>{text}</p>
        </div>
    )
}

export default SubmenuCard
