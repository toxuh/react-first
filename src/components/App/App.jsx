import React from 'react';

import Header from '../Header/Header';

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
        </>
    )
};

export default App;