import VisitedCountry from "./components/VisitedCountry";

const VisitedCountries = ({traveledCountries}) => {
    return (
        <div style={{display: 'flex', gap: '20px', marginTop: '10px'}}>
            {
                traveledCountries.map((visitedCountry, index) => <VisitedCountry key={index} visitedCountry={visitedCountry}></VisitedCountry>)
            }
        </div>
    );
};

export default VisitedCountries;