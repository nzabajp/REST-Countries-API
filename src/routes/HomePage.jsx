import { useState } from 'react'
import styled from 'styled-components'

import Country from '../components/Country'
import ScrollToTop from '../components/ScrollToTop'
import { renderCountries } from '../components/utils'
import { SectionContainer } from '../components/Styles'

//Styles
const SectionInput = styled.section`
    margin-bottom: 1em;
`

const InputContainer = styled.p`
    border: 1px solid red;
    border-radius: 5px;
    padding: .7em 1.5em;
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 1em;

    & > input {
        border: none;
        width: 100%;
        padding: .5em .1em;
    }
`

const DropList = styled.select`
    padding: 1em;
    width: 50%;
    border-radius: 5px;
    /* background-color: white; */
`

const SectionCountries = styled.section`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em;
`

//Component
const HomePage = ({countries}) => {
    const [countryName, setCountryName] = useState('')
    const [countryRegion, setCountryRegion] = useState('')

    const mappedCountries = renderCountries(countries, countryName, countryRegion)
        .map(data => (
            <Country 
            key={data.name.common}
            countries={data} 
            />
        )
    )

    return (
        <SectionContainer>
            <SectionInput>
                <InputContainer>
                    <i className="ri-search-line"></i>
                    <input 
                        type="text" 
                        placeholder="Search for a country..."
                        value={countryName}
                        onChange={(e) => setCountryName(e.target.value)}
                    />
                </InputContainer>
                <DropList
                    value={countryRegion}
                    onChange={(e) => setCountryRegion(e.target.value)}
                >
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </DropList>
            </SectionInput>
            <SectionCountries>
                {
                    mappedCountries.length > 0 ? 
                    mappedCountries : 
                    <h1>Loading...</h1>
                }
            </SectionCountries>
            <ScrollToTop />
        </SectionContainer>
    )
}

export default HomePage