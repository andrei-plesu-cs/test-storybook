import React from 'react';
import DisplayBoxWrapper from './DisplayBoxWrapper';

const DisplayBox = ({
    children
}) => {

    return (
        <DisplayBoxWrapper>
            {children}
        </DisplayBoxWrapper>
    )

}

export default DisplayBox;