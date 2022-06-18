import React from "react";
import Nav from "./Nav"
import MySection from "./MainSection";
import Footer from "./Footer";

function WidokGlowny () {
    return (
        <div id="widok-glowny">
            <Nav></Nav>
            <MySection></MySection>
            <Footer></Footer>
        </div>
    )
}

export default WidokGlowny