import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountState } from './count.reducer';

export const selectCountFeature = createFeatureSelector<CountState>('count');
export const getCount = createSelector(
    selectCountFeature,
    (state: CountState): number => state.count
);

export const getDate = createSelector(
    selectCountFeature,
    (state: CountState): number => state.date
);