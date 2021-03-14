import { combineReducers } from '@reduxjs/toolkit'
import reducers from './index'

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer
