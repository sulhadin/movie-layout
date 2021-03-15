import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import throttle from 'lodash/throttle'
import rootReducer from './rootReducer'
import { saveState } from './helpers/localStorage'
import { LocalStateKey } from '../enums/LocalStateKey'

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

// Subscribes the store and saves the current state to localStorage
store.subscribe(
  throttle(() => {
    saveState(
      {
        preferences: store.getState().preferences,
      },
      LocalStateKey.PREFERENCES,
    )
  }, 1000),
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
