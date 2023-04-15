import { Action } from "@ngrx/store";

export const countNode = 'count';
export interface CountState {
    count: number;
    date: number;
}
const initialState: CountState = {
    count: 10,
    date: Date.now()
}

export const countReducer = (state = initialState, action:Action) => {
    // switch(action.type){

    // }
    return state;
}