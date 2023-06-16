// import React from 'react';
import React, { memo } from 'react';

function App( {content} ){
    return (
        <div>
            <h1>Hello world {content}</h1>
        </div>
    )
}
export default memo(App);
