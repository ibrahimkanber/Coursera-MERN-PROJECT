import {COMMENTS} from "../shared/comments"
import * as ActionTypes from "./ActionTypes"

export const comments=(state=COMMENTS,action)=>{
    console.log("action:",action.payload)
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment=action.payload
            comment.id=state.length;
            comment.date=new Date().toISOString();
            return [...state,comment]

        default:
            return state;
    }
}