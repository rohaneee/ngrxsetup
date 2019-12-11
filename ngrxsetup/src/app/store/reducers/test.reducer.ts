import * as fromAction from './../actions/test.action';

export interface SampleState {
  data: object;
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

export const initialState: SampleState = {
  data: null,
  loading: false,
  loaded: false,
  error: false
};

export function reducer(
  state = initialState,
  action: fromAction.TestActionUnion
) {
  switch (action.type) {
    case fromAction.DISPATCH_ACTION: {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false
      };
    }
  }
  return state;
}
