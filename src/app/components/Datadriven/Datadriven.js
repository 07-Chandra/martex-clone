import React from "react";
// import "../Solution/Solution.scss";
import './Datadriven.scss'
import { FiChevronRight } from "react-icons/fi";
function Datadriven() {
    return (
        <div className="data-driven">
            <div className="left-part">
                <div className="image-wrapper">
                    <img
                        className="img"
                        src="https://dsathemes.com/html/martex_1.1/files/images/img-14.png"
                        alt="girl thinking image"
                    />
                </div>
            </div>

            <div className="right-part">
                <h2 className="heading">Data-driven digital marketing</h2>

                <ul className="list">
                    <li className="paragraph">
                        Tempor sapien quaerat undo ipsum laoreet purus and
                        sapien dolor ociis ultrice ipsum aliquam undo congue
                        dolor cursus congue varius magnis
                    </li>

                    <li className="paragraph">
                        Cursus purus suscipit vitae cubilia magnis diam volute
                        egestas sapien ultrice auctor
                    </li>
                </ul>
                <div className="get-link-div">
                    <p className="get-link">Marketing Integrations</p>
                    <FiChevronRight className="right-arrow" />
                </div>
            </div>
        </div>
    );
}

export default Datadriven;
