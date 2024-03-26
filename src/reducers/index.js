/** root reducer */
import { combineReducers, legacy_createStore as createStore } from "redux";

//module
import data from "reducers/module/dataReducer";
import modal from "reducers/module/modalReducer";
import view from "reducers/module/viewReducer";

const rootReducer = combineReducers({
  data: data,
  modal: modal,
  view: view
});

const store = createStore(rootReducer);

export default store;