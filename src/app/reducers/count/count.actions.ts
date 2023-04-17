import { createAction } from "@ngrx/store";


export const increment = createAction('[Count] Increment');
export const decrement = createAction('[Count] Decrement');
export const reset = createAction('[Count] Reset');