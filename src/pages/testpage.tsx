import React, { useEffect, useState } from "react";

export const TestPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // @ts-ignore
        setCount(JSON.parse(window.localStorage.getItem('count')));
    }, []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.localStorage.setItem('count', String(count));
    }, [count]);

    const increaseCount = () => {
        return setCount(count + 1);
    }
    const decreaseCount = () => {
        return setCount(count - 1)
    }

    console.log("count: " + count)
    return (
        <div className="App">
            <h1> Count {count} </h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    );
}
