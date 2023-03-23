import React from "react";
import ReactDOM from "react-dom";
import copyright from "../Images/ezgif.com-webp-to-png-removebg-preview.png";

function Footer () {
    const moonLanding = new Date();
    return (<footer>
        {/* <img src={copyright} alt="copyright" width="30px" height="20px"/> */}
        Copyright {moonLanding.getFullYear()}
    </footer>);
}

export default Footer