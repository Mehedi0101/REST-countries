import './country.css'

const Country = ({country}) => {
    const {capital, flags, name, population, region} = country;
    return (
        <div className='country-container'>
            <h3 className='name'>{name.common}</h3>
            <div className='img-container'>    
                <img className='flag-img' src={flags.png} alt="" />
            </div>
            <p className='capital'><strong>Capital:</strong> {capital ? capital.map( item => item) : ''}</p>
            <p className='population'><strong>Population:</strong> {population}</p>
            <p className='region'><strong>Region:</strong> {region}</p>
            <button className='btn'>Mark as Traveled</button>
        </div>
    );
};

export default Country;