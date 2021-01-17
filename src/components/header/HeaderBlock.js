import React, { useState } from "react";

export const Header = () => {

    const [inputData, setInputData] = useState('');

    const onInputType = ({target: {value}}) => {
        setInputData(value);
        console.log(value)
    }


    return (
        <div>
            <label>Search video</label>
            <input onInput={onInputType} type={'text'}/>
            <button>Submit</button>
        </div>
    )
}