const SET_PAGE = 'view/SET_PAGE';
const SET_PAGE_LIST = 'view/SET_PAGE_LIST';
const SET_MAIN_PAGE = 'view/SET_MAIN_PAGE';
const SET_DATA = 'view/SET_DATA';

export const setPage = (key, comp) => { return { type: SET_PAGE, key: key, payload: comp } };
export const setPageList = (key, obj) => { return { type: SET_PAGE_LIST, key: key, payload: obj } };
export const setMainPage = index => { return { type: SET_MAIN_PAGE, payload: index } };
export const setData = obj => { return { type: SET_DATA, payload: obj } };

const initState = {
  page: {
    main: null
  },
  pageList: {
    main: [],
    mainTab: []
  },
  data: {}
};

export default function viweReducer(state = initState, action) {

  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: {
          [action.key]: action.payload
        }
      };

    case SET_PAGE_LIST:
      return {
        ...state,
        pageList: {
          [action.key]: action.payload
        }
      };

    case SET_MAIN_PAGE:
      return {
        ...state,
        page: {
          main: state.pageList.main[action.payload]
        }
      };

    case SET_DATA:
      if (typeof action.payload == "object") {
        Object.assign(...state.data, action.payload);
      };
      return state;

    default:
      return state;
  }
}
