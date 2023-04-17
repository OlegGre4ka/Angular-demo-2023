import {
    ActionReducerMap, MetaReducer
  } from '@ngrx/store';
  
  import { environment } from './../../environments/environment';

  import { reducer, CountState} from './count/count.reducer';
  
  export interface State {
    count: CountState
  }
  
  export const reducers: ActionReducerMap<State> = {
    count: reducer
  };
  
//   export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];