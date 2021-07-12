import React from "react";
import { Link } from "react-router-dom";

import "../Header/Header.css";

const Header = () => {
    return (
        <header className="header ">
            <div className="header__wrap">
                <div className="header__container container">
                    <Link
                        to="/"
                        className="headder__logo"
                        style={{
                            backgroundImage: `url("/img/logo.svg")`,
                        }}
                    ></Link>
                    <nav className="header__nav">
                        <Link className="header__link" to="/">
                            Coins
                        </Link>
                        <Link className="header__link" to="/converter">
                            Converter
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
