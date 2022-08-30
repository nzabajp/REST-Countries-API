import styled from "styled-components"

const CountryContainer = styled.div`
    border: 1px solid pink;
`

function Country({countries}) {
    const { 
        name: { common },
        flags: { png },
        population, 
        region, 
        capital 
    } = countries

    return (
        <CountryContainer>
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