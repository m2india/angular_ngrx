import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

export const COUNERT_STATE_NAME = 'counter';
const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(getCounterState, (state) =>{
    return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
    return state.testText;
})