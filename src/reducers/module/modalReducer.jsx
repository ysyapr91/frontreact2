const INIT_LIST = 'modal/INIT_LIST';
const PUSH_LIST = 'modal/PUSH_LIST';

export const initList = d => ({ type: INIT_LIST, payload: d});
export const pushList = d => ({ type: PUSH_LIST, payload: d});


const initState = {
    list: [],
    count: 0
}

export default function modalReducer(state = initState, action) {

    switch(action.type) {
        case INIT_LIST:
            return {
                list: [],
                count: 0
            };

        case PUSH_LIST:
            return {
                ...state,
                list: [...state.list, action.payload],
                count: state.count++
            };

        default:
            return state;
    }
}
