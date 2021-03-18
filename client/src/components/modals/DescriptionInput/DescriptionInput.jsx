import React, {useState} from 'react';

const DescriptionInput = ({changeDescription}) => {






    const [value, setValue] = useState("")

    const changeCallback = () => {
        changeDescription(value)


    }
    return (
        <div>
            <input value={value} onBlur={changeCallback} onChange={(e) =>setValue(e.target.value)} type="text"/>

        </div>
    );
};

export default DescriptionInput;