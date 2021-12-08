import React from 'react';

import Header from '../Header/Header';
import Main from "../Main/Main";

const App = () => {
    const topMenu = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        }
    ];

    return (
        <>
            <Header name='Company name' topMenu={topMenu} />
            <Main />
        </>
    )
};

export default App;