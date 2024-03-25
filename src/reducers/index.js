/** root reducer */
import { combineReducers, legacy_createStore as createStore } from "redux";
//module
import content from "reducers/module/contentReducer";
import data from "reducers/module/dataReducer";
import modal from "reducers/module/modalReducer";
import view from "reducers/module/viewReducer";

//test module
import testCount from "reducers/test/count";

const rootReducer = combineReducers({
  //module
  content: content,
  data: data,
  modal: modal,
  view: view,
  //test module
  testCount: testCount
});

const store = createStore(rootReducer);

export default store;