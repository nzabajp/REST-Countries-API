import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { SectionContainer } from '../components/Styles'
import { findBorderCountry } from '../components/utils'
import ScrollToTop from '../components/ScrollToTop'

const DetailsContainer = styled.div`
    margin-top: 2em;

    @media (min-width: 600px) {
        border: 1px solid green;
        display: grid;
        grid-template-columns: repeat(2, 1fr) repeat(2, 1fr);
        grid-template-areas: 
            "flag flag header header"
            "info1 info1 info2 info2"
            "border border border border";
        grid-gap: 1em;

        & .flag {
            grid-area: flag;
        }
        & .header {
            grid-area: header;
            align-self: end;
        }
        & .info1 {
            grid-area: info1;
        }
        & .info2 {
            grid-area: info2;
        }
        & .border {
            grid-area: border;
        }
    }

    @media (min-width: 900px) {
        grid-template-areas: 
            "flag flag header header"
            "flag flag info1 info2"
            "border border border border";   
    }

    @media (min-width: 1020px) {
        grid-template-areas: 
            "flag flag header header"
            "flag flag info1 info2"
            "flag flag border border";   
    }
`

const StyledButton = styled.button`
    border: 1px solid red;
    display: inline-block;
    text-decoration: none;
    padding: .5em 2.5em;
    margin-right: 1em;
    margin-bottom: 1em;
    cursor: pointer;
`

//Component
const DetailsPage = ({ countries }) => {
    const [details, setDetails] = useState({})
    const { country } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({top: 0})
    }, [])


    if(Object.keys(details).length === 0 && countries.length > 0) {
        const countryDetails = countries.find(({name: {common}}) => common === country)
        setDetails(countryDetails)
    }

    //conditional render to avoid referencing errors
    if(Object.keys(details).length === 0) {
        return (
            <SectionContainer>
                <h1>Loading...</h1>
            </SectionContainer>
        )
    } else {
        const [firstNative] = Object.keys(details.name.nativeName)
        const [currencyName] = Object.keys(details.currencies)
        const countryLanguages = []
        for(let language in details.languages) {
            countryLanguages.push(details.languages[language])
        }

        const borderButtons = details.borders.map(border => (
            <StyledButton 
                key={border}
                onClick={async () => {
                    const newCountry = await findBorderCountry(border)
                    const {name: {common}} = newCountry[0]
                    navigate(`/${common}`, {replace: true})
                    setDetails(newCountry[0])
                    window.scrollTo({top: 0})
                }}
            >
                {border}
            </StyledButton>
            )
        )

        return (
            <SectionContainer>
                <StyledButton 
                    as={Link} 
                    to="/"
                >
                    <i className="ri-arrow-left-line"></i> Back
                </StyledButton>
                <DetailsContainer>
                    <img src={details.flags.png} className="flag"/>
                    <h1 className="header">{details.name.common}</h1>
                    <div className="info1">
                        <p>
                            Native Name: {details.name.nativeName[firstNative].official}
                        </p>
                        <p>
                            Population: {Number(details.population).toLocaleString()}
                        </p>
                        <p>
                            Region: {details.region}
                        </p>
                        <p>
                            Sub Region: {details.subregion}
                        </p>
                        <p>
                            Capital: {details.capital.join(", ")}
                        </p>
                    </div>
                    <div className="info2">
                        <p>
                            Top Level Domain: {details.tld}
                        </p>
                        <p>
                            Currencies: {details.currencies[currencyName].name} ({details.currencies[currencyName].symbol})
                        </p>
                        <p>
                            Languages: {countryLanguages.join(", ")}
                        </p>
                    </div>
                    <div className="border">
                        <h3>Border Countries:</h3>
                        {borderButtons}
                    </div>
                </DetailsContainer>
                <ScrollToTop />
            </SectionContainer>
        )
    }
}

export default DetailsPage