import React from "react";
import "./Integrate.scss";

function Integrate() {
    return (
        <div className="integrate">
            <div className="header">
                <h2 className="heading">
                    Easy integrate all your essential tools
                </h2>
                <p className="paragraph">
                    Ligula risus auctor tempus magna feugiat lacinia.
                </p>
            </div>
            <div className="tools">
                <div className="wrapper">
                    <div className="image-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/png_icons/tool-1.png"
                            alt="tool"
                        />
                    </div>
                    <p className="name">Zapier</p>
                    <div className="image-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/png_icons/tool-2.png"
                            alt="tool"
                        />
                    </div>
                    <p className="name">Google Analytics</p>
                    <div className="image-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/png_icons/tool-3.png"
                            alt="tool"
                        />
                    </div>
                    <p className="name">Amplitude</p>
                    <div className="image-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/png_icons/tool-4.png"
                            alt="tool"
                        />
                    </div>
                    <p className="name"> Hubspot</p>
                    <div className="image-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/png_icons/tool-5.png"
                            alt="tool"
                        />
                    </div>
                    <p className="name">MailChimp</p>
                </div>
                <div className="btn-wrapper">
                    <button className="btn">View all integrations</button>
                </div>
            </div>
        </div>
    );
}

export default Integrate;
