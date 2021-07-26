import React from 'react';

const formatTime = (secs) => {
    const min = Math.floor(secs / 60);
    const retMin = min < 10 ? `0${min}` : `${min}`;
    const sec = Math.floor(secs % 60);
    const retSec = sec < 10 ? `0${sec}` : `${sec}`;
    return `${retMin}:${retSec}`;
}

const DisplayTime = ({ count }) => {
    return (
        <div className='displayTime'>
            <h1>{ formatTime(count) }</h1>
        </div>
    );
}

export default DisplayTime;
