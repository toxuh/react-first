import React from "react";

const Header = (props) => {
    return (
        <>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </>
    )
}

export default Header;