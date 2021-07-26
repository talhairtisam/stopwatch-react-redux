import {actionType} from "./actionType";

const INITIAL_STATE = {
    isStart: false,
    doReset: true
}


export const timer = (state= INITIAL_STATE,action) => {
    switch(action.type){
        case actionType.START:
            return {...state, isStart: true,doReset:false}
        case actionType.STOP:
            return {...state, isStart: false,doReset:false}
        case actionType.RESET:
            return {...state, isStart: false, doReset: true}
        default:
            return state
    }
} 