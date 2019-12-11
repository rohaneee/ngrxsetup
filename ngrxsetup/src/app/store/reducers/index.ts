import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromReducer from './test.reducer';

export interface AppState {
  appData: fromReducer.SampleState;
}

export const appReducer: ActionReducerMap<AppState> = {
    appData: fromReducer.reducer
};

export const getPolicyState = createFeatureSelector<AppState>(
  'app'
);
