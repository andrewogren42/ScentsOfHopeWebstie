import React from "react";
import FrontPageContainer from "../components/FrontPageContainer/FrontPageContainer.jsx";
import CandleCollections from "../components/CandleCollections/CandleCollections.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import RequestsAndQuestions from "../components/RequestsAndQuestions/RequestsAndQuestions.jsx";

function Home({changeFilter}){
    return(
        <div id="HomeBody">
            <FrontPageContainer />
            <CandleCollections changeFilter={changeFilter}/>
            <AboutMe />
            <RequestsAndQuestions />
        </div>
    )
}

export default Home