import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = () => {
    const [countryList, setCountryList] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
            .then( res => res.json())
            .then( data => setCountryList(data))
    }, [] )

    return (
        <div className="countries">
            {
                countryList.map( country => <Country key={country?.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;