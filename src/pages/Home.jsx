import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ActorGrid from '../components/actors/ActorGrid';
import ShowGrid from '../components/shows/ShowGrid';

const Home = () => {

    const [apiData, setApiData] = useState(null);
    const [apiDataError, setApiDataError] = useState(null);

    const onSearch = async ({ q, searchOption }) => {  //q stands for query

        try {
            setApiDataError(null);
            let result;
            if (searchOption === 'shows') {
                result = await searchForShows(q);
            }
            else {
                result = await searchForPeople(q);

            }
            setApiData(result);

        } catch (error) {
            setApiDataError(error);
        }
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
