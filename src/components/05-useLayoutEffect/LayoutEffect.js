import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css';
import { useFetch } from './../../hooks/useFetch';
import { useCounter } from './../../hooks/useCounter';

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
            setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    // console.log(author, quote);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />


            <blockquote className="blockquote text-right">
                <p className="mb-0" ref={pTag}> {quote} </p>
            </blockquote>

            <pre>
            {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button className="btn btn-primary mx-2" onClick={increment}>Siguiente Frase </button>
            {
                counter !== 1 ?
                    (<button className="btn btn-warning mx-2" onClick={decrement}>Frase Anterior </button>)
                    : (<button className="btn btn-secondary disabled" onClick={decrement}>Frase Anterior </button>)

            }

        </div>
    )
}
