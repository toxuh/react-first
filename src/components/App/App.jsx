import React from 'react';

import Header from '../Header/Header';

const App = () => {
    const array = ['Mir trud may', 'Mir her may', 'Mir huy may'];

    return (
        <>
            {array.map((text) => {
                return <Header title={text} />
            })}
        </>
    )
};

export default App;