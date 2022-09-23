import React, {useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/Queries';

const Home = () => {
    const [citySearch, setCitySearch] = useState('');

    const [getWeather, {loading, data,  error}] = useLazyQuery(
        GET_WEATHER_QUERY,
        {
        variables: { name: citySearch },
        }
    );

    if(data) {
        console.log(data)
    }

    return (
        <div className='home'>
            <h1>Search Weather</h1>
            <input 
                type="text" 
                placeholder="Input City Name Here..."
                onChange={(e:any) => setCitySearch(e.target.value)}
            />
            <button onClick={() => getWeather()}>Search</button>

            <div className='weather'>
                {!data?.getCityByName ? (
                    <h1>No data</h1>
                ) : (
                    <>
                        <h1>{`City Name : ${data?.getCityByName?.name}`}</h1>  
                        <h1>{`Temperature : ${data?.getCityByName?.weather.temperature.actual}`}</h1>
                        <h2>{`Description : ${data?.getCityByName?.weather.summary.description}`}</h2>
                    </>
                )}
            </div>
        </div>
    )
}
export default Home;