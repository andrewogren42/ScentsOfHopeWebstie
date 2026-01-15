import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            } else {
                console.log(`Element with id "${id}" not found.`);
            }
        }
    }, [hash]);

    return null;
}

export default ScrollToAnchor;