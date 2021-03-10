import { useState } from 'react';

export function Counter(){
    let [ counter, setCounter] = useState(0)

    function increment(){
        counter += 1;
        setCounter(counter)
        console.log('Increment')
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}