import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function TestReduxData() {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const onData = (e) => {

    }
    

    return (
        <>
            <br/><br/><br/>
            <input type="text" name="test1" onChange={onData}></input>
            <br/>
            <input type="text" name="test2" onChange={onData}></input>
        </>
    );
}

export default TestReduxData;