import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

const SET_PAGE = 'content/SET_PAGE';
const SET_TAB_IDX = 'content/SET_TAB_IDX';

export const setPage = d => ({ type: SET_PAGE, payload: d});
export const setTabIdx = d => ({ type: SET_TAB_IDX, payload: d});

const initState = {
    page: null,
    pageList: [],
    tabIdx: 0, /** header tab 초기값 */
    tabList: [
        {page: "TEST", component: <Tests.Test />},
        {page: "HOME", component: <Pages.Home />},
        {page: "POPUP", component: <Tests.TestPopup />},
        {page: "MODAL1", component: <Tests.TestModal1 />},
        {page: "REQUEST", component: <Tests.TestRequest />},
        {page: "COUNT", component: <Tests.TestCount />},
    ]
};

export default function contentReducer(state = initState, action) {
    
    switch(action.type) {
        case SET_PAGE:
            return {
                ...state,
                pageList: [...state.pageList, action.payload],
                page: action.payload
            };

        case SET_TAB_IDX:
            return {
                ...state,
                tabIdx: action.payload
            };
        default:
            return {...state};
    }
}
