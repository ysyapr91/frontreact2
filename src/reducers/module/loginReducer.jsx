const USER_INFO = 'login/USER_INFO';

export const initList = d => ({ type: USER_INFO, payload: d});


const initState = {
    list: []
}

export default function modalReducer(state = initState, action) {
    const param = {...state};

    switch(action.type) {
        case USER_INFO:
            param.list = [];
            return param;


        default:
            return param;
    }
}
