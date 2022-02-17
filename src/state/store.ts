import {combineReducers, createStore} from '@reduxjs/toolkit';
import {counterReducer} from './counter-reduser';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>