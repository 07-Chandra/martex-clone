import React from "react";
import "./Strategies.scss";
import Account from "@/app/sub component/Account/Account";
function Strategies() {
    return (
        <div className="strategies">
            <div className="top-part">
                <div className="left-part">
                    <div className="image-wrapper">
                        <img
                            className="img"
                            src="https://dsathemes.com/html/martex_1.1/files/images/img-09.png"
                            alt="girl thinking about strategies"
                        />
                    </div>
                </div>
                <div className="right-part">
                    <h1 className="heading">
                        Right strategies & implementations
                    </h1>
                    <p className="paragraph">
                        Nemo ipsam egestas volute turpis egestas ipsum and purus
                        sapien ultrice an aliquam quaerat ipsum augue turpis
                        sapien cursus congue magna purus quaerat at ligula purus
                        egestas magna cursus undo varius purus magnis sapien
                        quaerat
                    </p>

                    <h2 className="subheading">Get more done in less time</h2>

                    <ul className="list">
                        <li className="paragraph">
                            Sapien quaerat tempor an ipsum laoreet purus and
                            sapien dolor an ultrice ipsum aliquam undo congue
                            cursus dolor
                        </li>
                        <li className="paragraph">
                            Purus suscipit cursus vitae cubilia magnis volute
                            egestas vitae sapien turpis ultrice auctor congue
                            magna placerat
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-part">
                <div className="status">
                    <h2 className="number">89k</h2>
                    <p className="paragraph">
                        Porta justo integer and velna vitae auctor
                    </p>
                </div>
                <div className="status">
                    <h2 className="number">76%</h2>
                    <p className="paragraph">
                        Ligula magna suscipit vitae and rutrum
                    </p>
                </div>
                <div className="status">
                    <h2 className="number">4.93</h2>
                    <p className="paragraph">
                        Sagittis congue augue egestas an egestas
                    </p>
                </div>
            </div>
            <div className="account-part">
                <Account
                    src={
                        "https://dsathemes.com/html/martex_1.1/files/images/f_11.png"
                    }
                    name={"Multiple Accounts"}
                    about={
                        "Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero"
                    }
                />
                <Account
                    src={
                        "https://dsathemes.com/html/martex_1.1/files/images/f_04.png"
                    }
                    name={"Productivity Focused"}
                    about={
                        "Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero"
                    }
                />
            </div>
        </div>
    );
}

export default Strategies;
