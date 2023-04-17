import { Action, createReducer,on } from "@ngrx/store";
import {increment, decrement, reset} from "./count.actions";
export interface CountState {
    count: number;
    date: number;
}
const initialState: CountState = {
    count: 0,
    date: Date.now()
}

// export const countReducer = (state = initialState, action:Action) => {
//     // switch(action.type){

//     // }
//     return state;
// }
const countReducer = createReducer(
    initialState,
    on(increment, state => ({ ...state, count: state.count+1 })),
    on(decrement, state => ({ ...state, count: state.count-1 })),
    on(reset, state => ({ ...state, count: 0, date: Date.now() }))
  );

  export function reducer(state: CountState | undefined, action: Action) {
    return countReducer(state, action);
  }