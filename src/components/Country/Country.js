import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area,region,population,name,flags}=props.country;
    return (
        <div className='country'>
            <h2>Country:{name.common}</h2>
            <p>Population:{population}</p>
            <p>region:{region}</p>
            <p>area:{area}</p>
            <img src={flags.png} alt=""  />
        </div>
    );
};

export default Country;