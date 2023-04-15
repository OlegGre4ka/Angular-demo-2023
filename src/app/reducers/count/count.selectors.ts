import { createFeatureSelector, createSelector } from '@ngrx/store';
import { countNode, CountState } from './count.reducer';

export const selectCountFeature = createFeatureSelector<CountState>(countNode);
// export const selectCountFeature = createFeatureSelector<CountState>(countNode);
console.log(selectCountFeature, "selectFeature")
export const selectCount = createSelector(
    selectCountFeature,
    (state: CountState): number => state.count
);

export const selectDate = createSelector(
    selectCountFeature,
    (state: CountState): number => state.date
);