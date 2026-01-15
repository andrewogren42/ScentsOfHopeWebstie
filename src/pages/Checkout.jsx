import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"
import Cart from "../components/Cart/Cart";
import Paypal from "../components/paypal/paypal";

function Checkout({total, cart, toggleQuantity, setCart}) {

    const navigate = useNavigate();

    useEffect(() => {
        if (cart.length == 0) {
            alert("Your cart is empty! Returning to the home page")
            navigate("/");
        }
    }, [cart.length, navigate]);

    const [shipping, setShipping] = useState(true);
    const shippingCost = shipping ? 10.00 : 0;

    const toggleShipping = (deliveryOption) => {setShipping(deliveryOption)}

    const totalDonation = total * 0.25;
    const totalTax = total * 0.0813;
    const totalCost = Number((total + totalTax + shippingCost).toFixed(2));

    return(
    <div id="checkoutContainer">
        <div className="checkoutList">
            <h2 id="checkoutMyCart" className="headerBar">Your Cart</h2>
            <div id="checkoutItemsContainer">
                {cart.map(item => (
                <Cart   key={item.id}
                        item={item}
                        toggleQuantity={toggleQuantity}/>
                ))}
                {cart.length == 0 && <p>Your Cart is Empty</p>}
            </div>
        </div>
        <div className="checkoutSummary">
            <h2 className="headerBar" id="orderSummary">Order Summary</h2>
            <h4>Donation Amount: ${(totalDonation).toFixed(2)}</h4>
            <h4>Subtotal: ${(total).toFixed(2)}</h4>
            <h4 id="deliveryTotal">{`${shipping ? "Shipping: $10" : "Pickup: Free!"}`}</h4>
            <p id="deliveryDetails">{`${shipping ? "5-7 Business Days" : "Arrange Pickup in Rochester, MN: Contact at scentsofhope18@gmail.com"}`}</p>

            <div className="deliveryToggle" id="deliveryToggle">
                <button id="shippingBtn" 
                        className={`deliveryBtn ${shipping ? "active" : ""}`} 
                        onClick={() => toggleShipping(true)}
                    >
                        Standard Shipping: $10
                    </button>
                <button id="pickupBtn" 
                        className={`deliveryBtn ${!shipping ? "active" : ""}`} 
                        onClick={() => toggleShipping(false)}
                    >
                        Arrange Rochester Pickup: Free
                    </button>
            </div>

            <h4>Sales Tax: ${(totalTax).toFixed(2)}</h4>
            <h2>Total: ${(totalCost).toFixed(2)}</h2>
            <Paypal totalCost={totalCost} cart={cart} setCart={setCart}/>
        </div>
    </div>
    )
}

export default Checkout