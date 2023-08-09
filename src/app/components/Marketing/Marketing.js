import Features from "@/app/sub component/Features/Features";
import React from "react";
import "./Marketing.scss";
import { TbBulb } from "react-icons/tb";
import { PiTelevision } from "react-icons/pi";
import { BsBarChartFill, BsTrophy } from "react-icons/bs";
import { SiWebpack } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";

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
                <Features
                    About="Porta semper lacus cursus feugiat primis ultrice ligula risus
                ociis auctor and tempus feugiat impedit felis cursus auctor
                augue mauris blandit ipsum"
                    Name="Market Research"
                    Icon={PiTelevision}
                />
                <Features
                    About="Porta semper lacus cursus feugiat primis ultrice ligula risus
                ociis auctor and tempus feugiat impedit felis cursus auctor
                augue mauris blandit ipsum"
                    Name="User Experience"
                    Icon={TbBulb}
                />

                <Features
                    About="Porta semper lacus cursus feugiat primis ultrice ligula risus
                ociis auctor and tempus feugiat impedit felis cursus auctor
                augue mauris blandit ipsum"
                    Name="Digital Marketing"
                    Icon={BsBarChartFill}
                />

                <Features
                    About="Porta semper lacus cursus feugiat primis ultrice ligula risus
                ociis auctor and tempus feugiat impedit felis cursus auctor
                augue mauris blandit ipsum"
                    Name="Web Development"
                    Icon={SiWebpack}
                />

                <Features
                    About="Porta semper lacus cursus feugiat primis ultrice ligula risus
                ociis auctor and tempus feugiat impedit felis cursus auctor
                augue mauris blandit ipsum"
                    Name="Brand Design Identity"
                    Icon={BsTrophy}
                />

                <Features
                    About="Porta semper lacus cursus feugiat primis ultrice ligula risus
                ociis auctor and tempus feugiat impedit felis cursus auctor
                augue mauris blandit ipsum"
                    Name="SEO & SMM Services"
                    Icon={MdMiscellaneousServices}
                />
            </div>
        </div>
    );
}

export default Marketing;
