// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import reducers from './reducers'

const rootReducer = combineReducers({
    ...reducers,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
