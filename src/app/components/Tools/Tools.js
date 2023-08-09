import React from "react";
import "./Tools.scss";
import { FiChevronRight } from "react-icons/fi";

function Tools() {
    return (
        <div className="tools">
            <div className="left-part">
                <div className="image-div">
                    <img
                        className="img"
                        src="https://dsathemes.com/html/martex_1.1/files/images/img-02.png"
                        alt="Tech Tools"
                    />
                </div>
            </div>
            <div className="right-part">
                <h1 className="heading">
                    Plug your essential tools in few clicks
                </h1>
                <ul className="list">
                    <li className="paragraph">
                        Cursus purus suscipit vitae cubilia magnis volute
                        egestas vitae sapien turpis sodales magna undo aoreet
                        primis
                    </li>
                    <li className="paragraph">
                        Tempor sapien quaerat an ipsum laoreet purus and sapien
                        dolor an ultrice ipsum aliquam undo congue dolor cursus
                        purus congue and ipsum purus sapien a blandit
                    </li>
                </ul>

                <div className="get-link-div">
                    <p className="get-link">All-in-one platform</p>
                    <FiChevronRight className="right-arrow" />
                </div>
            </div>
        </div>
    );
}

export default Tools;
