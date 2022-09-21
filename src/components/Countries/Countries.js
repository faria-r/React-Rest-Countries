import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [Countries, setCountries]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello From Countries!!:{Countries.length}</h1>
            <div className='countries-container'>
            { 
                Countries.map(country => <Country 
                    country={country}
                    key={country.cca3}
                    >  
                    </Country> )
            }
            {
                Countries.map(country => console.log(country))
            }
            </div>
        </div>
    );
};

export default Countries;