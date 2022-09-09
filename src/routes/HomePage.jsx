import { useState } from 'react'
import styled from 'styled-components'

import Country from '../components/Country'
import ScrollToTop from '../components/ScrollToTop'
import { renderCountries } from '../components/utils'
import { SectionContainer, Loading } from '../components/Styles'

//Styles
const SectionInput = styled.section`
    margin-bottom: 1em;
    
    @media (min-width: 600px) {
        margin-bottom: 2em;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
`

const InputContainer = styled.p`
    border-radius: 5px;
    padding: .7em 1.5em;
    margin-top: 0;
    display: flex;
    align-items: center;
    gap: 1em;
    color: var(--input);
    background-color: var(--element);
    box-shadow: var(--box-shadow);

    & > input {
        border: none;
        width: 100%;
        padding: .5em .1em;
        font-size: .9rem;
        color: inherit;
        background-color: inherit;

        &::placeholder {
            color: inherit;
        }
    }

    @media (min-width: 600px) {
        width: 40%;
    }
`

const Error = styled.h3`
    grid-column: 1/-1;
`

const DropList = styled.select`
    border: none;
    padding: 1.3em 1em;
    width: 50%;
    border-radius: 5px;
    color: var(--input);
    background-color: var(--element);
    box-shadow: var(--box-shadow);

    @media (min-width: 600px) {
        width: 20%;
    }
`

const SectionCountries = styled.section`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 3em;
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
                    aria-label="Filter by region"
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
                    countryName && mappedCountries.length === 0 ?
                    <Error>The country you are searching for does not exist</Error>:
                    <Loading>
                        <i class="ri-loader-4-line"></i>
                    </Loading>
                }
            </SectionCountries>
            <ScrollToTop />
        </SectionContainer>
    )
}

export default HomePage