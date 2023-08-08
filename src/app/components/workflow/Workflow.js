import Link from "next/link";
import React from "react";
import "./Workflow.scss";
import { BsCheckLg } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

function Workflow() {
    return (
        <div className="workflow container">
            <div className="left-part">
                <div className="image-div">
                    <img
                        className="img"
                        src="https://dsathemes.com/html/martex_1.1/files/images/img-05.png"
                        alt="workflow image"
                    />
                </div>
            </div>
            <div className="right-part">
                <p className="title">Achieve more with better workflows</p>
                <p className="about para">
                    Sodales tempor sapien quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    and ligula cursus purus vitae purus an ipsum suscipit
                </p>
                <p className="list-head">Get more done in less time</p>
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

                <div className="get-link-div">
                    <p className="get-link">All-in-one platform</p>
                    <FiChevronRight className="right-arrow" />
                </div>
            </div>
        </div>
    );
}

export default Workflow;
