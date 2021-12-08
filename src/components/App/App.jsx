import React, {useState} from 'react';

import Header from '../Header/Header';
import Main from "../Main/Main";
import Modal from "../Modal/Modal2";

const App = () => {
    const [modal, setModal] = useState(false)

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

    const showModal = () => {
        setModal(true);
    }

    const hideModal = () => {
        setModal(false)
    }

    return (
        <>
            <Header name='Company name' topMenu={topMenu} />
            <Main showModal={showModal} />
            {modal && <Modal hideModal={hideModal} />}
        </>
    )
};

export default App;