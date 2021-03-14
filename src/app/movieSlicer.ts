import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

export const movieSlice = createSlice({
    name: 'movie',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { incrementByAmount } = movieSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMovie = (state: RootState) => state.movie

export default movieSlice.reducer
