import { useState } from 'react'
import styled from 'styled-components'

import Country from '../components/Country'

//Styles
const SectionContainer = styled.main`
    border: 1px solid blue;
    width: 90%;
    margin: 1em auto;

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

//Component
function HomePage({countries}) {
    const [countryName, setCountryName] = useState('')
    const [region, setRegion] = useState('')
    console.log(region)
    console.log(region && true)

    const mappedCountries = countries.map(data => (
        <Country 
            key={data.name.common}
            countries={data} 
        />
    ))

    return (
        <SectionContainer>
            <section>
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
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                >
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="ociania">Oceania</option>
                </DropList>
            </section>
            <section>
                {mappedCountries}
            </section>
        </SectionContainer>
    )
}

export default HomePage