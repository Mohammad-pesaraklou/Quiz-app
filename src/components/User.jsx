import React, { useRef } from 'react';
// styles
import '../App.css'
const User = ({setUser}) => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUser(inputRef.current.value);
    };

    return (
        <div className="start">
            <input
                className="startInput"
                placeholder="enter your name"
                ref={inputRef}
            />
            <button className="startButton" onClick={handleClick}>
                Start
            </button>
        </div>
    );
};

export default User;