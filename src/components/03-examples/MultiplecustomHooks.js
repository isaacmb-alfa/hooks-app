import React from 'react'
import './examples.css'
import { useFetch } from './../../hooks/useFetch';
import { useCounter } from './../../hooks/useCounter';

export const MultiplecustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(data);

    const { author, quote } = !!data && data[0];

    // console.log(author, quote);

    return (
        <div className="container">
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>

                    )
                    :
                    (
                        <blockquote className="blockquote row flex">
                            <p className="mb-0 text-end">{quote} </p>
                            <footer className="blockquote-footer text-end"> {author} </footer>
                        </blockquote>

                    )
            }

            <button className="btn btn-primary mx-2" onClick={increment}>Siguiente Frase </button>
            {
                counter !== 1 ?
                (<button className="btn btn-warning mx-2" onClick={decrement}>Frase Anterior </button>)
                : (<button className="btn btn-secondary disabled" onClick={decrement}>Frase Anterior </button>)
            
             }

        </div>
    )
}
