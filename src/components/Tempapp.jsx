import React, { useState } from 'react'
import './Styles/tempapp.scss'


const Tempapp = () => {

    // const [city, setCity] = useState("Pune");

    return (
        <div className='container'>
            <div className='main'>
                <div className='inputData'>
                    <input type='search' className='inputField' onChange={(event) => { }} />
                </div>
                <div className='info'>
                    <h2 className='location'>
                        <i class="fa-solid fa-street-view"></i>{city}
                    </h2>
                    <h1 className='temp'>5.25°Cel</h1>
                    <h3 className='tempmin_max'> Min: 5.25°Cel | Max: 5.25°Cel</h3>
                </div>
            </div>

        </div>
    )
}

export default Tempapp