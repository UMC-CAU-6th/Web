import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrease = () => {
        console.log("+ clicked");
        setCount(value => value + 1);
    }
    const onDecrease = () => {
        console.log("- clicked");
        setCount(value => value - 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    );
};

export default Counter;