import { LocalStateKey } from '../../enums/LocalStateKey'

/**
 * Loads state from local storage by key
 *
 * @param {LocalStateKey} localStateKey - Unique key for data to be taken from localStorage.
 * @return {T | undefined} - Returns a generic data or undefined if user privacy mode does not allow the use of localStorage.
 */
export function loadState<T>(localStateKey: LocalStateKey): T | undefined {
    try {
        const serializedState = localStorage.getItem(localStateKey)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState) as T
    } catch (err) {
        return undefined
    }
}

/**
 * Saves given state to localStorage by key.
 *
 * @param {T} state - A state to be stored in localStorage
 * @param {LocalStateKey} localStateKey - Unique key for data to be stored in localStorage.
 */
export function saveState<T>(state: T, localStateKey: LocalStateKey): void {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(localStateKey, serializedState)
    } catch (err) {
        // TODO: Error handler later.
    }
}
