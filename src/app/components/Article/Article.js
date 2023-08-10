import Poster from "@/app/sub component/Poster/Poster";
import React from "react";
import "./Article.scss";

function Article() {
    return (
        <div className="article">
            <div className="header">
                <h2 className="heading">Articles & Resources</h2>
                <div className="paragraph">
                    Ligula risus auctor tempus magna feugiat lacinia.
                </div>
            </div>

            <div className="all-poster">
                <Poster
                    src="https://dsathemes.com/html/martex_1.1/files/images/blog/post-8-img.jpg"
                    color="red"
                    colorName="product news"
                    name="Aliqum mullam porta blandit: tempor sapien and gravida"
                    about="Egestas luctus vitae augue and ipsum ultrice quisque in cursus lacus feugiat congue diam ultrice laoreet sagittis"
                    author="By Helen J."
                    date="Apr 28, 2023"
                />
                <Poster
                    src="https://dsathemes.com/html/martex_1.1/files/images/blog/post-2-img.jpg"
                    color="green"
                    colorName="COMMUNITY"
                    name="Porttitor cursus fusce egestas CEO cursus at magna sapien suscipit and egestas ipsum"
                    about="Aliqum mullam ipsum vitae and blandit vitae tempor sapien and donec lipsum"
                    author="By Martex Team"
                    date="Apr 14, 2023"
                />
                <Poster
                    src="https://dsathemes.com/html/martex_1.1/files/images/blog/post-5-img.jpg"
                    color="purple"
                    colorName="FREELANCER TIPS"
                    name="Cubilia laoreet augue egestas and Martex magna impedit"
                    about="Luctus vitae egestas augue and ipsum ultrice quisque in cursus lacus feugiat egets congue ultrice sagittis laoreet"
                    author="By Miranda Green"
                    date="Mar 27, 2023"
                />
            </div>

            <div className="subscribe">
                <h2 className="heading">
                    Stay up to date with our news, ideas and updates{" "}
                </h2>
                <form>
                    <input
                        placeholder="Enter Your Email Address"
                        className="input"
                        type="text"
                    />
                    <input className="input submit" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Article;
