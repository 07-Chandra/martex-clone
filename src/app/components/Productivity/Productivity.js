import React from "react";
import "../Solution/Solution.scss";
import './Productivity.scss'
import { BsCheckLg } from "react-icons/bs";
function Productivity() {
    return (
        <div className="solution">
            <div className="left-part">
                <div className="image-wrapper">
                    <img
                        className="img"
                        src="https://dsathemes.com/html/martex_1.1/files/images/img-07.png"
                        alt="girl thinking image"
                    />
                </div>
            </div>

            <div className="right-part">
                <h2 className="heading">
                    Simplify your work, amplify productivity
                </h2>
                <p className="paragraph">
                    Sodales tempor sapien quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    and ligula cursus purus vitae purus an ipsum suscipit
                </p>
                <h2 className="subheading">The smarter way to work</h2>
                <div className="features">
                    <div className="blue-line">
                        <BsCheckLg className="icon" />
                        <p className="para">
                            Magna dolor luctus at egestas sapien
                        </p>
                    </div>
                    <div className="blue-line">
                        <BsCheckLg className="icon" />
                        <p className="para">
                            Cursus purus suscipit vitae cubilia magnis volute.
                        </p>
                    </div>
                    <div className="blue-line">
                        <BsCheckLg className="icon" />
                        <p className="para">
                            Volute turpis dolores and sagittis congue
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productivity;
