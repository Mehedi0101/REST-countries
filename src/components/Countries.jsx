import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = ({traveledCountries,setTraveledCountries}) => {
    const [countryList, setCountryList] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region')
            .then( res => res.json())
            .then( data => setCountryList(data))
    }, [] )

    return (
        <div className="countries">
            {
                countryList.map( country => <Country key={country?.ccn3} country={country} traveledCountries={traveledCountries} setTraveledCountries={setTraveledCountries}></Country>)
            }
        </div>
    );
};

export default Countries;