
const renderCountries = (countries, countryName, countryRegion) => {
    const searchInput = countryName.toLowerCase().trim()
    let countryNameFilter

    if(countryName && countryRegion) {
        countryNameFilter = countries.filter(({region, name: {common}}) => {
            const commonName = common.toLowerCase()
            const regionName = region.toLowerCase()
            return commonName.includes(searchInput) && countryRegion === regionName
        })
    } else if(countryName) {
        countryNameFilter = countries.filter(({name: {common}}) => {
            const commonName = common.toLowerCase()
            return commonName.includes(searchInput)
        })
        
    } else if(countryRegion) {
        countryNameFilter = countries.filter(({region}) => {
            const regionName = region.toLowerCase()
            return countryRegion === regionName
        })
    }else {
        return countries
    }

    return countryNameFilter
}

const findBorderCountry = async (countryCode) => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    const data = await res.json()
    return data
}

export { renderCountries, findBorderCountry }