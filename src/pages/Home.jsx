import { useState } from "react"
import { searchForShows } from "../api/tvmaze"

const Home = () => {
    const [searchStr, setSearchStr] = useState('')
    const [apiData, setApiData] = useState(null)
    const [apiDataError, setApiDataError] = useState(null)

    const handleSearchChange = (event) => {
        setSearchStr(event.target.value)
    }

    const onSearch = async (event) => {

        try {
            setApiDataError(null)
            event.preventDefault()
            const result = await searchForShows(searchStr)
            setApiData(result)
        }
        catch (error) {
            setApiDataError(error)
        }
    }

    const renderApiData = () => {

        if (apiDataError) {
            return <div>Error Ocurred : {apiDataError.message}</div>
        }
        if (apiData) {
            return apiData.map(data => (
                <div key={data.show.id}>{data.show.name}</div>
            ))
        }
        return null
    }

    return (
        <div>
            <form onSubmit={onSearch}>
                <button type="submit" >Search</button>
                <input type="text" onChange={handleSearchChange} />
            </form>
            <div>{renderApiData()}</div>
        </div>
    )

}

export default Home