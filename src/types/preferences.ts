// Define a type for the slice state
export interface PreferenceState {
    favorites: string[]
}

// Define a type for local state.
export interface Preferences {
    preferences: PreferenceState
}
