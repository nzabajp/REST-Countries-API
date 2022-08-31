import { Link } from 'react-router-dom'
import styled from "styled-components"

//Styling
const CountryContainer = styled(Link)`
    border: 1px solid pink;
`

//Component
const Country = ({countries}) => {
    const { 
        name: { common },
        flags: { png },
        population, 
        region, 
        capital 
    } = countries

    return (
        <CountryContainer to={`/${common}`}>
            <div>
                <img src={png} />
            </div>
            <div>
                <h2>{common}</h2>
                <p>Population: {population}</p>
                <p>Religion: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </CountryContainer>
    )
}

export default Country