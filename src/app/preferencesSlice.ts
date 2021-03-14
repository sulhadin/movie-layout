import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { loadState } from '../store/localStorage'
import { LocalStateKey } from '../enums/LocalStateKey'

// Define a type for the slice state
interface PreferenceState {
    favorites: number[]
}

// Define a type for local state.
interface Preferences {
    preferences: PreferenceState
}

// Gets local state to initialize the first state.
const persistedState = loadState<Preferences>(LocalStateKey.PREFERENCES)

// Define the initial state using that type
const initialState: PreferenceState = {
    favorites: [],
    ...(persistedState?.preferences ?? {}),
}

export const preferenceStateSlice = createSlice({
    name: 'preferences',

    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        saveFavorites: (state, action: PayloadAction<number[]>) => {
            state.favorites = action.payload
        },
    },
})

export const { saveFavorites } = preferenceStateSlice.actions

// Other code such as selectors can use the imported `RootState` type
// Since this is a small project, there is nothing harm using this.
// As the project groves, this should not be used and all states should be defined separately because
// if other states are updated, those ones will trigger the render and components will be rendered unnecessarily.
export const selectPreferences = (state: RootState) => state.preferences

export default preferenceStateSlice.reducer
