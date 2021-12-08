import React, {useState} from "react";

const Main = () => {
    const [text, setText] = useState('')

    return (
        <div style={{textAlign: 'center'}}>
            <p>{text}</p>
            <button onClick={() => setText(text + '1')}>Show</button>
        </div>
    )
}

export default Main;