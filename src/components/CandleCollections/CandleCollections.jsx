import React from "react";
import { NavLink } from "react-router-dom";
import "./CandleCollections.css"

function CandleCollections({changeFilter, location}){
    return(
        <div id="candleCollectionsContainer">
            <div id="candleCollectionsFavorites" className="candleCollection" >
                <h2 className="headerBar">Favorites</h2>
                <NavLink to="/Shop#searchBarContainer" ><button className="collectionBtn" onClick={() => changeFilter("favorites")}>Shop Collection</button></NavLink>
            </div>
            <div id="candleCollectionsHomeCollection" className="candleCollection">
                <h2 className="headerBar">Home Collection</h2>
                <NavLink to="/Shop#searchBarContainer"><button className="collectionBtn" onClick={() => changeFilter("home collection")}>Shop Collection</button></NavLink>
            </div>
            <div id="candleCollectionsSeasonal" className="candleCollection">
                <h2 className="headerBar">Seasonal</h2>
                <NavLink to="/Shop#searchBarContainer"><button className="collectionBtn" onClick={() => changeFilter("seasonal")}>Shop Collection</button></NavLink>
            </div>
        </div>
    )
}

export default CandleCollections