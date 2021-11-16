import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { testSlice, TestState } from '../features/testSlice';


export interface RootStore {
  test: TestState
}

export default createStore(
  combineReducers(
    {
      test: testSlice.reducer
    }),
  applyMiddleware(thunk),
);
