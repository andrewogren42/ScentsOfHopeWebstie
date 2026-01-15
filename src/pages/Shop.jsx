import React, {useState} from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterBtns from "../components/FilterBtns/FilterBtns";
import "./Shop.css"
import ListingCard from "../components/ListingCard/ListingCard";

function Shop({ candles, 
                loading, 
                addToCart, 
                filter,
                changeFilter}){

    if (loading) return <p>Loading candles...</p>;

    const [sale, setSale] = useState(false);

    const toggleSale = () => setSale(!sale);

    const [search, setSearch] = useState("");

    const changeSearchText = (input) => {setSearch(input)}



    return(
        <div>
            <SearchBar changeSearchText={changeSearchText}/>
            <FilterBtns changeFilter={changeFilter} filter={filter} sale={sale} toggleSale={toggleSale}/>
            <div id="Listings">
                {candles
                    .filter(candle => {
                        const matchesCollection = filter === "all" || candle.collection.toLowerCase() == filter;

                        const matchesSale = !sale || candle.sale == true;

                        const matchesSearch = (search === "") || candle.name.toLowerCase().includes(search.toLowerCase());

                        return matchesCollection && matchesSale && matchesSearch;
                    })
                    .map(candle => (
                        <ListingCard 
                        key={candle.id} 
                        listing={candle}
                        addToCart={addToCart}
                        />
                    ))
                }
            </div>
        </div>

    )
}
export default Shop