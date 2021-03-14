import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { loadState } from './helpers/localStorage'
import { LocalStateKey } from '../enums/LocalStateKey'
import { Preferences, PreferenceState } from '../types/preferences'

// Gets local state to initialize the first state.
const persistedState = loadState<Preferences>(LocalStateKey.PREFERENCES)

// Define the initial state using that type
const initialState: PreferenceState = {
  favorites: [],
  ...(persistedState?.preferences ?? {}),
}

export const preferences = createSlice({
  name: 'preferences',

  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    saveFavorite: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload
    },
  },
})

export const { saveFavorite } = preferences.actions

// Other code such as selectors can use the imported `RootState` type
// Since this is a small project, there is nothing harm using this.
// As the project groves, this should not be used and all states should be defined separately because
// if other states are updated, those ones will trigger the render and components will be rendered unnecessarily.
export const selectPreferences = (state: RootState) => state.preferences

export default preferences.reducer
