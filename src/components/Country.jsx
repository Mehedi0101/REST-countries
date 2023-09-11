import { useState } from 'react';
import './country.css'

const Country = ({country,traveledCountries,setTraveledCountries}) => {
    const {capital, flags, name, population, region} = country;

    const [btnState, setBtnState] = useState(false);

    const travelMarking = (btnState) => {
        traveledCountries.includes(country) || setTraveledCountries([...traveledCountries, country]);
        traveledCountries.includes(country) && setTraveledCountries(traveledCountries.filter( item => item !== country))
        // const newList = [...traveledCountries, country]
        // setTraveledCountries(newList);
        setBtnState(!btnState);
    }

    return (
        <div className={btnState ? 'country-container-active' : 'country-container'}>
            <h3 className='name'>{name.common}</h3>
            <div className='img-container'>    
                <img className='flag-img' src={flags.png} alt="" />
            </div>
            <p className='capital'><strong>Capital:</strong> {capital ? capital.map( item => item) : ''}</p>
            <p className='population'><strong>Population:</strong> {population}</p>
            <p className='region'><strong>Region:</strong> {region}</p>
            <button className={btnState ? 'btn-active' : 'btn'} onClick={()=>{travelMarking(btnState)}}>{btnState ? 'Unmark' : 'Mark as traveled'}</button>
        </div>
    );
};

export default Country;