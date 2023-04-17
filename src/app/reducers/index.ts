import {
    ActionReducerMap, MetaReducer
  } from '@ngrx/store';
  
  import { environment } from './../../environments/environment';
// import { countReducer, CountState } from './count/count.reducer';
  import {/*countNode,*/ reducer, CountState} from './count/count.reducer';
  
  export interface State {
    // [countNode]: CountState
    count: CountState
  }
  
  export const reducers: ActionReducerMap<State> = {
    // [countNode]: countReducer
    count: reducer
  };
  
//   export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];