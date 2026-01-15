import React from "react";
import "./FrontPageContainer.css";

function FrontPageContainer(){
    return(
        <div id="topOfPageContainer">
            <img id="frontPageLogo" className="frontPage" src="/IMG_8994.jpg" alt="Scents of Hope Logo"/>
            <h2 className="frontPage">Scents of Hope</h2>
            <h3 className="frontPage">Made with purpose for a purpose</h3>
            <h4 className="frontPage">25% of sales are donated</h4>
        </div>  
    )
}

export default FrontPageContainer;