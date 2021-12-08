import React from "react";

const Main = ({showModal}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={showModal}>Show</button>
        </div>
    )
}

export default Main;