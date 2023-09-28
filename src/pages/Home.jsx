import { useState } from 'react';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ActorGrid from '../components/actors/ActorGrid';
import ShowGrid from '../components/shows/ShowGrid';
import { useQuery } from '@tanstack/react-query'


const Home = () => {

    const [filter, setFilter] = useState(null)

    const { data: apiData, error: apiDataError } = useQuery({
        queryKey: ['search', filter],
        queryFn: () =>
            filter.searchOption === 'shows'
                ? searchForShows(filter.q)
                : searchForPeople(filter.q),

        enabled: !!filter,  // ⬇️ disabled as long as the filter is empty
        refetchOnWindowFocus: false
    })


    const onSearch = async ({ q, searchOption }) => {  //q stands for query
        setFilter({ q, searchOption })
    };

    const renderApiData = () => {
        if (apiDataError) {
            return <div>Error Ocurred : {apiDataError.message}</div>;
        }

        // When apiData is an empty array due to any gibberrish input --> undefined case
        if (apiData?.length === 0) { //Optional chaining is used to prevent any fear of null data causing errors
            return <div>No results</div>
        }

        //When there is an actual apiData
        if (apiData) {
            return apiData[0].show ? (
                <ShowGrid shows={apiData} />
            ) : (
                <ActorGrid actors={apiData} />
            )


        }
        return null;
    };

    return (
        <div>
            <SearchForm onSearch={onSearch} />
            <div>{renderApiData()}</div>
        </div>
    );
};

export default Home;
