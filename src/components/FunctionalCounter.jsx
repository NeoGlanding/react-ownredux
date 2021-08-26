import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { functionalCounterStateAction } from '../store/functionalCounter';

const FunctionalCounter = () => {
    const state = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>This is Functional Counter - {state}</h1>
            <button onClick={() => dispatch(functionalCounterStateAction.increment())}>Increment this Functional Counter</button>
        </div>
    )
}

export default FunctionalCounter;