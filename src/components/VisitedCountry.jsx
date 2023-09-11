const VisitedCountry = ({visitedCountry}) => {

    const {flags, name} = visitedCountry;
    console.log(flags.png, name);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{maxWidth: '25px', maxHeight: '25px'}} src={flags.png} alt="" />
            <p>{name.common}</p>
        </div>
    );
};

export default VisitedCountry;