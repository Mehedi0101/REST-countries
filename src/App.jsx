import { useState } from 'react';
import './App.css'
import Countries from './components/Countries'
import VisitedCountries from './VisitedCountries';

function App() {

  const [traveledCountries, setTraveledCountries] = useState([]);

  return (
    <div className='main-container'>
      <h1 className='page-title'>Countrypedia</h1>
      <p className='visited'><strong>Visited Countries: </strong><VisitedCountries traveledCountries={traveledCountries}></VisitedCountries></p>
      <Countries className='main-container' traveledCountries={traveledCountries} setTraveledCountries={setTraveledCountries}></Countries>
    </div>
  )
}

export default App
