import React, {useState} from 'react';
import classes from './BasketInput.module.scss';

const BasketInput = () => {

    const [count, setCount] = useState(1)

    const incrementCount = () => {

        setCount(count + 1)

    }

    const decrementCount = () => {
        setCount(count - 1)
    }
    return (

            <div className={classes.input}>
                <span onClick={decrementCount} className={classes.prev}>  </span>
                <span onClick={incrementCount} className={classes.next}> </span>

                <div >
                    <span>{count}</span>
                </div>
            </div>

    );
};

export default BasketInput;