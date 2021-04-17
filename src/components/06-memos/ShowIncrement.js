import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('ME VOLVÍ A GENERAR :(');

    return (
        <button
            className="btn btn-primary mx-2"
            onClick={() => { increment( 5 ) }}
        >
            Incrementar
        </button>
    )
})
