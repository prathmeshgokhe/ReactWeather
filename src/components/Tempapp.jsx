import React, { useEffect, useState } from 'react'
import './Styles/tempapp.scss'

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('dubai')

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=11054c1f7f371fe1b1ec3bf06e94e316`
            const response = await fetch(url)
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson)
        }

        fetchApi();
    }, [search])

    return (
        <div className='container'>
            <div className='main'>
                <div className='inputData'>
                    <input type='search' value={search} className='inputField' onChange={(event) => { setSearch(event.target.value) }} />
                </div>
                {!city ? (
                    <p> No Data Found</p>
                ) : (
                    <div className='info'>
                        <h2 className='location'>
                            <i class="fa-solid fa-temperature-three-quarters" ></i>{search}
                        </h2>
                        <h1 className='temp'>{((city.main?.temp) - 273).toFixed(2)} °Cel</h1>
                        <h3 className='tempmin_max'>
                            <div className='hum-win'>
                                Humidity: {(city.main?.humidity)}% <br />
                                Wind: {(city.wind?.speed)} km/hr</div>
                            <div class="vl"></div>
                            <div className='minmax-temp'>
                                Min Temp: {(city.main?.temp_min)} <br />
                                Max Temp: {(city.main?.temp_max)}</div>
                        </h3>

                    </div>
                )}


            </div>

        </div>
    )
}

export default Tempapp