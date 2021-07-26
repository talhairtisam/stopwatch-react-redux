import React from 'react';

const Button = ({ buttonTitle, onclick }) =>{
    return(
        <div className='Button'>
            <button
            onClick={() => onclick() }
            >{buttonTitle}</button>
        </div>
    )
}

export default Button;