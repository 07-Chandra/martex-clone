import React from "react";
import './Success.scss'
import Course from "../../sub component/Course/Course";
import { FiLayers } from "react-icons/fi";
import { TbBusinessplan } from "react-icons/tb";
import { BsPersonVideo, BsMouse2Fill } from "react-icons/bs";
function Success() {
    return (
        <div className="success">
            <div className="left-part">
                <h1 className="heading">Automate your way to success</h1>
                <p className="paragraph">
                    Sodales tempor sapien quaerat ipsum and congue undo laoreet
                    turpis neque auctor turpis vitae dolor luctus placerat magna
                    ligula and cursus vitae
                </p>

                <ul className="list">
                    <li className="paragraph">
                        Tempor sapien quaerat undo ipsum laoreet diam purus
                        sapien a dolor ociis ultrice ipsum aliquam congue a
                        dolor cursus congue varius magnis
                    </li>
                    <li className="paragraph">
                        Cursus purus suscipit vitae cubilia magnis diam volute
                        egestas sapien ultrice auctor
                    </li>
                </ul>
            </div>
            <div className="right-part">
                <div className="courses">
                    <Course
                        Name="Content Marketing"
                        About={
                            "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor"
                        }
                        Icon={FiLayers}
                    />
                    <Course
                        Name="Video Marketing"
                        About={
                            "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor"
                        }
                        Icon={BsPersonVideo}
                    />
                    <Course
                        Name="Pay Per Click (PPC)"
                        About={
                            "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor"
                        }
                        Icon={BsMouse2Fill}
                    />
                    <Course
                        Name="Business Analytics"
                        About={
                            "Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor"
                        }
                        Icon={TbBusinessplan}
                    />
                </div>
            </div>
        </div>
    );
}

export default Success;
