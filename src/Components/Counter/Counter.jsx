import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setIncrement, setDecrement } from '../../store/slices/counter';

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const onIncremenrt = () => dispatch(setIncrement());
    const onDecremenrt = () => dispatch(setDecrement());

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncremenrt}>INC</button>
            <button onClick={onDecremenrt}>DEC</button>
        </div>
    )
}

export default Counter