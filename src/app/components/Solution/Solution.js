import React from "react";
import './Solution.scss'
function Solution() {
    return (
        <div className="solution">
            <div className="left-part">
                <div className="image-wrapper">
                    <img
                        className="img"
                        src="https://dsathemes.com/html/martex_1.1/files/images/img-10.png"
                        alt="girl thinking image"
                    />
                </div>
            </div>

            <div className="right-part">
                <h2 className="subheading">Solution that grows with you</h2>
                <p className="paragraph">
                    Sodales tempor sapien quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    and ligula cursus purus vitae purus an ipsum suscipit
                </p>
                <h2 className="subheading">Connect your data sources</h2>
                <p className="paragraph">
                    Tempor sapien sodales quaerat ipsum undo congue laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    and ligula cursus purus an ipsum vitae suscipit purus
                </p>

                <ul className="list">
                    <li className="paragraph">
                        Tempor sapien quaerat an ipsum laoreet purus and sapien
                        dolor an ultrice ipsum aliquam undo congue dolor cursus
                    </li>

                    <li className="paragraph">
                        Cursus purus suscipit vitae cubilia magnis volute
                        egestas vitae sapien turpis ultrice auctor congue magna
                        placerat
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Solution;
