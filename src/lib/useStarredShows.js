import { useReducer, useEffect } from "react"
const usePersistedReducer = (reducer, initialState, localStorageKey) => {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        //Fetch the localStorage data
        const persistedValue = localStorage.getItem(localStorageKey)

        return persistedValue ? JSON.parse(persistedValue) : initial
    })

    //Now the sync the state with the localStorage
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state))
    }, [state, localStorageKey])

    return [state, dispatch]
}

const starredShowsReducer = (currentStarred, action) => {
    switch (action.type) {
        case 'STAR': return currentStarred.concat(action.showId)
        case 'UNSTAR': return currentStarred.filter(showId => showId !== action.showId)
        default: return currentStarred
    }
}

export const useStarredShows = () => {
    return usePersistedReducer(starredShowsReducer, [], 'starredShows')  //state is an array of shows with their id's
}