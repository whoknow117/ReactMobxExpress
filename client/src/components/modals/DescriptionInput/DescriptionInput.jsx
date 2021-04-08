import React, {useState} from 'react';

const DescriptionInput = ({changeDescription, clear}) => {






    const [value, setValue] = useState("")

    const changeCallback = () => {
        changeDescription(value)
         setValue("")

    }
    return (
        <div>
                    <input value={value} onBlur={changeCallback} onChange={(e) =>setValue(e.target.value)} type="text"/>

        </div>
    );
};

export default DescriptionInput;