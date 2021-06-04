import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
 
const Header = () => {
    return (
        <div style={{marginBottom: "25px",paddingTop:"10px"}}>
            <div className="ui secondary pointing menu">
                <div className="ui container">
                    <Link className="active item" to="/">
                        Home
                    </Link>
                    <div className="right menu">
                        <GoogleAuth />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;