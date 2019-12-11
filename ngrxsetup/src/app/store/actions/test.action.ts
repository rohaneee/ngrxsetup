import { Action } from '@ngrx/store';

export const DISPATCH_ACTION = '[App] Dispatch Test Action';

export class TestAction implements Action {
  readonly type = DISPATCH_ACTION;
}

export type TestActionUnion = TestAction;


