import { useState } from "react"

const Home = () => {
    const [searchStr, setSearchStr] = useState('')

    const handleSearchChange = (event) => {
        setSearchStr(event.target.value)
    }

    const onSearch = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`)
        const body = await response.json()
        console.log(body)
    }

    return (
        <div>
            <form onSubmit={onSearch}>
                <button type="submit" >Search</button>
                <input type="text" onChange={handleSearchChange} />
            </form>
        </div>
    )
}

export default Home