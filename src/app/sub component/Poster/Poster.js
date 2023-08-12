import React from "react";
import "./Poster.scss";

function Poster({ src, color, colorName, name, about, author, date }) {
    return (
        <div className="poster">
            <div className="cover">
                <div className="image-wrapper">
                    <img className="img" src={src} alt="poster" />
                </div>

                <div className="content">
                    <p className={color}>{colorName}</p>
                    <h2 className="subheading">{name}</h2>
                    <p className="paragraph">{about}</p>
                    <div className="date-and-time">
                        <p className="author">{author}</p>
                        <p>|</p>
                        <p className="date">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poster;
