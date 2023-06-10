import React, { useEffect, useState } from 'react'
import './Styles/tempapp.scss'

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Nagpur')

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=11054c1f7f371fe1b1ec3bf06e94e316`
            const response = await fetch(url)
            const resJson = await response.json();
            console.log(resJson)

        }

        fetchApi();
    })

    return (
        <div className='container'>
            <div className='main'>
                <div className='inputData'>
                    <input type='search' className='inputField' onChange={(event) => { }} />
                </div>
                <div className='info'>
                    <h2 className='location'>
                        <i class="fa-solid fa-temperature-three-quarters" style="color: #ffffff;"></i>{city}
                    </h2>
                    <h1 className='temp'>5.25°Cel</h1>
                    <h3 className='tempmin_max'> Min: 5.25°Cel | Max: 5.25°Cel</h3>
                </div>
            </div>

        </div>
    )
}

export default Tempapp