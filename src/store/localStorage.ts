import { LocalStateKey } from '../enums/LocalStateKey'

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

export function saveState<T>(state: T, localStateKey: LocalStateKey) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(localStateKey, serializedState)
    } catch (err) {
        // TODO: Error handler later.
    }
}
