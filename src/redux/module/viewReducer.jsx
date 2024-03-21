import * as Pages from 'pages/home';

const SET_PAGE = 'view/SET_PAGE';

export const setData = data => ({ type: SET_PAGE, payload: data});

const initState = {
    page: {},
    data: {},
};

export default function dataReducer(state = initState, action) {
    
    switch(action.type) {
        case SET_VIEW:
            let payload = action.payload;
            if(typeof payload == "object") {
                Object.assign(param.data, payload);
            }
            return param;
    
        case SET_PAGE:
            return {
                ...state,
                pageList: [...state.pageList, action.payload],
                page: action.payload
            };

        default:
            return param;
    }

}
