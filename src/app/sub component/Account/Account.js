import React from 'react'
import './Account.scss'


function Account({ src, name, about, position }) {
    return (
        <div className= {`account ${position}`} >
            <div className="image-wrapper">
                <img className="img" src={src} alt={name} />
            </div>
            <h2 className="subheading">{name}</h2>
            <p className="paragraph">{about}</p>
        </div>
    );
}

export default Account