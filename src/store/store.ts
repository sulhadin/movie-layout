import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import { saveState } from './helpers/localStorage'
import throttle from 'lodash/throttle'
import { LocalStateKey } from '../enums/LocalStateKey'

const middleware = [...getDefaultMiddleware()]

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

store.subscribe(
  throttle(() => {
    saveState(
      {
        preferences: store.getState().preferences,
      },
      LocalStateKey.PREFERENCES
    )
  }, 1000)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
