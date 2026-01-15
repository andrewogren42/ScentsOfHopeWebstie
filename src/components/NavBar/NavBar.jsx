import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";


function NavBar({onCartClick, 
                cart, 
                location}) {

    const numberOfItems = cart.reduce((total, item) => total + item.quantity, 0);

    return(
        <nav className="navBar">
            <NavLink to="/#topOfPageContainer" className="navBtn">Home</NavLink>
            <NavLink to="/Shop#searchBarContainer" className="navBtn">Shop</NavLink>
            <NavLink to="/#aboutMeContainer" className="navBtn">About Me</NavLink>
            <NavLink to="/#requestsQuestionsContainer" className="navBtn">Contact</NavLink> 

            {location.pathname !== "/Checkout" && (
                <div id="checkoutCartContainer" className="navBtn" onClick={onCartClick}>
                    <img id="checkoutCartImg" src="/icons8-shopping-cart-30.png" alt="Checkout Cart"/>
                    <span id="checkoutCartCounter">{numberOfItems}</span>
                </div>
            )}
        </nav>
    )
}
export default NavBar;