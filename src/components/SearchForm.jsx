import { useState } from "react"
import { useSearchStr } from "../lib/useSearchStr";
import CustomRadio from "./CustomRadio";

const SearchForm = ({ onSearch }) => {

    const [searchStr, setSearchStr] = useSearchStr()
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

                <CustomRadio
                    label="Shows"
                    name="search-option"
                    value="shows"
                    checked={searchOption === "shows"}
                    onChange={handleRadioChange}
                />

                <CustomRadio
                    label="Actors"
                    name="search-option"
                    value="actors"
                    checked={searchOption === "actors"}
                    onChange={handleRadioChange}
                />

                <button type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchForm