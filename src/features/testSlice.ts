import { Action, ActionCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface TestState {
  value: number;
}

export const incrementAction: ActionCreator<Action & TestState> = () => {
  return {
    type: 'increment',
    value: 10
  };
};

export type TestReducers = {
  incrementAsync: (state: TestState) => void;
  increment: (state: TestState) => void;
  decrement: (state: TestState) => void;
}

// Define a thunk that dispatches those action creators
export const fetchUsers = () => async (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment())
  }, 5000)
}

export const asyncIncrement = createAsyncThunk('increment', async () => {
  console.log('INCE')
  return await 2;
})

export const testSlice = createSlice({
  name: 'slice',
  initialState: {
    value: 0
  },
  extraReducers: {
    [asyncIncrement.fulfilled.type]: (state, action) => {
      console.log('INCR', state, action);
      state.value += action.payload;
    }
  },
  reducers: {
    // incrementAsync: state => {
    //   console.log('INCR ASYNC')
    //   return (dispatch: Dispatch<Action>): any => {
    //     console.log('ECEVURE', state);
    //     state.value += 1;
    //     dispatch(incrementAction());
    //   }
    // },
    increment: state => {
      console.log('INC')
      state.value += 1;
    },
    incrementManual: (state, action) => {
      state.value = +action.payload;
    }
    // decrement: state => {
    //   state.value -= 1;
    // }
  }
});
export const {increment, incrementManual} = testSlice.actions;


