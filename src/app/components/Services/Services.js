import React from "react";
import "./Services.scss";
import Product from "../Product/Product";
function Services() {
    return (
        <div className="services container">
            <div className="service-title">
                <p className="heading">Digital marketing that drives results for your business</p>
                <p className="para">Ligula risus auctor tempus magna feugiat lacinia.</p>
            </div>
            <div className="all-services">
                <Product
                    title={"Engagement Analysis"}
                    about={
                        "Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus"
                    }
                    src={
                        "https://dsathemes.com/html/martex_1.1/files/images/f_01.png"
                    }
                />
                <Product
                    title={"Engagement Analysis"}
                    about={
                        "Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus"
                    }
                    src={
                        "https://dsathemes.com/html/martex_1.1/files/images/f_05.png"
                    }
                />
                <Product
                    title={"Engagement Analysis"}
                    about={
                        "Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus"
                    }
                    src={
                        "https://dsathemes.com/html/martex_1.1/files/images/f_02.png"
                    }
                />
            </div>
        </div>
    );
}

export default Services;
