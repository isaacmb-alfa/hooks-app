import React from 'react'
import { useCounter } from './../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);


    return (
        <>
            <h1>counter whit Hook: {state}</h1>

            <button onClick={() => increment(2)} className="btn btn-primary mx-3"> + 1 </button>
            <button onClick={reset} className="btn btn-warning mx-3"> Reset </button>
            <button onClick={() => decrement(2)} className="btn btn-success"> - 1 </button>
        </>
    )
}
