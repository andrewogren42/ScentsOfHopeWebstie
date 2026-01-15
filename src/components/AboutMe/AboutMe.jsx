import React from "react";
import "./AboutMe.css"

function AboutMe(){
    return (
        <div id="aboutMeContainer">
            <div id="aboutMeLeft">
                <h2>About Me</h2>
                <p>I am Margaret, and I am an unlikely soul to be in business. I was a teacher before I retired, and even though I always purchased candles for my home, it never dawned on me to actually make them myself.</p>  
                <p>After retiring, I started going on mission trips to Cambodia. It was love at first sight! The beautiful people, their eagerness to learn English, the gorgeous green countryside and the amazing fruit all made me feel like I was in heaven! Then I found out about sex trafficking  and the little five-year-old girls who were at risk of being sold into the industry. I came home from that first trip knowing that I was forever changed. I gathered up the pieces of my broken heart and knew I needed to be a voice for those little girls.  That led to the birth of Creating Hope 4 Cambodia. Making these candles started as just a one time a year fundraising event, but as it turns out:</p>
                <p><em>I LOVE THIS NEW ART FORM!</em></p>
                <p>In the next year I made a whole bunch of candles, then I tweaked a few things, tried some new scents and sold even more. I actually became obsessed. So here I am on the brink of starting a new business, SCENTS OF HOPE. Me, a teacher at heart who knows mostly about kids and learning. Not just kids in Minnesota but kids in Cambodia too. And that is why I choose to give 25% of each candle sale to non-profits that make a difference in kids' lives.</p>
                <p>Along with Creating Hope 4 Cambodia, the other non-profit I chose is Inheritance of Hope. IOH's mission is to come alongside families with young children who are faced with losing a parent due to a terminal illness. I've volunteered at their Legacy Retreats where families from all over the country come together to make memories while they can. Plus, it is NO COST to the families!</p>
                <p>Thank you for taking the time to get to know me and hear my story. I am really excited for what's ahead for SCENTS OF HOPE. Come join me on this crazy ride!</p>
                <p>The steadfast love of the Lord never ceases, His mercies never come to an end. They are new every morning. Great is your faithfulness.</p>
                <p>"The Lord is my portion," says my soul, "therefore I will HOPE in Him."    Lamentations 3:22-24</p>
            </div>
            <div id="aboutMeRight">
                <img id="aboutMePic" src="/Cambodia-Marti.jpeg" alt="Margret Ogren Picture in Cambodia"/>
                <div id="charityLogos">
                    <img id="hope4CambodiaLogo" src="/Hope4Cambodia.jpg" alt="Hope for Cambodia"/>
                    <img id="IOHLogo" src="/IOH.jpeg" alt="IOH logo"/>
                </div>
                <iframe id="Video" title="vimeo-player" src="https://player.vimeo.com/video/482676562?h=7075918615" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowFullScreen width="250px" style={{ border: 'none', background: 'transparent' }}></iframe>
            </div>
        </div>
    )
}

export default AboutMe