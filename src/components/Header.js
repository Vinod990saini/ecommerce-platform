// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItemsCount = useSelector((state) =>
        state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
    );

    return ( <
            nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
            <
            div className = "container" >
            <
            Link className = "navbar-brand"
            to = "/" >
            E - Shop <
            /Link> {
            /* <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button> */
        } <
        div className = "collapse navbar-collapse"
    id = "navbarNav" >
        <
        ul className = "navbar-nav ms-auto" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
    to = "/" >
        Products <
        /Link> < /
    li > <
        li className = "nav-item" >
        <
        Link className = "nav-link"
    to = "/cart" >
        Cart({ cartItemsCount }) <
        /Link> < /
    li >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
    to = "/about" > About < /Link>  < /
    li > <
        li className = "nav-item" >
        <
        Link className = "nav-link"
    to = "/contact" > Contact < /Link>  < /
    li > < /
    ul > < /
    div > <
        /div> < /
    nav >
);
};

export default Header;