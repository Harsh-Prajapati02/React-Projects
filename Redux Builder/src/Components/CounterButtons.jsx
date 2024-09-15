import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../Redux/Counter/Action'

const CounterButtons = () => {

    const {counter} = useSelector((store) => store.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className='counter-btns'>
                <button className='me-4'
                disabled={counter == 0}
                 onClick={ () => dispatch(decrementCount()) }>REDUCE</button>
                <button onClick={ () => dispatch(incrementCount()) }>ADD</button>
            </div>
        </>
    )
}

export default CounterButtons
