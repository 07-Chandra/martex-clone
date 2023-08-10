import React from "react";
import "./Hero.scss";

function Hero() {
    return (
        <div className="Hero">
            <div className="subscribe">
                <div className="header">
                    <div className="title-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/logo-blue.png"
                            alt="tile"
                        />
                    </div>
                </div>
                <h1 className="title">
                    Achieve success through data-driven decisions
                </h1>
                <p className="para">
                    Get started with Martex for free. It's fast and very easy!
                    No credit card needed
                </p>
                <div className="form">
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter Your Name*"
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter Your Email*"
                    />
                    <button className="btn">Get Started Now</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
