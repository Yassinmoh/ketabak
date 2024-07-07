import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

const appStateFeature = createFeatureSelector<AppState>('App');
export const getHeaderTitle = createSelector(appStateFeature, state => state.headerTitle)
