import {SAVE_NOTE} from "./actions.ts";
import {DELETE_NOTE} from "./actions.ts";
import {v4} from "uuid";

const initialState = []

const notesReducer = (state = initialState, action) => {
    console.log("action",action)
    switch (action.type) {
        case SAVE_NOTE:
            console.log("SAVE_NOTE",action.payload)
            if(!action.payload.id){
                action.payload.id = v4()
                return [...state, action.payload]
            }
            console.log("payload.id",action.payload.id)
            let note = state.find(note => note.id === action.payload.id)
            note.name = action.payload.name
            note.current = action.payload.current

            console.log("new state",state)
            return [...state]
            //state.push(action.payload)

        case DELETE_NOTE:
            console.log("DELETE_NOTE",action.payload)
            return state.filter(x => x.id !== action.payload)

        default:
            console.log("default state")
            return state
    }
}

export default notesReducer