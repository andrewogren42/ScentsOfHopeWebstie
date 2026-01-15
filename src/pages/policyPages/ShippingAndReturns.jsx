import React from "react";
import "./policyPages.css";

function ShippingAndReturns(){
    return(
        <div className="policyPageText">
            <h3 className="headerBar">SHIPPING POLICY</h3>
            <div className="policyPageContainers">
            <p>I use USPS to ship my candles. They are packaged with care and plenty of padding.  If you live within a 20 mile radius of Rochester, MN I would be happy to arrange a meet up or drop off. Please use the contact me section or my email to arrange that. </p>
            <br/>
            </div>
            <div className="policyPageContainers">
            <h3 className="headerBar">RETURN POLICY</h3>
            <p>I have great faith in our shipping carriers that they will deliver my candles with as much love and care that I put into making them, but we all know things happen. If for any reason your candle was damaged, please email me and I will provide a replacement. I unfortunately cannot take returns on candles that have been lit.</p>
            <br/>
            </div>
            <div className="policyPageContainers">
            <h3 className="headerBar">PAYMENT METHOD</h3>
            <p>I am able to take credit cards and PayPal on the website and pre-paid or CASH ONLY for drop offs or deliveries.</p>
            <br/>
            </div>
        </div>
    )
}

export default ShippingAndReturns;