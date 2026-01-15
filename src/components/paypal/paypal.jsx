import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Paypal({cart, totalCost, setCart}) {

    async function saveOrderToFirebase(orderInfo) {
    try {
        await addDoc(collection(db, "orders"), {
            ...orderInfo,
            timestamp: serverTimestamp()
        });
    } catch (e) {
        throw e;
    }
    }

    const navigate = useNavigate();

    const clearCart = () => setCart([])

    useEffect(() => {
        if (window.paypal) {
            renderPayPalButton();
        } else {
            const interval = setInterval(() => {
                if (window.paypal) {
                    renderPayPalButton();
                    clearInterval(interval);
                } else {
                }
            }, 500);
            return () => {
                clearInterval(interval);
            };
        }
    }, [totalCost]);

    function renderPayPalButton() {
        const container = document.getElementById('paypal-button-container');
        if (!container) return;
        
        container.innerHTML = "";
        
        paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: totalCost.toFixed(2) }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(async (details) => {
                    const shipping = details.purchase_units?.[0]?.shipping || {};
                    const addr = shipping.address || details.payer?.address || {};

                    const orderInfo = {
                        orderID: details.id,
                        name: shipping.name?.full_name || "Customer",
                        email: details.payer.email_address,
                        address: {
                            street: addr.address_line_1 || "No Street Provided",
                            city: addr.admin_area_2 || "N/A",
                            state: addr.admin_area_1 || "N/A",
                            zip: addr.postal_code || "N/A",
                            country: addr.country_code || "US"
                        },
                        websiteTotal: Number(totalCost.toFixed(2)),
                        items: cart,
                        timestamp: new Date()
                    };

                    await saveOrderToFirebase(orderInfo);
                    clearCart();
                    alert('Order complete! Thank you ' + details.payer.name.given_name + ' for your order');
                    navigate('/'); 
                });
            }
        }).render('#paypal-button-container');
    }
    return(
        <div id="paypal-button-container"></div>
    );
}

export default Paypal