import { Link } from 'react-router-dom'
import styled from "styled-components"

//Styling
const CountryContainer = styled(Link)`
    border-radius: 5px;
    text-decoration: none;
    color: var(--text);
    box-shadow: var(--box-shadow);
    background-color: var(--element);

    & > img {
        border-radius: 5px 5px 0 0;
    }
`

const Overview = styled.div`
    padding: 1.5em 1em;
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
        <CountryContainer 
            to={`/${common}`}
        >
            <img src={png} />
            <Overview>
                <h2>{common}</h2>
                <p><span>Population:</span> {Number(population).toLocaleString()}</p>
                <p><span>Religion:</span> {region}</p>
                <p><span>Capital:</span> {capital}</p>
            </Overview>
        </CountryContainer>
    )
}

export default Country