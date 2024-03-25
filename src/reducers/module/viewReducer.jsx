const SET_MAIN_PAGE = 'view/SET_MAIN_PAGE';
const SET_DATA = 'view/SET_DATA';

export const setMainPage = index => { return { type: SET_MAIN_PAGE, payload: index }};
export const setData = data => { return { type: SET_DATA, payload: data }};

const initState = {
  page: {
    main: null
  },
  pageList: {
    //main: [<Pages.ChatList />, <Pages.Test1 />, <Pages.Test2 />]
    main: []
  },
  data: {}
};

export default function viweReducer(state = initState, action) {

  switch (action.type) {
    case SET_MAIN_PAGE:
      console.log(action)
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
      return { ...state };

    default:
      return { ...state };
  }
}
