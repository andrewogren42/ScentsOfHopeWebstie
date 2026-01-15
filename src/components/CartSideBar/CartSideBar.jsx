import React from "react";
import {Link} from "react-router-dom";
import "./CartSideBar.css";
import Cart from "../Cart/Cart";


function CartSideBar({  toggleCart, 
                        isOpen, 
                        toggleQuantity, 
                        cart, 
                        total,
                    }) {
    const isCartEmpty = cart.length === 0;

    return (
        <div id="cartSideBarContainer">
        
            <div id="cartOverlay" onClick={toggleCart}></div>

            <div id="cartSideBar" className={isOpen? "open" : "closed"}>
                <div className="cartHeader">
                    <h2 id="cartHeaderTitle">Your Cart</h2>
                    <button className="closeCart" onClick={toggleCart}>x</button>
                </div>
                
                <div id="cartItemsContainer">
                    {cart.map(item => (
                    <Cart   key={item.id}
                            item={item}
                            toggleQuantity={toggleQuantity}/>
                    ))}
                    {cart.length == 0 && <h2 id="CartSideBarEmpty">Your Cart is Empty</h2>}
                </div>

                <div className="cartFooter">
                    <h4>Donation Amount: $<span id="cartDonationPrice">{(total * 0.25).toFixed(2)}</span></h4>
                    <h3>Total: $<span id="cartTotalPrice">{(total).toFixed(2)}</span></h3>
                    <Link to={isCartEmpty ? "#" : "/Checkout"}><button className={`checkoutBtn ${isCartEmpty ? "" : "active"}`}>Checkout</button></Link>
                </div>
            </div>
        </div>
    );
}

export default CartSideBar;