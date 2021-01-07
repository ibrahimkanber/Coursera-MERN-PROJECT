import * as ActionTypes from "./ActionTypes";


export const leaders=(state={
    isLoading:true,
    errorMessage:null,
    leaders:[]
},action)=>{
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state,isLoading:false,errorMessage:null,leaders:action.payload}
        case ActionTypes.LEADERS_LOADING:
            return {...state,isLoading:true,errorMessage:null,leaders:[]}
        case ActionTypes.LEADERS_FAIL:
            return  {...state,isLoading:false,errorMessage:action.payload,leaders:[]}
        default:
            return state;
    }
}