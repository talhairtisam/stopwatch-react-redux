import {actionType} from "./actionType";

export const startAction = (action) =>{
    return {
        type: actionType.START
    }
}

export const stopAction = (action) =>{
    return {
        type: actionType.STOP
    }
}

export const resetAction = (action) =>{
    return {
        type: actionType.RESET
    }
}