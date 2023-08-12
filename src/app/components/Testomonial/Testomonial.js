import React from "react";
import "./Testomonial.scss";
import User from "../../sub component/User/User";
function Testomonial() {
    return (
        <div className="testomonial">
            <div className="header">
                <h1 className="heading">Our Happy Customers</h1>
                <p className="paragraph">
                    Ligula risus auctor tempus magna feugiat lacinia.
                </p>
            </div>

            <div className="customers">
                <User
                    src="https://dsathemes.com/html/martex_1.1/files/images/review-author-2.jpg"
                    name="Joel Peterson"
                    userName="Graphic Designer"
                    about="At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue magna suscipit lectus gestas "
                />

                <div className="grid1">
                    <User
                        src="https://dsathemes.com/html/martex_1.1/files/images/review-author-7.jpg"
                        userName="Web Developer"
                        name="Jennifer Barnes"
                        about="An augue cubilia undo laoreet magna suscipit egestas ipsum lectus purus ipsum and primis augue an ultrice ligula egestas suscipit a lectus gestas auctor tempus feugiat impedit"
                    />
                </div>

                <div className="grid2">
                    <User
                        src="https://dsathemes.com/html/martex_1.1/files/images/review-author-1.jpg"
                        userName="Android Developer"
                        name="Marisol19"
                        about="At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue magna suscipit lectus gestas "
                    />
                </div>
            </div>
        </div>
    );
}

export default Testomonial;
