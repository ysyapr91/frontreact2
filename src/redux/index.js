import { combineReducers, legacy_createStore as createStore } from "redux";

import view from "redux/module/viewReducer";

const rootReducer = combineReducers({
    view
});

const store = createStore(rootReducer);

export default store;