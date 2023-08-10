import React from "react";
import "./Result.scss";
function Result() {
    return (
        <div className="result container">
            <div className="cover">
                <div className="left-part">
                    <div className="image-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/img-06.png"
                            alt="man thinking about result"
                        />
                    </div>
                </div>
                <div className="right-part">
                    <p className="title">Smart solutions, real-time results</p>
                    <p className="para">
                        Sodales tempor sapien quaerat congue eget ipsum laoreet
                        turpis neque auctor vitae eros dolor luctus placerat
                        magna ligula cursus and purus pretium Cursus purus
                        suscipit vita
                    </p>
                    <ul className="ul-div">
                        <li className="para li">
                            Cursus purus suscipit vitae cubilia magnis volute
                            egestas vitae sapien turpis sodales magna
                        </li>
                        <li className="para li">
                            Tempor sapien quaerat an ipsum laoreet purus and
                            sapien dolor an ultrice ipsum aliquam congue
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Result;
