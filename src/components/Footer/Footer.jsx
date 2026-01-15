import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return(
        <footer className="footer">
            <div id="keepInTouch" className="footerSection">
            <h3 className="headerBar">KEEP IN TOUCH</h3>
            <p>Phone: 507-358-1878</p>
            <p>Email: <a href="mailto:scentsofhope18@gmail.com">scentsofhope18@gmail.com</a> </p>
            <a href="https://www.instagram.com/hopescentsof/"><img id="instagramLogo" src="/icons8-instagram-50.png" alt="Instagram Logo" /></a>
            </div>
            <div id="nonProfitLinks" className="footerSection">
            <h3 className="headerBar">NON PROFIT LINKS</h3>
            <p><a href="https://www.cccrochester.org/cambodia">Creating Hope 4 Cambodia</a></p>
            <p><a href="https://inheritanceofhope.org">Inheritance of Hope</a></p>
            </div>
            <div id="help" className="footerSection">
            <h3 className="headerBar">HELP</h3>
            <Link to="/ShippingAndReturns"><p>Shipping & Returns</p></Link>
            <Link to="/PrivacyPolicy"><p>Privacy Policy</p></Link> 
            <Link to="/FAQ"><p>FAQ</p></Link> 
            </div>
        </footer>
    )
}
export default Footer;