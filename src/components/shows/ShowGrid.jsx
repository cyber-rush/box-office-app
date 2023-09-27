import { useReducer, useEffect } from "react"
import ShowCard from "./ShowCard"

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
const ShowGrid = ({ shows }) => {

    const [starredShows, dispatchStarred] = usePersistedReducer(starredShowsReducer, [], 'starredShows')  //state is an array of shows with their id's
    console.log(starredShows)
    const onStarMeClick = (showId) => {
        const isStarred = starredShows.includes(showId)

        if (isStarred) {
            dispatchStarred({ type: 'UNSTAR', showId })
        }
        else {
            dispatchStarred({ type: 'STAR', showId })
        }
    }
    return <div>
        {shows.map(data => (
            <ShowCard
                key={data.show.id}
                id={data.show.id}
                name={data.show.name}
                image={data.show.image ? data.show.image.medium : '/not-found-image.png'}
                summary={data.show.summary}
                onStarMeClick={onStarMeClick}
            />
        ))}
    </div>
}

export default ShowGrid