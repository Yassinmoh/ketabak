import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { appReducer } from './app.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  App:appReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
