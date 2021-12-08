import React, {useState} from 'react';

import './App.css';

const App = () => {
    const [items, setItems] = useState([]);
    const [inputText, setText] = useState('');

    const addItem = () => {
        const item = {
            id: Date.now().toString(),
            date: new Date(),
            text: inputText,
        }

        setItems([...items, item])
    };

    return (
        <div className='App'>
            <h1>To-do list:</h1>
            <div>
                <input type='text' onChange={(e) => setText(e.target.value)} />
                <button onClick={() => addItem()}>Submit</button>
            </div>
            <ul>
                {items.map(({id, date, text}) => {
                    return (
                        <li key={id}>
                            <span>{`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</span>
                            <p>{text}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default App;