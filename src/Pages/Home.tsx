import React, {useState} from 'react';
import { useLazyQuery, useQuery, useMutation } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql/QueriesGetWeather';

const Home = () => {
    const [citySearch1, setCitySearch1] = useState('');
    const [citySearch2, setCitySearch2] = useState('');

    // start useLazyQuery
    const [getWeather, {loading : lioading1, data : data1, error : error1}] = useLazyQuery(
        GET_WEATHER_QUERY,
        {
        variables: { name: citySearch1 },
        }
    );

    if(data1) {
        console.log('data1 error', data1)
    }

    //end useLazyQuery

    //start useQuery
    const {loading : loading2, data : data2, error : error2} = useQuery(
        GET_WEATHER_QUERY,
        {
        variables: { name: citySearch2 },
        }
    );
    //end useQuery

    return (
        <div className='home'>
            <h1>using useLazyQuery</h1>
            <h1>Search Weather</h1>
            <input 
                type="text" 
                placeholder="Input City Name Here..."
                value={citySearch1}
                onChange={(e:any) => setCitySearch1(e.target.value)}
            />
            <button onClick={() => getWeather()}>Search</button>

            <div className='weather'>
                {!data1?.getCityByName ? (
                    <h1>No data</h1>
                ) : (
                    <>
                        <h1>{`City Name : ${data1?.getCityByName?.name}`}</h1>  
                        <h1>{`Temperature : ${data1?.getCityByName?.weather.temperature.actual}`}</h1>
                        <h2>{`Description : ${data1?.getCityByName?.weather.summary.description}`}</h2>
                    </>
                )}
            </div>
            -------------------------
            <h1>using useQuery</h1>
            <h1>Search Weather 2</h1>
            <input 
                type="text" 
                placeholder="Input City Name Here..."
                onChange={(e:any) => setCitySearch2(e.target.value)}
            />

            <div className='weather2'>
                {!data2?.getCityByName ? (
                    <h1>No data</h1>
                ) : (
                    <>
                        <h1>{`City Name : ${data2?.getCityByName?.name}`}</h1>  
                        <h1>{`Temperature : ${data2?.getCityByName?.weather.temperature.actual}`}</h1>
                        <h2>{`Description : ${data2?.getCityByName?.weather.summary.description}`}</h2>
                    </>
                )}
            </div>
            
        </div>
    )
}
export default Home;