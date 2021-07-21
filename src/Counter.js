import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

const Counter = ({ name }) => {
    const [lCount, setlCount] = useState(0);

    const dispatch = useDispatch();

    const makeIncrement = () => {
        dispatch(increment());
        setlCount(lCount + 1);
    };

    const makeDecrement = () => {
        dispatch(decrement());
        setlCount(lCount - 1);
    };

    return (
        <div className='localCount'>
            <h4>
                Local counter of {name} : {lCount}{' '}
            </h4>
            <button onClick={makeIncrement}>Increment</button>
            <button onClick={makeDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;
