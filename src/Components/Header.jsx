import React from "react";
import ReactDOM from "react-dom";
import logo from "../Images/logo.png";
function Header() {
    return (<div>
            <div className="header">
            <img src={logo} alt="logo" width="110px" height="70px"/>
            <h1>Keeper App</h1>
        </div>
    </div>);
}

export default Header;