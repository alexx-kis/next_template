import { createAction } from '@reduxjs/toolkit';

// %======================== actions ========================% //

export const doSomethingAction = createAction<string>('domain/doSomething');

// string - type of what will be passed as payload