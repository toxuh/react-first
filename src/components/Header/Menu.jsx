import React from "react";

const Menu = ({topMenu}) => {
    return (
        <nav>
            <ul>
                {topMenu.map(({link, name}) => {
                    return (
                        <li key={name}>
                            <a href={link}>{name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Menu;