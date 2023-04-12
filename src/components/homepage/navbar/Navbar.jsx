import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../icons/shopping-cart.png";
import { useSelector } from "react-redux";
import { useViewContext } from "../../../contexts/ViewContext";

export default function Navbar() {
    const { isMobile, showNavbar, setShowNavbar } = useViewContext();
    const cart = useSelector((state) => state.cartReducer.cart);



    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-custom navbar-fixed-top ${!isScrolled && "navbar-transparent"
                }`}
            role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button
                        className="navbar-toggle"
                        type="button"
                        onClick={() => {setShowNavbar((p) => !p);console.log("hi!!!!");}}>
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link to="/">
                        {" "}
                        <div className="navbar-brand">Victoria</div>
                    </Link>
                </div>
                <div
                    className={`collapse navbar-collapse ${showNavbar && "in"
                        } ${!isMobile && "in"}`}
                    id="custom-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/carconfigurator">Build your own</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/Checkout">
                                <img
                                    alt="shopping cart"
                                    className="navbar-shopping-cart"
                                    src={Image}></img>
                                <span className="shopping-count">
                                    {cart.reduce?.((s, i) => s + 1, 0)}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
