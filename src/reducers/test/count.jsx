const GET_NUMBER = 'count/GET_NUMBER';
const INCREASE = 'count/INCREASE';
const DECREASE = 'count/DECREASE';

export const getNumber = data => ({ type: GET_NUMBER, payload: data});
export const increase = i => ({ type: INCREASE, payload: i});
export const decrease = i => ({ type: DECREASE, payload: i});

const initState = {
    number: 0
};

export default function testCount(state = initState, action) {
    const s = {...state};

    switch(action.type){
        case GET_NUMBER:
            return s;

        case INCREASE:
            s.number++;
            return s;

        case DECREASE:
            s.number--;
            return s;

        default:
            return s;
    }

}