import { useState } from "react"


const SearchForm = ({ onSearch }) => {

    const [searchStr, setSearchStr] = useState('');
    const [searchOption, setSearchOption] = useState("shows")

    const handleSearchChange = event => {
        setSearchStr(event.target.value);
    };

    const handleRadioChange = (event) => {
        setSearchOption(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()

        const options = {
            q: searchStr,
            searchOption
        }

        onSearch(options)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={handleSearchChange} />

                <label>
                    Shows
                    <input
                        type="radio"
                        name="search-option"
                        value="shows"
                        checked={searchOption === "shows"}
                        onChange={handleRadioChange}
                    />

                </label>
                <label>
                    Actors
                    <input
                        type="radio"
                        name="search-option"
                        value="actors"
                        checked={searchOption === "actors"}
                        onChange={handleRadioChange}
                    />
                </label>

                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchForm