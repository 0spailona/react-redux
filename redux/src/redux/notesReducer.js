import {DELETE_NOTE, SAVE_NOTE} from "./actions.ts";
import {v4} from "uuid";

const initialState = [];

const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SAVE_NOTE: {
            if (!action.payload.id) {
                action.payload.id = v4();
                return [...state, action.payload];
            }

            let note = state.find(note => note.id === action.payload.id);
            note.name = action.payload.name;
            note.current = action.payload.current;

            return [...state];
        }

        case DELETE_NOTE: {
            return state.filter(x => x.id !== action.payload);
        }

        default: {
            return state;
        }
    }
};

export default notesReducer;