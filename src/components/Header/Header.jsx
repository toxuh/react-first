import React from "react";

import Menu from "./Menu";

import './Header.css';

const Header = ({name, topMenu}) => {
    return (
        <header>
            <div className='container'>
                <h1>
                    <a href='/'>
                        {name}
                    </a>
                </h1>
                <Menu topMenu={topMenu} />
                <div className='buttons'>
                    <a href='/login'>Login</a>
                    <a href='/registration'>Registration</a>
                </div>
            </div>
        </header>
    )
}

export default Header;