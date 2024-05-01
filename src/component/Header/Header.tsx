import React from 'react';
import "./Header.css";
import { DiJavascript } from "react-icons/di";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-flex">
                    <div className="brand">
                        <DiJavascript id='js-icon'/><h1><span>G</span>ita</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header