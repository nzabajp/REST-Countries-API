import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { SectionContainer } from '../components/Styles'
import { findBorderCountry } from '../components/utils'
import ScrollToTop from '../components/ScrollToTop'

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
            <button 
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
            </button>
            )
        )

        return (
            <SectionContainer>
                <Link to="/">Back</Link>
                <img src={details.flags.png}/>
                <h1>{details.name.common}</h1>
                <div>
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
                <div>
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
                <div>
                    <h3>Border Countries</h3>
                    {borderButtons}
                </div>
                <ScrollToTop />
            </SectionContainer>
        )
    }
}

export default DetailsPage