import {combineReducers, legacy_createStore} from "redux";

import notesReducer from "./notesReducer.js";

export function mainStore() {
    return legacy_createStore(
        combineReducers({
                notes: notesReducer,
            }
        )
    );

}