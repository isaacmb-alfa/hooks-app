import React, { useState }from 'react';
import { MultiplecustomHooks } from './../03-examples/MultiplecustomHooks';

import '../03-examples/examples.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            {show && < MultiplecustomHooks/>}

            <button className="btn btn-primary mt-5" onClick={() => {
                setShow(!show);
            } }> Show/hide </button>
        </div>
    )
}
