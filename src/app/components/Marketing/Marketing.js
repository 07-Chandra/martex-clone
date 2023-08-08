import Features from "@/app/sub component/Features/Features";
import React from "react";
import './Marketing.scss'

function Marketing() {
    return (
        <div className="marketing">
            <div className="market-head">
                <p className="heading">
                    Digital marketing that drives results for your business
                </p>
                <p className="subheading">
                    Ligula risus auctor tempus magna feugiat lacinia.
                </p>
            </div>
            <div className="features-course">
                <Features/>
                <Features/>
                <Features/>
                <Features/>
                <Features/>
                <Features/>
            </div>
        </div>
    );
}

export default Marketing;
