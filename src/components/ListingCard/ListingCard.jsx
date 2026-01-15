import React, {useEffect, useState} from "react";
import "./ListingCard.css";
import { getImageUrl } from "../../firebase";

function ListingCard({listing, addToCart}){

    const [isActive, setIsActive] = useState(false);

    const [imgSrc, setImgSrc] = useState("placeholder.jpg");

    useEffect (() => {
        const fetchImage = async () => {
            const url = await getImageUrl(listing.id);
            if (url) setImgSrc(url);
        }; fetchImage();
    }, [listing.img]);

    const toggleDescription = () => setIsActive(!isActive);
    return(
        <div className="ListingCard" style={{   backgroundImage: `url(${imgSrc})`,
                                                backgroundSize : "cover",
                                                backgroundPosition : "center"
         }}>
            <div className="ListingCardTags">
                {listing.collection && <span    className="ListingCardCollectionTag" 
                                                style={ listing.sale ? {borderRadius:"0px"} : {borderRadius:"0px 0px 20px 0px"}}
                                            >
                                                {listing.collection}
                                            </span>
                }
                {listing.sale && <span className="ListingCardOnSaleTag">Sale</span>}
            </div>
            <div className="ListingCardDetails" id="candleDetails">
                
                <h4 className="ListingCardName"> {listing.name} </h4>
                <p className="ListingCardPrice">{listing.price.toFixed(2)}</p>
                <button className="ListingCardInfoBtn"
                        onClick={() => toggleDescription()}
                >
                    Scent Info
                </button>
                <button 
                    className="ListingCardBuyBtn"
                    onClick={() => addToCart(listing)}
                >
                    Add to Cart
                </button>
            </div>

            <div className={`ListingSidePanel ${isActive ? "active" : ""}`} >
                <button className="ListingSidePanelCloseBtn" onClick={() => toggleDescription()}>x</button>
                <h4>Scent Profile</h4>
                <p>{listing.desc}</p>
            </div>
        </div>
    )
}

export default ListingCard;